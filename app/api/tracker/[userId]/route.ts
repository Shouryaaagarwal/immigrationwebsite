import { connect } from '@/backend/db';
import userForm from '@/models/userForm';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  await connect();

  try {
    const applications = await userForm.find({ userId: params.userId }).select('applicationId tracker');

    if (!applications || applications.length === 0) {
      return NextResponse.json(
        { success: false, message: 'No applications found for this user' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, applications });
  } catch (error) {
    console.error('Error fetching trackers:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
