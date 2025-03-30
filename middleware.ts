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