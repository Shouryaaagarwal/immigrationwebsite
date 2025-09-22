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





// import { connect } from '@/backend/db';
// import Document from '@/models/userDocuments';
// import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';

// export async function POST(req: NextRequest) {
//   await connect();

//   try {
//     const body = await req.json();

//     const {
//       userId,
//       applicationId, // Add applicationId to the destructuring
//       passport,
//       marksheets,
//       countryVisa,
//       nationalId,
//       previousWork,
//       birthCertificate,
//       previousRefusals
//     } = body;

//     // Add applicationId to the required fields check
//     if (!userId || !applicationId || !passport?.url || !nationalId || !birthCertificate?.url || !birthCertificate?.description) {
//       return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
//     }

//     // // Check if document already exists for this application
//     // const existingDocument = await Document.findOne({ applicationId });
    
//     // if (existingDocument) {
//     //   return NextResponse.json(
//     //     { message: 'Documents already uploaded for this application' },
//     //     { status: 400 }
//     //   );
//     // }

//     const newDocument = new Document({
//       userId,
//       applicationId, // Include applicationId in the document
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

// // Optional: Add a GET endpoint to fetch documents by applicationId
// export async function GET(req: NextRequest) {
//   await connect();

//   try {
//     const { searchParams } = new URL(req.url);
//     const applicationId = searchParams.get('applicationId');

//     if (!applicationId) {
//       return NextResponse.json({ message: 'Application ID is required' }, { status: 400 });
//     }

//     const documents = await Document.find({ applicationId });

//     return NextResponse.json({ documents }, { status: 200 });
    
//   } catch (error) {
//     console.error('API Error:', error);
//     return NextResponse.json({ 
//       message: 'Server error', 
//       error: error instanceof Error ? error.message : 'Unknown error' 
//     }, { status: 500 });
//   }
// }  



// export async function PATCH(req: NextRequest) {
//   await connect();

//   try {
//     const body = await req.json();
//     const { searchParams } = new URL(req.url);
//     const documentId = searchParams.get('id');

//     if (!documentId) {
//       return NextResponse.json({ message: 'Document ID is required' }, { status: 400 });
//     }

//     // Find the document and update it
//     const updatedDocument = await Document.findByIdAndUpdate(
//       documentId,
//       { $set: body },
//       { new: true, runValidators: true }
//     );

//     if (!updatedDocument) {
//       return NextResponse.json({ message: 'Document not found' }, { status: 404 });
//     }

