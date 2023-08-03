import { proxy } from "@/blogapi/core/OpenAPI";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const response = await axios.get(`${proxy}/api/posts/${id}`);
    const data = response.data;

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json([]);
  }
}
