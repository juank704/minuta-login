// src/middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/dashboard(.*)',
    '/admin(.*)',
    '/profile(.*)',
    '/minutas((?!.*\\..*|_next).*)',
    '/((?!.*\\..*|_next).*)',
  ],
};
