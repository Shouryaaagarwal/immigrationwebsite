// import User from '@/models/userModel';
// import { NextRequest, NextResponse } from 'next/server';
// import { createSendToken } from '../signup/route';
// import bcryptjs from 'bcryptjs'; // Import bcrypt for hashing

// import { connect } from '@/backend/db';

// connect();

// export async function POST(req: NextRequest, res: NextResponse) {
//     try{
//     const body = await req.json();
//     const { email, otp, password, passwordConfirm } = body;

//     const user = await User.findOne({
//         email,
//         resetPasswordOTP: otp,
//         resetPasswordOTPExpires: { $gt: Date.now() }
//     });

//     if (!user) {
//         return NextResponse.json({
//             error: "Invalid OTP or no user found"
//         }, { status: 400 });
//     }

//       if(!user.isVerified){
//         return NextResponse.json({
//             error: "User is not verified"
//         }, { status: 400 });
//     }

//     if (password !== passwordConfirm) {
//         return NextResponse.json({
//             error: "Passwords do not match"
//         }, { status: 400 });
//     }

//     user.password = await bcryptjs.hash(password, 10); // Hash with bcrypt
//     user.resetPasswordOTP = undefined; // Clear OTP
//     user.resetPasswordOTPExpires = undefined; // Clear expiration

//     await user.save(); // Save the user with the new password

//     return createSendToken(user, 200, "Password reset successful");
// }


// catch(error:any){
//     return NextResponse.json({
//         error: error.message || "Something went wrong"
//     }, { status: 500 });
// }

// }




import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import { createSendToken } from '../signup/route';
import bcryptjs from 'bcryptjs';
import { connect } from '@/backend/db';

await connect();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, otp, password, passwordConfirm } = body;

        const user = await User.findOne({
            email,
            resetPasswordOTP: otp,
            resetPasswordOTPExpires: { $gt: Date.now() }
        });

        if (!user) {
            return NextResponse.json(
                { error: "Invalid OTP or no user found" },
                { status: 400 }
            );
        }

        if (!user.isVerified) {
            return NextResponse.json(
                { error: "User is not verified" },
                { status: 400 }
            );
        }

        if (password !== passwordConfirm) {
            return NextResponse.json(
                { error: "Passwords do not match" },
                { status: 400 }
            );
        }

        user.password = await bcryptjs.hash(password, 10);
        user.resetPasswordOTP = undefined;
        user.resetPasswordOTPExpires = undefined;

        await user.save();

        return createSendToken(user, 200, "Password reset successful");
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Something went wrong" },
            { status: 500 }
        );
    }
}
