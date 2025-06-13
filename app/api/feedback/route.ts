import { NextResponse } from 'next/server';
import Feedback from '@/models/feedback';
import { connect } from "@/backend/db";

export async function POST(request: Request) {
  try {
    await connect();
    
    const { rating, testimonial, userId } = await request.json();

    // Validation
    if (!rating || typeof rating !== 'number' || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating is required and must be between 1 and 5' },
        { status: 400 }
      );
    }

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Create new feedback
    const feedback = new Feedback({
      rating,
      testimonial,
      userId
    });

    await feedback.save();

    return NextResponse.json(
      { message: 'Feedback submitted successfully', feedback },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error submitting feedback:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}