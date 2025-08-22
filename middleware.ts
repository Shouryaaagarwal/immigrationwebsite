// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) { 

//   // Check if the request is for the root path
//   if (request.nextUrl.pathname === '/') {
//     console.log("middleware exectuded ")
//     // Redirect to /home
//     return NextResponse.redirect(new URL('/home', request.url))
//   }

//   // For all other paths, continue as normal
//   return NextResponse.next()
// }

// // Specify the paths this middleware should run on
// export const config = {
//   matcher: '/',
// }



import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';


const isProtectedRoute = createRouteMatcher([
  // Add your protected routes here
]);

export default clerkMiddleware((auth, request) => {
  // Your custom middleware logic
  if (request.nextUrl.pathname === '/') {
    console.log("Middleware executed - redirecting to /home");
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // Clerk's authentication logic for protected routes
  // if (isProtectedRoute(request)) {
  //   auth().protect();
  // }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Your existing matcher plus Clerk's matcher
    '/',
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};