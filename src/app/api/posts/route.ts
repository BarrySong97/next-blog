import { proxy } from "@/blogapi/core/OpenAPI";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const isRecent = searchParams.get("recent") === "true";

    const data = await fetch(
      `${proxy}/api/posts${isRecent ? "/recent" : ""}`
    );
    return NextResponse.json(data.json());
  } catch (error) {
    return NextResponse.json([]);
  }
}
