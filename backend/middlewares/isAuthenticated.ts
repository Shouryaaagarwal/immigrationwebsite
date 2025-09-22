// import { NextRequest, NextResponse } from "next/server";
// import jwt from "jsonwebtoken";
// import User from "@/models/userModel";

// declare module 'next/server' {
//     interface NextRequest {
//         user?: any;
//     }
// }

// export const isAuthenticated = async (req: NextRequest, res: NextResponse) => {
//     const token = req.cookies.get("token")?.value || req.headers.get("authorization")?.split(" ")[1];
//     if (!token) return NextResponse.json({ error: "You are not logged in" }, { status: 401 });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET!) as jwt.JwtPayload;
//     const currentUser = await User.findById(decoded.id);
//     if (!currentUser) return NextResponse.json({ error: "User not found" }, { status: 401 });
//     console.log("Current User:", currentUser);
//     req.user = currentUser;
// };

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";

declare module 'next/server' {
    interface NextRequest {
        user?: any;
    }
}

export const isAuthenticated = async (req: NextRequest) => {
    const token = req.cookies.get("token")?.value || req.headers.get("authorization")?.split(" ")[1];
    if (!token) return NextResponse.json({ error: "You are not logged in" }, { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as jwt.JwtPayload;
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) return NextResponse.json({ error: "User not found" }, { status: 401 });
    console.log("Current User:", currentUser);
    req.user = currentUser;
};



