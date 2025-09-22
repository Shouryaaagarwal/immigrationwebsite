
// import { NextRequest, NextResponse } from 'next/server';
// import { connect } from '@/backend/db';
// import User from '@/models/userModel';
// import { sendEmail } from '@/backend/utils/email';
// import { isAuthenticated } from '@/backend/middlewares/isAuthenticated';

// connect();

// export async function POST(req: NextRequest,res: NextResponse) {
  
//     const authResponse = await isAuthenticated(req,res);
//     if (authResponse) return authResponse;

//     const { email } = req.user;

//     if (!email) {
//         return NextResponse.json({ error: "Please provide an email" }, { status: 400 });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//         return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     if (user.isVerified) {
//         return NextResponse.json({ error: "User is already verified" }, { status: 400 });
//     }

//     const otp = Math.floor(100000 + Math.random() * 900000);
//     user.otp = otp.toString();
//     user.otpExpires = Date.now() + 24 * 10 * 60 * 1000;
//     await user.save({ validateBeforeSave: false });

//     try {
//         await sendEmail({
//             email: user.email,
//             subject: "Resend OTP For Email Verification",
//             html: `
//                 <!DOCTYPE html>
//                 <html>
//                 <head>
//                     <style>
//                         body {
//                             font-family: Arial, sans-serif;
//                             background-color: #f4f4f4;
//                             padding: 20px;
//                             color: #333;
//                         }
//                         .container {
//                             max-width: 600px;
//                             margin: auto;
//                             background-color: #fff;
//                             padding: 20px;
//                             border-radius: 8px;
//                             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//                         }
//                         .header {
//                             text-align: center;
//                         }
//                         .header img {
//                             width: 100px;
//                             height: 100px;
//                             margin-bottom: 20px;
//                             rounded: 10%;
//                         }
//                         h1 {
//                             color: #333;
//                             font-size: 24px;
//                         }
//                         .otp {
//                             text-align: center;
//                             font-size: 20px;
//                             color: #007bff;
//                             font-weight: bold;
//                         }
//                         .footer {
//                             margin-top: 20px;
//                             text-align: center;
//                             font-size: 12px;
//                             color: #666;
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     <div class="container">
//                         <div class="header">
//                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrd4dFgg7c_h296oSTJJvWR1HLTezs9HDGA&s" alt="Logo" />
//                             <h1>Your OTP is</h1>
//                         </div>
//                         <p>Dear ${user.name},</p>
//                         <p>Thank you for registering! Your new OTP for email verification is:</p>
//                         <div class="otp">${otp}</div>
//                         <p>Please use this code to complete your registration. This OTP is valid for the next 24 hours.</p>
//                         <p>If you didn't request this, please ignore this email.</p>
//                         <div class="footer">
//                             <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
//                         </div>
//                     </div>
//                 </body>
//                 </html>
//             `
//         });

//         return NextResponse.json({ message: "OTP sent successfully" }, { status: 200 });
//     } catch (err) {
//         user.otp = undefined;
//         user.otpExpires = undefined;
//         await user.save({ validateBeforeSave: false });
//         return NextResponse.json({ error: "Email could not be sent" }, { status: 500 });
//     }
// }

import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/backend/db';
import User from '@/models/userModel';
import { sendEmail } from '@/backend/utils/email';
import { isAuthenticated } from '@/backend/middlewares/isAuthenticated';

await connect();

export async function POST(req: NextRequest) {
  // Check authentication
  const authResponse = await isAuthenticated(req);
  if (authResponse) return authResponse;

  // Typecast req to access user property
  const userEmail = (req as any).user?.email;

  if (!userEmail) {
    return NextResponse.json({ error: "Please provide an email" }, { status: 400 });
  }

  const user = await User.findOne({ email: userEmail });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (user.isVerified) {
    return NextResponse.json({ error: "User is already verified" }, { status: 400 });
  }

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  user.otp = otp.toString();
  user.otpExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  await user.save({ validateBeforeSave: false });

  try {
    // Send OTP email
    await sendEmail({
      email: user.email,
      subject: "Resend OTP For Email Verification",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333; }
            .container { max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            .header { text-align: center; }
            .header img { width: 100px; height: 100px; margin-bottom: 20px; border-radius: 10%; }
            h1 { color: #333; font-size: 24px; }
            .otp { text-align: center; font-size: 20px; color: #007bff; font-weight: bold; }
            .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrd4dFgg7c_h296oSTJJvWR1HLTezs9HDGA&s" alt="Logo" />
              <h1>Your OTP is</h1>
            </div>
            <p>Dear ${user.name},</p>
            <p>Thank you for registering! Your new OTP for email verification is:</p>
            <div class="otp">${otp}</div>
            <p>Please use this code to complete your registration. This OTP is valid for the next 24 hours.</p>
            <p>If you didn't request this, please ignore this email.</p>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    return NextResponse.json({ message: "OTP sent successfully" }, { status: 200 });
  } catch (err) {
    // Reset OTP on error
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return NextResponse.json({ error: "Email could not be sent" }, { status: 500 });
  }
}
