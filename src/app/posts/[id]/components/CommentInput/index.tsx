"use client";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { marked } from "marked";
import {
  CarbonSendAltFilled,
  SolarEyeClosedOutline,
  SolarEyeLinear,
} from "@/app/posts/icons";
import "./markdown.css";
import React, { FC, useState } from "react";
import { addComment, addReply } from "./actions";
import { useParams } from "next/navigation";
import { userAtom } from "@/app/providers";
import { useAtom } from "jotai";
import { createGoogleLoginUrl } from "@/app/components/SideBar";
import { commentAtom } from "../CommentAction";
import { CommentDTO, CreateCommentDto } from "@/blogapi";
import {  useToast } from "@/app/components/ui/use-toast";
export interface CommentInputProps {
  height?: number;
  className?: string;
  type?: "comment" | "reply";
  replyId?: string;
  parentId?: string;
  comment?: CommentDTO;
}
const CommentInput: FC<CommentInputProps> = ({
  className = "min-h-[200px] max-h-[400px]",
  height,
  type = "comment",
  comment,
}) => {
  const [preview, setPreview] = useState(false);
  const [content, setContent] = useState<string>();
  const { id: postId } = useParams();
  const [user] = useAtom(userAtom);
  const html = content ? marked(content) : "";
  const { toast } = useToast();
  const [activeComment, setActiveComment] = useAtom(commentAtom);

  if (
    type === "reply" &&
    !activeComment?.parentId &&
    activeComment?.id !== comment?.id
  ) {
    return null;
  }
  const placeholder =
    type === "reply"
      ? `回复 @${activeComment?.author?.firstname} ${activeComment?.author?.lastname}`
      : "留下你的评论，支持 Markdown 格式";
  return (
    <div className="mb-8 relative">
      {!preview ? (
        <Textarea
          placeholder={placeholder}
          maxLength={600}
          disabled={!user}
          style={{
            height,
          }}
          value={content}
          className={` text-base ${className}`}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      ) : (
        <div
          className="min-h-[200px] max-h-[400px] comment__message  border border-input rounded-md px-3 py-2 shadow-sm"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        ></div>
      )}
      {content ? (
        <div className="absolute text-sm right-2 bottom-2 ">
          <Button
            onClick={() => {
              setPreview(!preview);
            }}
            size={"sm"}
            className="text-base"
            variant={"ghost"}
          >
            {preview ? <SolarEyeClosedOutline /> : <SolarEyeLinear />}
          </Button>
          <Button
            onClick={async () => {
              const token = window.localStorage.getItem("accessToken");
              if (type === "reply") {
                if (!activeComment) {
                  return;
                }
                let payload: CreateCommentDto;
                if (activeComment?.author.id === user?.id) {
                  payload = {
                    content: html,
                    postId,
                    parentId: comment?.id,
                  };
                } else {
                  payload = {
                    content: html,
                    postId,
                    replyToId: activeComment?.id,
                    parentId: comment?.id,
                  };
                }
                await addReply(token ?? "", payload);
              } else {
                await addComment(token ?? "", {
                  content: html,
                  postId,
                });
              }
              setContent("");
              setActiveComment(undefined);
              toast({
                title: "评论成功",
                // description: "Friday, February 10, 2023 at 5:57 PM",
              });
                            }}
            size={"sm"}
            className="text-base"
            variant={"ghost"}
          >
            <CarbonSendAltFilled />
          </Button>
        </div>
      ) : null}
      {!user ? (
        <div className="absolute left-0 right-0 bottom-0 top-0 text-sm flex justify-center items-center">
          <a
            className="font-medium text-primary underline underline-offset-4 mr-1 cursor-pointer"
            onClick={() => {
              createGoogleLoginUrl();
            }}
          >
            登录
          </a>
          以后可以评论
        </div>
      ) : null}
    </div>
  );
};

export default CommentInput;
