import { NextResponse } from 'next/server';
import { connect } from '@/backend/db';
import feedback from '@/models/feedback';

export async function POST(request: Request) {
  await connect();

  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.rating || !body.userId || !body.name || !body.description) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new feedback
    const Feedback = new feedback({
      rating: body.rating,
      testimonial: body.testimonial || '',
      userId: body.userId,
      name: body.name,
      description: body.description
    });

    await Feedback.save();

    return NextResponse.json(
      { success: true, data: feedback },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error submitting feedback:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit feedback',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}


export async function GET(request: Request) {
  await connect();

  try {
    // Get query parameters for pagination
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Get all feedback with pagination
    const feedbacks = await feedback.find()
      .sort({ createdAt: -1 }) // Sort by newest first
      .skip(skip)
      .limit(limit)
      .lean(); // Convert to plain JavaScript objects

    // Get total count for pagination info
    const total = await feedback.countDocuments();

    return NextResponse.json({
      success: true,
      data: feedbacks,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit),
        limit
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch feedbacks',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}