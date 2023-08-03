import { proxy } from "@/blogapi/core/OpenAPI";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const isRecent = searchParams.get("recent") === "true";

    const response = await axios.get(
      `http://admin.barrysong4real.cc/api/posts${isRecent ? "/recent" : ""}`
    );
    const data = response.data;

    return NextResponse.json({ a: 1 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
