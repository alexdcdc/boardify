import { NextResponse, NextRequest } from "next/server"
import { decrypt } from "../lib/auth";


export async function middleware(request: NextRequest) {

  if (request.nextUrl.pathname == "/login") {
    return NextResponse.next();
  }

  
  const session = request.cookies.get("session");

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const sessionInfo = await decrypt(session.value);
    console.log(sessionInfo);
    if (request.nextUrl.pathname != "/dashboard/" + sessionInfo.userId) {
      return NextResponse.redirect(new URL("/dashboard/" + sessionInfo.userId, request.url));
    }
    return NextResponse.next();
  }

  catch {
    return NextResponse.redirect(new URL("/login", request.url));
  } 
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/document/:path*", "/editor/:path*"],
}