//     return NextResponse.json({ 
//       message: 'Document updated successfully', 
//       document: updatedDocument 
//     }, { status: 200 });
    
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
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(req: NextRequest) {
  await connect();

  try {
    const body = await req.json();

    const {
      userId,
      applicationId,
      passport,
      marksheets,
      countryVisa,
      nationalId,
      previousWork,
      birthCertificate,
      previousRefusals
    } = body;

    if (!userId || !applicationId || !passport?.url || !nationalId || !birthCertificate?.url || !birthCertificate?.description) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newDocument = new Document({
      userId,
      applicationId,
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

// export async function PATCH(req: NextRequest) {
//   await connect();

//   try {
//     const formData = await req.formData();
//     const file = formData.get('file') as File;
//     const field = formData.get('field') as string;
//     const index = formData.get('index') as string;
//     const applicationId = formData.get('applicationId') as string;
//     const documentId = formData.get('documentId') as string;
//     const description = formData.get('description') as string;

//     if (!documentId) {
//       return NextResponse.json({ message: 'Document ID is required' }, { status: 400 });
//     }

//     // Find the existing document
//     const existingDocument = await Document.findById(documentId);
//     if (!existingDocument) {
//       return NextResponse.json({ message: 'Document not found' }, { status: 404 });
//     }

//     let fileUrl = existingDocument[field]?.url;

//     // Handle file upload if a file is provided
//     if (file) {
//       const bytes = await file.arrayBuffer();
//       const buffer = Buffer.from(bytes);
      
//       // Create uploads directory if it doesn't exist
//       const uploadsDir = join(process.cwd(), 'public', 'uploads');
//       try {
//         await mkdir(uploadsDir, { recursive: true });
//       } catch (err) {
//         console.log('Uploads directory already exists');
//       }

//       // Generate unique filename
//       const timestamp = Date.now();
//       const filename = `${field}_${timestamp}_${file.name}`;
//       const filepath = join(uploadsDir, filename);
      
//       await writeFile(filepath, buffer);
//       fileUrl = `/uploads/${filename}`;
//     }

//     // Update the document based on field type
//     let updateData: any = {};

//     if (field === 'passport' || field === 'nationalId' || field === 'countryVisa' || field === 'birthCertificate') {
//       updateData[field] = {
//         url: fileUrl || existingDocument[field]?.url,
//         description: description || existingDocument[field]?.description
//       };
//     } else if (field === 'marksheets' || field === 'previousWork' || field === 'previousRefusals') {
//       const arrayField = existingDocument[field] || [];
//       const itemIndex = index ? parseInt(index) : arrayField.length;
      
//       if (itemIndex >= arrayField.length) {
//         // Add new item
//         arrayField.push({
//           url: fileUrl,
//           description: description || `Document ${arrayField.length + 1}`
//         });
//       } else {
//         // Update existing item
//         arrayField[itemIndex] = {
//           url: fileUrl || arrayField[itemIndex]?.url,
//           description: description || arrayField[itemIndex]?.description
//         };
//       }
      
//       updateData[field] = arrayField;
//     }

//     const updatedDocument = await Document.findByIdAndUpdate(
//       documentId,
//       { $set: updateData },
//       { new: true, runValidators: true }
//     );

//     return NextResponse.json({ 
//       message: 'Document updated successfully', 
//       updatedDocument 
//     }, { status: 200 });
    
//   } catch (error) {
//     console.error('API Error:', error);
//     return NextResponse.json({ 
//       message: 'Server error', 
//       error: error instanceof Error ? error.message : 'Unknown error' 
//     }, { status: 500 });
//   }
// }




export async function PATCH(req: NextRequest) {
  await connect();

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const field = formData.get('field') as string;
    const index = formData.get('index') as string;
    const applicationId = formData.get('applicationId') as string;
    const documentId = formData.get('documentId') as string;
    const description = formData.get('description') as string;

    if (!documentId) {
      return NextResponse.json({ message: 'Document ID is required' }, { status: 400 });
    }

    // Find the existing document
    const existingDocument = await Document.findById(documentId);
    if (!existingDocument) {
      return NextResponse.json({ message: 'Document not found' }, { status: 404 });
    }

    let fileUrl: string | undefined;

    // Handle file upload if a file is provided
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // Create uploads directory if it doesn't exist
      const uploadsDir = join(process.cwd(), 'public', 'uploads');
      try {
        await mkdir(uploadsDir, { recursive: true });
      } catch (err) {
        console.log('Uploads directory already exists');
      }

      // Generate unique filename
      const timestamp = Date.now();
      const filename = `${field}_${timestamp}_${file.name}`;
      const filepath = join(uploadsDir, filename);
      
      await writeFile(filepath, buffer);
      fileUrl = `/uploads/${filename}`;
    }

    // Update the document based on field type
const updateData: any = {};

    if (field === 'passport' || field === 'nationalId' || field === 'countryVisa' || field === 'birthCertificate') {
      updateData[field] = {
        url: fileUrl || existingDocument[field]?.url, // Keep existing URL if no new file
        description: description || existingDocument[field]?.description
      };
    } else if (field === 'marksheets' || field === 'previousWork' || field === 'previousRefusals') {
      const arrayField = existingDocument[field] || [];
      const itemIndex = index ? parseInt(index) : arrayField.length;
      
      if (itemIndex >= arrayField.length) {
        // Add new item
        arrayField.push({
          url: fileUrl || '', // Use empty string if no file provided
          description: description || `Document ${arrayField.length + 1}`
        });
      } else {
        // Update existing item - preserve existing URL if no new file
        const existingUrl = arrayField[itemIndex]?.url;
        arrayField[itemIndex] = {
          url: fileUrl || existingUrl, // Keep existing URL if no new file
          description: description || arrayField[itemIndex]?.description
        };
      }
      
      updateData[field] = arrayField;
    }

    const updatedDocument = await Document.findByIdAndUpdate(
      documentId,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    return NextResponse.json({ 
      message: 'Document updated successfully', 
      updatedDocument 
    }, { status: 200 });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      message: 'Server error', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}