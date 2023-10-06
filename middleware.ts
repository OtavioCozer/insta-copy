import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.match(new RegExp('(api|_next/static|_next/image|favicon.ico|images)'))) {
        return
    }

    const jwt = cookies().get('jwt')?.value

    if (jwt && request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (!jwt && request.nextUrl.pathname.startsWith('/login')) {
        return
    }

    if (!jwt) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
