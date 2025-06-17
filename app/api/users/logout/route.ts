import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json(
        { message: "Logged out successfully" },
        { status: 200 }
    );

   
    response.cookies.set({
        name: "token",
        value: "",
        expires: new Date(0),  // Immediately expires the cookie
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
    });

    return response;
}