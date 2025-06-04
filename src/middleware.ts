import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the path starts with /admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Get the authentication cookie
    const authToken = request.cookies.get('admin-auth')?.value;
    
    // If no auth token is present, redirect to login
    if (!authToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  return NextResponse.next();
}

// Configure the paths that should be checked by this middleware
export const config = {
  matcher: ['/admin/:path*'],
};