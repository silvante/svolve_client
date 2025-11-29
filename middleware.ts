import { NextRequest, NextResponse } from "next/server";

// NOTE: We DO NOT import createMiddleware from next-intl
// because we ARE NOT using locale routing.

export function middleware(req: NextRequest) {
  const langCookie = req.cookies.get("lang")?.value;

  // Auto define a language only if cookie does not exist
  if (!langCookie) {
    const browserLang =
      req.headers.get("accept-language")?.split(",")[0] || "en";

    const selected = browserLang.startsWith("uz") ? "uz" : "en";

    const response = NextResponse.next();
    response.cookies.set("lang", selected, { path: "/" });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
