// import { connect } from '@/backend/db';
// import Document from '@/models/userDocuments';
// import { NextResponse } from 'next/server';

// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   await connect();

//   try {
//     const id = params?.id;
//     console.log('id', id);

//     if (!id) {
//       return NextResponse.json(
//         { message: 'User ID is required' },
//         { status: 400 }
//       );
//     }

//     // Find all documents for this user based on userId
//     const documents = await Document.find({ userId: id });
//     console.log('documents', documents);

//     if (!documents || documents.length === 0) {
//       return NextResponse.json(
//         { message: 'No documents found for this user' },
//       );
//     }

//     return NextResponse.json(documents);
//   } catch (error) {
//     console.error('Error fetching documents:', error);
//     return NextResponse.json(
//       { message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' },
//       { status: 500 }
//     );
//   }
// }




import { connect } from '@/backend/db';
import Document from '@/models/userDocuments';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await connect();

  try {
    // Await the params to get the actual values
    const params = await context.params;
    const id = params?.id;
    console.log('id', id);

    if (!id) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: 400 }
      );
    }

    // Find all documents for this user based on userId
    const documents = await Document.find({ userId: id });
    console.log('documents', documents);

    if (!documents || documents.length === 0) {
      return NextResponse.json(
        { message: 'No documents found for this user' },
        { status: 404 }
      );
    }

    return NextResponse.json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    return NextResponse.json(
      {
        message: 'Server error',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}