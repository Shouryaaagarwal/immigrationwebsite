import { connect } from '@/backend/db';
import Tracker from '@/models/trackermodel';
import { NextRequest, NextResponse } from 'next/server';

// export async function GET(
//   req: Request,
//   { params }: { params: { userId: string; applicationId: string } }
// ) {
//   await connect();

//   try {
//     const tracker = await Tracker.findOne({
//       userId: params.userId,
//       applicationId: params.applicationId
//     });

//     if (!tracker) {
//       return NextResponse.json(
//         { success: false, message: 'Tracker not found' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, tracker });
//   } catch (error) {
//     console.error('Error fetching tracker:', error);
//     return NextResponse.json(
//       { success: false, message: 'Server error' },
//       { status: 500 }
//     );
//   }
// }

export async function GET(req: NextRequest) {
  await connect();

  try {
    // Extract userId and applicationId from the pathname
    const segments = req.nextUrl.pathname.split("/").filter(Boolean);
    // segments example: ["api", "tracker", "userIdValue", "applicationIdValue"]
    const userId = segments[2];
    const applicationId = segments[3];

    if (!userId || !applicationId) {
      return NextResponse.json(
        { success: false, message: "User ID and Application ID are required" },
        { status: 400 }
      );
    }

    const tracker = await Tracker.findOne({ userId, applicationId });

    if (!tracker) {
      return NextResponse.json(
        { success: false, message: "Tracker not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, tracker });
  } catch (error) {
    console.error("Error fetching tracker:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
// export async function PATCH(
//   req: NextRequest,
//   { params }: { params: { userId: string; applicationId: string } }
// ) {
//   await connect();

//   try {
//     const { field, value } = await req.json();

//     const validFields = ['signup', 'formFilling', 'formSubmission', 'submissionResult'];
//     if (!validFields.includes(field)) {
//       return NextResponse.json(
//         { success: false, message: 'Invalid tracker field' },
//         { status: 400 }
//       );
//     }

//     const update = { [field]: value };

//     const updatedTracker = await Tracker.findOneAndUpdate(
//       { userId: params.userId, applicationId: params.applicationId },
//       { $set: update },
//       { new: true, upsert: true, runValidators: true } // create if doesn't exist
//     );

//     return NextResponse.json({
//       success: true,
//       message: `Tracker updated successfully`,
//       tracker: updatedTracker
//     });
//   } catch (error: any) {
//     console.error('Error updating tracker:', error);
//     return NextResponse.json(
//       { success: false, message: error.message || 'Server error' },
//       { status: 500 }
//     );
//   }
// }


export async function PATCH(req: NextRequest) {
  await connect();

  try {
    const { field, value } = await req.json();

    // Extract userId and applicationId from the pathname
    const segments = req.nextUrl.pathname.split("/").filter(Boolean);
    // segments example: ["api", "tracker", "userIdValue", "applicationIdValue"]
    const userId = segments[2];
    const applicationId = segments[3];

    if (!userId || !applicationId) {
      return NextResponse.json(
        { success: false, message: "User ID and Application ID are required" },
        { status: 400 }
      );
    }

    const validFields = ["signup", "formFilling", "formSubmission", "submissionResult"];
    if (!validFields.includes(field)) {
      return NextResponse.json(
        { success: false, message: "Invalid tracker field" },
        { status: 400 }
      );
    }

    const update = { [field]: value };

    const updatedTracker = await Tracker.findOneAndUpdate(
      { userId, applicationId },
      { $set: update },
      { new: true, upsert: true, runValidators: true } // create if doesn't exist
    );

    return NextResponse.json({
      success: true,
      message: `Tracker updated successfully`,
      tracker: updatedTracker
    });
  } catch (error: any) {
    console.error("Error updating tracker:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Server error" },
      { status: 500 }
    );
  }
}