import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/backend/db";

connect();



export async function POST(request: NextRequest) {
    const response = NextResponse.json({ message: "Logged out" }, { status: 200 });

    response.headers.set('Set-Cookie', `token=loggedout; HttpOnly; Expires=${new Date(Date.now() + 10 * 1000).toUTCString()}; SameSite=${process.env.NODE_ENV === 'production' ? 'Strict' : 'Lax'}; ${process.env.NODE_ENV === 'production' ? 'Secure' : ''}`);

    return response;
}

