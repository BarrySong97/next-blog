import { proxy } from "@/blogapi/core/OpenAPI";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const isRecent = searchParams.get("recent") === "true";

    const response = await fetch(`${proxy}/api/posts${isRecent ? "/recent" : ""}`);
    const data = await response.json();
    return NextResponse.json(data?.length ? data : []);
  } catch (error) {
    return NextResponse.json([]);
  }
}
