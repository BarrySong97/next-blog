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
export interface CommentInputProps {}
const CommentInput: FC<CommentInputProps> = () => {
  const [preview, setPreview] = useState(false);
  const [content, setContent] = useState<string>();
  const html = content ? marked(content) : "";

  return (
    <div className="mb-8 relative">
      {!preview ? (
        <Textarea
          placeholder="留下你的评论，支持 Markdown 格式"
          maxLength={600}
          value={content}
          className="min-h-[200px] max-h-[400px] text-base"
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
          <Button size={"sm"} className="text-base" variant={"ghost"}>
            <CarbonSendAltFilled />
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CommentInput;
