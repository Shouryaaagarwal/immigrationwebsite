import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) { 

  // Check if the request is for the root path
  if (request.nextUrl.pathname === '/') {
    console.log("middleware exectuded ")
    // Redirect to /home
    return NextResponse.redirect(new URL('/home', request.url))
  }

  // For all other paths, continue as normal
  return NextResponse.next()
}

// Specify the paths this middleware should run on
export const config = {
  matcher: '/',
}






// // import { NextRequest, NextResponse } from "next/server";
// // import jwt from "jsonwebtoken";
// // import User from "@/models/userModel";

// // export async function middleware(request: NextRequest) {
// //   const token = request.cookies.get("token")?.value;
// //   const isAdminPath = request.nextUrl.pathname.startsWith("/admin");
// //   const isSignInPath = request.nextUrl.pathname === "/signin";

// //   // If no token and trying to access admin paths
// //   if (!token && isAdminPath) {
// //     return NextResponse.redirect(new URL("/signin", request.url));
// //   }

// //   // If token exists
// //   if (token) {
// //     try {
// //       // Verify token
// //       const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
// //       const user = await User.findById(decoded.id);
      
// //       // If invalid user, clear token and redirect
// //       if (!user) {
// //         const response = NextResponse.redirect(new URL("/signin", request.url));
// //         response.cookies.delete("token");
// //         return response;
// //       }

// //       // If logged in and trying to access signin, redirect to admin dashboard
// //       if (isSignInPath) {
// //         return NextResponse.redirect(new URL("/admin/dashboard", request.url));
// //       }

// //     } catch (error) {
// //       // Invalid token, clear it and redirect
// //       const response = NextResponse.redirect(new URL("/signin", request.url));
// //       response.cookies.delete("token");
// //       return response;
// //     }
// //   }

// //   return NextResponse.next();
// // }

// // export const config = {
// //   matcher: ["/admin/:path*", "/signin"],
// // };


// import { NextRequest, NextResponse } from 'next/server'
// import jwt from 'jsonwebtoken'
// import User from '@/models/userModel'

// export async function middleware(request: NextRequest) {
//   // 1. Handle root path redirection
//   if (request.nextUrl.pathname === '/') {
//     console.log('Middleware executed for root path')
//     return NextResponse.redirect(new URL('/home', request.url))
//   }

//   // 2. Handle admin and authentication routes
//   const token = request.cookies.get('token')?.value
//   const isAdminPath = request.nextUrl.pathname.startsWith('/admin')
//   const isSignInPath = request.nextUrl.pathname === '/signin'

//   // If no token and trying to access admin paths
//   if (!token && isAdminPath) {
//     return NextResponse.redirect(new URL('/signin', request.url))
//   }

//   // If token exists
//   if (token) {
//     try {
//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string }
//       const user = await User.findById(decoded.id)
      
//       // If invalid user, clear token and redirect
//       if (!user) {
//         const response = NextResponse.redirect(new URL('/signin', request.url))
//         response.cookies.delete('token')
//         return response
//       }

//       // If logged in and trying to access signin, redirect to admin dashboard
//       if (isSignInPath) {
//         return NextResponse.redirect(new URL('/admin/dashboard', request.url))
//       }

//     } catch (error) {
//       // Invalid token, clear it and redirect
//       const response = NextResponse.redirect(new URL('/signin', request.url))
//       response.cookies.delete('token')
//       return response
//     }
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/', '/admin/:path*', '/signin'],
// }


