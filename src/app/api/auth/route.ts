import { proxy } from "@/blogapi/core/OpenAPI";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const response = await fetch(
      `${proxy}/auth/google?code=${code}&client=front`,
      {
        method: "POST",
      }
    ).then((res) => res.json());
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json([]);
  }
}
