// import { connect } from '@/backend/db';
// import Document from '@/models/userDocuments'; // This now imports the model safely
// import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';

// export async function POST(req: NextRequest) {
//   await connect();

//   try {
//     const body = await req.json();

//     const {
//       userId,   
      
//       passport,
//       marksheets,
//       countryVisa,
//       nationalId,
//       previousWork,
//       birthCertificate,
//       previousRefusals
//     } = body;

//     if (!userId || !passport?.url || !nationalId || !birthCertificate?.url || !birthCertificate?.description) {
//       return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
//     }

//     const newDocument = new Document({
//       userId,
//       passport,
//       marksheets,
//       countryVisa,
//       nationalId,
//       previousWork,
//       birthCertificate,
//       previousRefusals
//     });

//     await newDocument.save();
//     return NextResponse.json({ 
//       message: 'Document uploaded successfully', 
//       document: newDocument 
//     }, { status: 201 });
//   } catch (error) {
//     console.error('API Error:', error);
//     return NextResponse.json({ 
//       message: 'Server error', 
//       error: error instanceof Error ? error.message : 'Unknown error' 
//     }, { status: 500 });
//   }
// } 





import { connect } from '@/backend/db';
import Document from '@/models/userDocuments';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  await connect();

  try {
    const body = await req.json();

    const {
      userId,
      applicationId, // Add applicationId to the destructuring
      passport,
      marksheets,
      countryVisa,
      nationalId,
      previousWork,
      birthCertificate,
      previousRefusals
    } = body;

    // Add applicationId to the required fields check
    if (!userId || !applicationId || !passport?.url || !nationalId || !birthCertificate?.url || !birthCertificate?.description) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // // Check if document already exists for this application
    // const existingDocument = await Document.findOne({ applicationId });
    
    // if (existingDocument) {
    //   return NextResponse.json(
    //     { message: 'Documents already uploaded for this application' },
    //     { status: 400 }
    //   );
    // }

    const newDocument = new Document({
      userId,
      applicationId, // Include applicationId in the document
      passport,
      marksheets,
      countryVisa,
      nationalId,
      previousWork,
      birthCertificate,
      previousRefusals
    });

    await newDocument.save();
    
    return NextResponse.json({ 
      message: 'Document uploaded successfully', 
      document: newDocument 
    }, { status: 201 });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      message: 'Server error', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}

// Optional: Add a GET endpoint to fetch documents by applicationId
export async function GET(req: NextRequest) {
  await connect();

  try {
    const { searchParams } = new URL(req.url);
    const applicationId = searchParams.get('applicationId');

    if (!applicationId) {
      return NextResponse.json({ message: 'Application ID is required' }, { status: 400 });
    }

    const documents = await Document.find({ applicationId });

    return NextResponse.json({ documents }, { status: 200 });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      message: 'Server error', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}  



export async function PATCH(req: NextRequest) {
  await connect();

  try {
    const body = await req.json();
    const { searchParams } = new URL(req.url);
    const documentId = searchParams.get('id');

    if (!documentId) {
      return NextResponse.json({ message: 'Document ID is required' }, { status: 400 });
    }

    // Find the document and update it
    const updatedDocument = await Document.findByIdAndUpdate(
      documentId,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!updatedDocument) {
      return NextResponse.json({ message: 'Document not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      message: 'Document updated successfully', 
      document: updatedDocument 
    }, { status: 200 });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      message: 'Server error', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}