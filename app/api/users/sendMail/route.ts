import { NextResponse } from 'next/server';
import { sendEmail } from '@/backend/utils/email';
import { connect } from '@/backend/db';

connect();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

   const emailContent = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9; max-width: 600px; margin: auto;">
    <h1 style="color: #4CAF50; text-align: center; font-size: 24px;">📩 New Contact </h1>
    <p style="font-size: 16px; color: #555;">
      <strong style="color: #333;">Name:</strong> ${name}
    </p>
    <p style="font-size: 16px; color: #555;">
      <strong style="color: #333;">Email:</strong> ${email}
    </p>
    <div style="margin-top: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 10px; background-color: #fff;">
      <p style="font-size: 16px; color: #555; margin-bottom: 10px;">
        <strong style="color: #333;">Message:</strong>
      </p>
      <p style="font-size: 14px; color: #666; line-height: 1.6; white-space: pre-wrap;">
        ${message}
      </p>
    </div>
    <p style="margin-top: 20px; font-size: 14px; color: #888; text-align: center;">
      This message was sent via your website's contact form.
    </p>
  </div>
`;

    // Sending the email using the sendEmail utility
    await sendEmail({
      email: process.env.EMAIL_USER as string, 
      subject: `New Contact Form Submission from ${name}`,
      html: emailContent,
    });

    // Respond with success
    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
