"use server";
import { CreateCommentDto } from "@/blogapi";
import { headers } from "next/headers";
import { proxy } from "@/blogapi/core/OpenAPI";
import axios from "axios";
import { revalidateTag } from "next/cache";

export const deleteComment = async (commentId: string, token: string) => {
  await fetch(`${proxy}/comments/${commentId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  revalidateTag("comments");
};
export async function addComment(token: string, comment: CreateCommentDto) {
  await axios.post(`${proxy}/comments`, comment, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  revalidateTag("comments");
}
export async function addReply(token: string, comment: CreateCommentDto) {
  await axios.post(`${proxy}/comments`, comment, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  revalidateTag("comments");
}
