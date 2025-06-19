import { connect } from '@/backend/db';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  await connect();

  try {
    const user = await User.findById(params.userId).select('tracker');
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, tracker: user.tracker });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { userId: string } }
) {
  await connect();

  try {
    const { field, value } = await request.json();

    // Validate field
    const validFields = ['signUp', 'submitForm', 'fillingAndSubmission', 'result', 'nextStep'];
    if (!validFields.includes(field)) {
      return NextResponse.json(
        { success: false, message: 'Invalid tracker field' },
        { status: 400 }
      );
    }

    const update = { [`tracker.${field}`]: value };
    const updatedUser = await User.findByIdAndUpdate(
      params.userId,
      { $set: update },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Tracker updated successfully`,
      user: updatedUser
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
