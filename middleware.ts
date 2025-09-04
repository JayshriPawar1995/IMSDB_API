import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Allowed origins (add all your frontends here)
  const allowedOrigins = [
    "https://lms.zbs.com.bd",   // your frontend on Hostinger
    "https://ims.zbs.com.bd",   // another frontend if needed
    "http://localhost:3000"     // for local dev
  ]

  const origin = req.headers.get("origin") ?? ""

  if (allowedOrigins.includes(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin)
  }

  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { headers: res.headers })
  }

  return res
}

// Only match API routes
export const config = {
  matcher: "/api/:path*",
}
