import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import React, { FC } from "react";
import CommentInput from "../CommentInput";
import { proxy } from "@/blogapi/core/OpenAPI";
import { CommentDTO } from "@/blogapi";
import dayjs from "dayjs";
import CommentAction from "../CommentAction";
import { Separator } from "@/app/components/ui/separator";

export interface CommentsProps {}
export interface CommentItemProps {
  data: CommentDTO;
  type?: "comment" | "reply";
}
const CommentItem: FC<CommentItemProps> = ({ type = "comment", data }) => {
  const name = `${data?.author?.firstname} ${data?.author?.lastname}`;
  const avatarName = `${data?.author?.firstname?.[0]}${data?.author?.lastname?.[0]}`;
  const date = dayjs(data?.createdAt).format("YYYY年MM月DD日 HH:mm");
  const avatarSize = type === "comment" ? "" : "h-[30px] w-[30px]";
  return (
    <div>
      <div className="flex items-center">
        <Avatar className={avatarSize}>
          <AvatarImage src={data?.author?.avatar} alt="Avatar" />
          <AvatarFallback>{avatarName}</AvatarFallback>
        </Avatar>
        <div className="ml-4 ">
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
      </div>
      <p
        className="ml-2 mt-1"
        dangerouslySetInnerHTML={{
          __html: data?.content,
        }}
      ></p>
      <CommentAction comment={data}>
        <div className="pl-4">
          {data?.children?.map((item) => {
            return (
              <div key={item.id} className="ml-4">
                <CommentItem data={item} type="reply" />
              </div>
            );
          })}
        </div>
      </CommentAction>
    </div>
  );
};
const Comments = async () => {
  const comments: CommentDTO[] = await fetch(`${proxy}/comments`, {
    next: { tags: ["comments"] },
  }).then((res) => res.json());
  return (
    <div className="comment__message">
      <h2 className="font-bold text-3xl mb-4">评论</h2>
      <CommentInput />
      <div className="space-y-8">
        {comments?.length ? (
          comments?.map((item, i) => {
            return (
              <div key={item?.id}>
                <CommentItem data={item} />
                <CommentInput
                  comment={item}
                  type="reply"
                  height={100}
                  className="max-h-[150px] mt-2"
                />
                {i !== comments?.length - 1 ? <Separator className="mt-6" /> : null}
              </div>
            );
          })
        ) : (
          <div className="text-sm">暂无评论...</div>
        )}
      </div>
    </div>
  );
};

export default Comments;
