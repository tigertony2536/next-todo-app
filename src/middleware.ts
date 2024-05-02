import { NextResponse } from "next/server";

export { default } from "next-auth/middleware";
export function middleware(request: Request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("my-url", request.url);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = { matcher: ["/protected/:path*"] };
