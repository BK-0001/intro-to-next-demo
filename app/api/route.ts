import { NextResponse } from "next/server";

// GET /
export async function GET() {
  return NextResponse.json({ message: "Hello world from NextJS App" });
}
