import { NextRequest, NextResponse } from "next/server";

// PATCH /api/projects/:projectId?title=project1
// where can we get the data?

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> } // may not work
) {
  // how to get params
  const { projectId } = await params;
  // how to get search params
  const searchParams = request.nextUrl.searchParams;
  const title = searchParams.get("title");

  // how to get the body
  const body = await request.json();

  console.log(projectId, title, body);

  return NextResponse.json({
    message: "Hello world from projects PATCH route"
  });
}
