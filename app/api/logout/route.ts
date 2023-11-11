import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    console.log('get logout')
    return NextResponse.redirect(`https://auth-custom.auth.us-east-2.amazoncognito.com/logout?client_id=1m4sek4nlhfnf3ptprro7hu483&logout_uri=${encodeURIComponent("http://localhost:3000/login")}&response_type=code`)
    // return NextResponse.redirect(`https://auth-custom.auth.us-east-2.amazoncognito.com/logout?client_id=1m4sek4nlhfnf3ptprro7hu483&response_type=code`)
}
