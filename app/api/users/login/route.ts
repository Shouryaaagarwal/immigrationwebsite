// import User from "@/models/userModel";
// import { NextRequest, NextResponse } from "next/server";
// import { createSendToken } from "../signup/route";
// import { isAuthenticated } from "@/backend/middlewares/isAuthenticated";
// import bcryptjs from "bcryptjs"; 
// export async function POST(req: NextRequest, res: NextResponse) {
//     try {
//         const body = await req.json();         
//         const { email, password } = body;

//         if (!email || !password) {
//             return NextResponse.json({
//                 error: "Please fill all the fields",
//             }, { status: 400 });
//         }

//         const user = await User.findOne({ email }).select("+password");

//         if (!user) {
//             return NextResponse.json({
//                 error: "User not found",
//             }, { status: 404 });
//         }

//         const isMatch = await bcryptjs.compare(password, user.password);
//         if (!isMatch) {
//             return NextResponse.json({
//                 error: "Invalid credentials",
//             }, { status: 401 });
//         }

//         return createSendToken(user, 200, "User Logged In Successfully");

//     } catch (error: any) {
//         console.error("Error during login:", error);
//         return NextResponse.json({
//             error: error.message || "An unexpected error occurred",
//         }, { status: 500 });
//     }
// }


import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { createSendToken } from "../signup/route";
import bcryptjs from "bcryptjs";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();         
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({
                error: "Please fill all the fields",
            }, { status: 400 });
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return NextResponse.json({
                error: "User not found",
            }, { status: 404 });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({
                error: "Invalid credentials",
            }, { status: 401 });
        }

        return createSendToken(user, 200, "User Logged In Successfully");

    } catch (error: any) {
        console.error("Error during login:", error);
        return NextResponse.json({
            error: error.message || "An unexpected error occurred",
        }, { status: 500 });
    }
}
