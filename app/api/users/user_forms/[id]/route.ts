// import { NextResponse } from 'next/server';
// import { connect } from '@/backend/db';
// import userForm from '@/models/userForm';
// import User from '@/models/userModel';
// import mongoose from 'mongoose';

// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   await connect(); // Moved inside the function to ensure connection on each request

//   try {
//     const id = params?.id;
//     console.log('id', id); // Added logging for debugging

//     if (!id) {
//       return NextResponse.json(
//         { message: 'User ID is required' },
//         { status: 400 }
//       );
//     }

//     // Validate id
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json(
//         { message: 'Invalid User ID format' },
//         { status: 400 }
//       );
//     }

//     // Check if user exists
//     const userExists = await User.exists({ _id: id });
//     if (!userExists) {
//       return NextResponse.json(
//         { message: 'User not found' },
//         { status: 404 }
//       );
//     }

//     // Find all userForms for this user
//     const forms = await userForm.find({ userId: id });
//     console.log('forms', forms); // Added logging for debugging

//     if (!forms || forms.length === 0) {
//       return NextResponse.json(
//         { message: 'No forms found for this user' },
//       );
//     }

//     return NextResponse.json(forms);
//   } catch (error) {
//     console.error('Error fetching user forms:', error);
//     return NextResponse.json(
//       { 
//         message: 'Server error', 
//         error: error instanceof Error ? error.message : 'Unknown error' 
//       },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from 'next/server';
import { connect } from '@/backend/db';
import userForm from '@/models/userForm';
import User from '@/models/userModel';
import mongoose from 'mongoose';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connect(); // Moved inside the function to ensure connection on each request

  try {
    // Await the params to resolve the Promise
    const resolvedParams = await params;
    const id = resolvedParams?.id;
    console.log('id', id); // Added logging for debugging

    if (!id) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: 400 }
      );
    }

    // Validate id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: 'Invalid User ID format' },
        { status: 400 }
      );
    }

    // Check if user exists
    const userExists = await User.exists({ _id: id });
    if (!userExists) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    // Find all userForms for this user
    const forms = await userForm.find({ userId: id });
    console.log('forms', forms); // Added logging for debugging

    if (!forms || forms.length === 0) {
      return NextResponse.json(
        { message: 'No forms found for this user' },
      );
    }

    return NextResponse.json(forms);
  } catch (error) {
    console.error('Error fetching user forms:', error);
    return NextResponse.json(
      { 
        message: 'Server error', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}