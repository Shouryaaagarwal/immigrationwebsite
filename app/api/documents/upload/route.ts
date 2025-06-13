import { connect } from '@/backend/db';
import Document from '@/models/userDocuments'; // This now imports the model safely
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  await connect();

  try {
    const body = await req.json();

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