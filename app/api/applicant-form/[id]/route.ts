// import { NextRequest, NextResponse } from 'next/server';
// import mongoose from 'mongoose';
// import User from '@/models/userModel';
// import UserForm from '@/models/userForm'; 
// import { connect } from '@/backend/db';

// await connect(); // Ensure DB is connected before operations

// export async function PATCH(req: NextRequest) {
//     try {
//         const { userId, ...updateFields } = await req.json(); // Prevent overriding userId

//         if (!mongoose.Types.ObjectId.isValid(userId)) {
//             return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
//         }

//         const user = await User.findById(userId);
//         if (!user) {
//             return NextResponse.json({ message: 'User not found' }, { status: 404 });
//         }

//         const existingApplicant = await UserForm.findOne({ userId });
//         if (!existingApplicant) {
//             return NextResponse.json({ message: 'Applicant data not found for this user' }, { status: 404 });
//         }

//         // Update applicant data
//         const updatedApplicant = await UserForm.findOneAndUpdate(
//             { userId },
//             { $set: updateFields }, // Exclude userId from updates
//             { new: true }
//         );

//         return NextResponse.json(
//             { message: 'Applicant data updated successfully', applicant: updatedApplicant },
//             { status: 200 }
//         );
//     } catch (err: any) {
//         return NextResponse.json({ message: 'Server Error', error: err.message || 'Internal Server Error' }, { status: 500 });
//     }
// }
   

import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import User from '@/models/userModel';
import UserForm from '@/models/userForm'; 
import { connect } from '@/backend/db';

await connect(); // Ensure DB is connected

export async function PATCH(req: NextRequest) {
    try {
        const body = await req.json();
        const { userId, applicationId, ...updateFields } = body;

        // ✅ Validate inputs
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
        }

        if (!applicationId || typeof applicationId !== 'string') {
            return NextResponse.json({ message: 'Application ID is required and must be a string' }, { status: 400 });
        }

        // ✅ Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // ✅ Find the specific application
        const existingApplication = await UserForm.findOne({ userId, applicationId });
        if (!existingApplication) {
            return NextResponse.json({ message: 'Application not found for this user' }, { status: 404 });
        }

        // ✅ Update the form — prevent modifying userId/applicationId
        const updatedApplication = await UserForm.findOneAndUpdate(
            { userId, applicationId },
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        return NextResponse.json({
            message: 'Application updated successfully',
            applicant: updatedApplication
        }, { status: 200 });

    } catch (err: any) {
        return NextResponse.json({
            message: 'Server Error',
            error: err.message || 'Internal Server Error'
        }, { status: 500 });
    }
}




export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    await connect();
  
    try {
      const id = params?.id;
      console.log('id', id);
  
      if (!id) {
        return NextResponse.json(
          { message: 'User ID is required' },
          { status: 400 }
        );
      }
  
      // Find all documents for this user based on userId
      const documents = await UserForm.find({ userId: id });
      console.log('documents', documents);
  
      if (!documents || documents.length === 0) {
        return NextResponse.json(
          { message: 'No documents found for this user' },
        );
      }
  
      return NextResponse.json(documents);
    } catch (error) {
      console.error('Error fetching documents:', error);
      return NextResponse.json(
        { message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' },
        { status: 500 }
      );
    }
  }