export { default } from "next-auth/middleware"
export const config = { matcher: ['/((?!_next/static|_next/image|images|favicon.ico|login|api/logout).*)'] }


// import { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//     return
// }