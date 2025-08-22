import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import User from '@/models/userModel';
import { connect } from '@/backend/db';
import bcryptjs from 'bcryptjs';

connect();

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || '';

export async function POST(req: Request) {
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new NextResponse('Error occurred -- no svix headers', {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(webhookSecret);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new NextResponse('Error verifying webhook', {
      status: 400,
    });
  }

  const eventType = evt.type;

  try {
    if (eventType === 'user.created') {
      const { id, email_addresses, first_name, last_name, created_at } = evt.data;

      const email = email_addresses[0]?.email_address;
      const name = `${first_name || ''} ${last_name || ''}`.trim();

      if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
      }

      // Check if user already exists in your database
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return NextResponse.json({ message: 'User already exists' }, { status: 200 });
      }

      // Create a random password (since Clerk handles auth, we just need a placeholder)
      const randomPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = await bcryptjs.hash(randomPassword, 10);

      // Create user in your database
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        passwordConfirm: hashedPassword, // Since Clerk handles auth, we can set both to the same
        isVerified: true, // Clerk verifies emails
        status: 'done', // Since Clerk handles verification
        tracker: {
          signUp: true,
          submitForm: false,
          fillingAndSubmission: false,
          result: false
        },
        createdAt: new Date(created_at * 1000), // Convert Clerk timestamp to Date
      });

      return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });
    }

    return NextResponse.json({ message: 'Event received' }, { status: 200 });
  } catch (error) {
    console.error('Error handling webhook:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}