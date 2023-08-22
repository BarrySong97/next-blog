import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import React, { FC } from "react";
import CommentInput from "../CommentInput";
export interface CommentsProps {}
export interface CommentItemProps {}
const CommentItem: FC<CommentItemProps> = () => {
  return (
    <div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src="https://ui.shadcn.com/avatars/03.png"
            alt="Avatar"
          />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 ">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-xs text-muted-foreground">2021年12月13日 10:21</p>
        </div>
      </div>
      <p className="ml-2 mt-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
        facilis ad facere molestias voluptate minima exercitationem voluptates
        corporis voluptatibus quibusdam eum, aspernatur saepe eaque dolorum
        omnis quidem quos, recusandae accusantium!
        这是一条无敌的评论，我就想测试一下
      </p>
    </div>
  );
};
const Comments: FC<CommentsProps> = () => {
  return (
    <div >
      <h2  className="font-bold text-3xl mb-4">评论</h2>
      <CommentInput />
      <div className="space-y-8 ">
        {new Array(10).fill(0).map((_, i) => {
          return <CommentItem key={i} />;
        })}
      </div>
    </div>
  );
};

export default Comments;
