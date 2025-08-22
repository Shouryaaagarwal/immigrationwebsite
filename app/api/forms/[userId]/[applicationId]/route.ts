// app/api/form/[userId]/[applicationId]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/backend/db";
import UserForm from "@/models/userForm"; // your Mongoose model

export async function GET(req: NextRequest, { params }: { params: { userId: string; applicationId: string } }) {
  await connect();

  const { userId, applicationId } = params;

  try {
    const form = await UserForm.findOne({ userId, applicationId });

    if (!form) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    return NextResponse.json(form);
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
