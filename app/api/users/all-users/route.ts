import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/backend/db";
import User from "@/models/userModel";

export async function GET(req: NextRequest) {
  try {
    await connect(); // Ensure database connection

    const users = await User.find(); // Fetch all users
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
