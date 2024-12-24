import { connect } from '@/backend/db';
import { createSendToken } from '../signup/route';
import { isAuthenticated } from '@/backend/middlewares/isAuthenticated';
import { NextRequest, NextResponse } from 'next/server';

connect();


export async function POST(req: NextRequest, res: NextResponse) {
    await isAuthenticated(req, res);
    const body = await req.json();
    const { otp } = body;

    if (!otp) return NextResponse.json({ error: "Please provide the OTP" }, { status: 400 });

    const user = req.user;
    if (!user || user.otp !== otp) return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });

    if (user.otpExpires < new Date()) return NextResponse.json({ error: "OTP Expired" }, { status: 400 });

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;

    await user.save({ validateBeforeSave: false });

    return createSendToken(user, 200, "User Verified Successfully");
}



