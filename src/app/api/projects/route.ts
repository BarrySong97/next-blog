import { proxy } from "@/blogapi/core/OpenAPI";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await fetch(`${proxy}/api/projects`);
    return NextResponse.json(data.json());
  } catch (error) {
    return NextResponse.json([]);
  }
}
