import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Welcome to the Next.js Serverless API!",
  });
}
