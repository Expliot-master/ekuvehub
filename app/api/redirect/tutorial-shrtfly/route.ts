import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://files.catbox.moe/41uz9z.mp4",
    { status: 302 }
  );
}
