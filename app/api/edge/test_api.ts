import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ "1": "world" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
