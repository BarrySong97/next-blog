"use server";
import { revalidateTag } from "next/cache";

export async function addComment() {
  // ...
  revalidateTag("blog-posts");
}
