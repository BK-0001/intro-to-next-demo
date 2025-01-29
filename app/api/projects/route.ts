import { NextResponse } from "next/server";

// GET /projects
// route and page file cannot coexist in the same directory level.
export async function GET() {
  return NextResponse.json({ message: "Hello world from projects route" });
}

// POST /projects
// where can we get the data?
// where can we get search params?
// TODO: where can we get the params? => this will need dynamic route
export async function POST() {
  return NextResponse.json({ message: "Hello world from projects POST route" });
}
