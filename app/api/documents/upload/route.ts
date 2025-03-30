import { connect } from '@/backend/db';
import Document from '@/models/userDocuments';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
export async function POST(req: NextRequest) {
  await connect();

  try {
    const body = await req.json(); // Parse request body

    const {
      userId,
      passport,
      marksheets,
      countryVisa,
      nationalId,
      previousWork,
      birthCertificate,
      previousRefusals
    } = body;

    // Validate required fields
    if (!userId || !passport?.url || !nationalId || !birthCertificate?.url || !birthCertificate?.description) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newDocument = new Document({
      userId,
      passport,
      marksheets,
      countryVisa,
      nationalId,
      previousWork,
      birthCertificate,
      previousRefusals
    });

    await newDocument.save();
    return NextResponse.json({ message: 'Document uploaded successfully', document: newDocument }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ 
      message: 'Server error', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}
