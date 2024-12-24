import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";
import { connect } from "@/backend/db";
import { sendEmail } from "@/backend/utils/email";

connect();

const signToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET!, {
        expiresIn: "90d",
    });
};

export const createSendToken = (user: any, statusCode: number, message: string) => {
    const token = signToken(user._id);

    const cookieOptions = [
        `token=${token}`,
        `HttpOnly`,
        `Path=/`,
        `Max-Age=${24 * 60 * 60 * 90}`, 
        process.env.NODE_ENV === "production" ? `Secure; SameSite=Strict` : `SameSite=Lax`,
    ].join('; ');

    const response = NextResponse.json({
        status: "success",
        message,
        token,
        data: {
            user: {
                ...user._doc,
                password: undefined,
                otp: undefined,
            },
        },
    }, { status: statusCode });

    response.headers.set('Set-Cookie', cookieOptions);

    return response;
};

export async function POST(req: NextRequest) {
    let user; 
    
    try {
        const body = await req.json();
        const { name, email, password, passwordConfirm ,  nationality } = body;

        if (!email || !password || !name || !nationality || !passwordConfirm) {
            return NextResponse.json({
                error: "Please fill all the fields"
            }, { status: 400 });
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return NextResponse.json({
                error: "User already exists"
            }, { status: 400 });
        }


        if(password !== passwordConfirm){
            return NextResponse.json({
                error: "Passwords do not match"
            }, { status: 400 });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        user = await User.create({
            name,
            email,
            password:hashedPassword,
            passwordConfirm,
            nationality,
            otp,
            otpExpires: Date.now() + 24 * 60 * 60 * 1000
        });


        await sendEmail({
    email: user.email,
    subject: "OTP For Email Verification",
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
                    rounded: 10%;
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrd4dFgg7c_h296oSTJJvWR1HLTezs9HDGA&s" alt="Logo" /> <!-- Replace with your image URL -->
                    <h1>Email Verification</h1>
                </div>
                <p>Dear ${user.name},</p>
                <p>Thank you for registering! Your OTP for email verification is:</p>
                <div class="otp">${otp}</div>
                <p>Please use this code to complete your registration. This OTP is valid for the next 24 hours.</p>
                <p>If you didn't request this, please ignore this email.</p>
                <div class="footer">
                    <p>&copy; ${new Date().getFullYear()} Sea View Immigration Services.. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `
});



    return createSendToken(user, 201, "User Created Successfully");
    } catch (error: any) {

        if (user) {
            await User.findByIdAndDelete(user._id);
        }

        console.error("Error during registration:", error.message);
        return NextResponse.json({
            error: error.message || "Error while processing the request"
        }, { status: 500 });
    }
}
