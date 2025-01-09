import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "./app/_utils/session/session";

export async function middleware(request) {
    const protectedRoutes = ['/', '/my-list'];
    const adminProtectedRoutes = ['/admin', '/admin/all-games'];
    const adminLoginProtectedRoute = ['/admin/login'];
    
    const currentPath = request.nextUrl.pathname;
    
    const isProtectedRoute = protectedRoutes.includes(currentPath);
    const isAdminProtectedRoutes = adminProtectedRoutes.includes(currentPath);
    const isAdminLoginProtectedRoute = adminLoginProtectedRoute.includes(currentPath);

    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);

    if(isProtectedRoute) {
        if(!session?.userId) {
            return NextResponse.redirect(new URL('/login', request.nextUrl));
        }
    } else if (isAdminProtectedRoutes) {
        if (!session?.userId) {
            return NextResponse.redirect(new URL('/admin/login', request.nextUrl));
        }
    } else if (isAdminLoginProtectedRoute) {
        if (session?.userId && session?.role !== 'admin') {
            return NextResponse.rewrite(new URL('/not-found', request.nextUrl));
        }
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image).*)']
}