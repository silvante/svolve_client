import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const langCookie = req.cookies.get("lang")?.value;

  if (!langCookie) {
    const brawserLang =
      req.headers.get("accept-language")?.split(",")[0] || "en";
    const selected = brawserLang.startsWith("uz") ? "uz" : "en";

    const res = NextResponse.next();
    res.cookies.set("lang", selected, { path: "/" });
    return res;
  }

  return NextResponse.next();
}
