// import { connect } from '@/backend/db';
// import userForm from '@/models/userForm';
// import { NextResponse } from 'next/server';

// export async function GET(
//   request: Request,
//   { params }: { params: { userId: string } }
// ) {
//   await connect();

//   try {
//     const applications = await userForm.find({ userId: params.userId }).select('applicationId tracker');

//     if (!applications || applications.length === 0) {
//       return NextResponse.json(
//         { success: false, message: 'No applications found for this user' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, applications });
//   } catch (error) {
//     console.error('Error fetching trackers:', error);
//     return NextResponse.json(
//       { success: false, message: 'Server error' },
//       { status: 500 }
//     );
//   }
// }


import { connect } from '@/backend/db';
import userForm from '@/models/userForm';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  await connect();

  try {
    // Extract userId from the URL
    const segments = request.url.split('/').filter(Boolean);
    // segments example: ["api", "tracker", "userIdValue"]
    const userId = segments[segments.length - 1];

    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID is required' },
        { status: 400 }
      );
    }

    const applications = await userForm
      .find({ userId })
      .select('applicationId tracker');

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
