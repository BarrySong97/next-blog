import { proxy } from "@/blogapi/core/OpenAPI";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(`${proxy}/api/projects`);
    const data = await response.json();
    return NextResponse.json(data?.length ? data : []);
  } catch (error) {
    return NextResponse.json([]);
  }
}
