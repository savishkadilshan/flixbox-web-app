import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "./app/_utils/session/session";

export async function middleware(request) {
    const protectedRoutes = ['/'];
    const currentPath = request.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(currentPath);

    if(isProtectedRoute) {
        const cookie = (await cookies()).get('session')?.value;
        const session = await decrypt(cookie);

        if(!session?.userId) {
            return NextResponse.redirect(new URL('/login', request.nextUrl));
        }
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image).*)']
}