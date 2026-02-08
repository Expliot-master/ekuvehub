import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://files.catbox.moe/ea3eqi.mp4",
    { status: 302 }
  );
}
