// import User from "@/models/userModel";
// import { NextResponse,NextRequest } from "next/server";
// import { sendEmail } from "@/backend/utils/email";
// import { connect } from "@/backend/db";

// connect()

// export async function POST(req: NextRequest,res:NextResponse) {
//     const body = await req.json();
//     const {email } = body;

//     const user = await User.findOne({ email });

//     if (!user) {
//         return NextResponse.json({
//             error: "No user found with that email"
//         }, { status: 404 });
//     }

//     if(!user.isVerified){
//         return NextResponse.json({
//             error: "User is not verified"
//         }, { status: 400 });
//     }
    
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     user.resetPasswordOTP = otp
//     user.resetPasswordOTPExpires = Date.now() + 10 * 30 * 1000;
     

//     await user.save(
//         {
//             validateBeforeSave: false
//         }
//     );
//   try{
    
//         await sendEmail({
//     email: user.email,
//     subject: "Your Password Reset OTP (valid for 5 minutes)",
//     html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <style>
//                 body {
//                     font-family: Arial, sans-serif;
//                     background-color: #f4f4f4;
//                     padding: 20px;
//                     color: #333;
//                 }
//                 .container {
//                     max-width: 600px;
//                     margin: auto;
//                     background-color: #fff;
//                     padding: 20px;
//                     border-radius: 8px;
//                     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//                 }
//                 .header {
//                     text-align: center;
//                 }
//                 .header img {
//                     width: 100px;
//                     height: 100px;
//                     margin-bottom: 20px;
//                     rounded: 10%;
//                 }
//                 h1 {
//                     color: #333;
//                     font-size: 24px;
//                 }
//                 .otp {
//                     text-align: center;
//                     font-size: 20px;
//                     color: #007bff;
//                     font-weight: bold;
//                 }
//                 .footer {
//                     margin-top: 20px;
//                     text-align: center;
//                     font-size: 12px;
//                     color: #666;
//                 }
//             </style>
//         </head>
//         <body>
//             <div class="container">
//                 <div class="header">
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrd4dFgg7c_h296oSTJJvWR1HLTezs9HDGA&s" alt="Logo" /> <!-- Replace with your image URL -->
//                     <h1>Reset Password</h1>
//                 </div>
//                 <p>Dear ${user.name},</p>
//                 <p>Thank you for registering! Your OTP for Reset Password is:</p>
//                 <div class="otp">${otp}</div>
//                 <p>Please use this code to reset your password. This OTP is valid for the next 5 minutes.</p>
//                 <p>If you didn't request this, please ignore this email.</p>
//                 <div class="footer">
//                     <p>&copy; ${new Date().getFullYear()} Sea View Immigration Services.. All rights reserved.</p>
//                 </div>
//             </div>
//         </body>
//         </html>
//     `
// });

// return NextResponse.json({
//     message: "Email sent with OTP"
// }, { status: 200 });
  


//     } catch (error: any) {

//         user.resetPasswordOTP = undefined;
//         user.resetPasswordOTPExpires = undefined;
//         await user.save({ validateBeforeSave: false });
        
//         return NextResponse.json({
//             error: "There was an error sending the email. Try again later."
//         }, { status: 500 });

//     }
// } 


import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import { sendEmail } from "@/backend/utils/email";
import { connect } from "@/backend/db";

await connect();

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email } = body;

    const user = await User.findOne({ email });

    if (!user) {
        return NextResponse.json({
            error: "No user found with that email"
        }, { status: 404 });
    }

    if (!user.isVerified) {
        return NextResponse.json({
            error: "User is not verified"
        }, { status: 400 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.resetPasswordOTP = otp;
    user.resetPasswordOTPExpires = Date.now() + 10 * 30 * 1000;

    await user.save({
        validateBeforeSave: false
    });

    try {
        await sendEmail({
            email: user.email,
            subject: "Your Password Reset OTP (valid for 5 minutes)",
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        padding: 20px;
                        color: #333;
                    }
                    .container {
                        max-width: 600px;
                        margin: auto;
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                        text-align: center;
                    }
                    .header img {
                        width: 100px;
                        height: 100px;
                        margin-bottom: 20px;
                        border-radius: 10%;
                    }
                    h1 {
                        color: #333;
                        font-size: 24px;
                    }
                    .otp {
                        text-align: center;
                        font-size: 20px;
                        color: #007bff;
                        font-weight: bold;
                    }
                    .footer {
                        margin-top: 20px;
                        text-align: center;
                        font-size: 12px;
                        color: #666;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrd4dFgg7c_h296oSTJJvWR1HLTezs9HDGA&s" alt="Logo" />
                        <h1>Reset Password</h1>
                    </div>
                    <p>Dear ${user.name},</p>
                    <p>Thank you for registering! Your OTP for Reset Password is:</p>
                    <div class="otp">${otp}</div>
                    <p>Please use this code to reset your password. This OTP is valid for the next 5 minutes.</p>
                    <p>If you didn't request this, please ignore this email.</p>
                    <div class="footer">
                        <p>&copy; ${new Date().getFullYear()} Sea View Immigration Services.. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        `
        });

        return NextResponse.json({
            message: "Email sent with OTP"
        }, { status: 200 });

    } catch (error: any) {
        user.resetPasswordOTP = undefined;
        user.resetPasswordOTPExpires = undefined;
        await user.save({ validateBeforeSave: false });

        return NextResponse.json({
            error: "There was an error sending the email. Try again later."
        }, { status: 500 });
    }
}
