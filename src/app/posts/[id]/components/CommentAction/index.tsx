"use client";
import { CommentDTO } from "@/blogapi";
import React, { FC, useEffect, useState } from "react";
import { atom, useAtom } from "jotai";
import { userAtom } from "@/app/providers";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import { Button } from "@/app/components/ui/button";
import { PopoverClose } from "@radix-ui/react-popover";
import { deleteComment } from "../CommentInput/actions";
import { useToast } from "@/app/components/ui/use-toast";
export interface CommentActionProps {
  comment: CommentDTO;
  children?: React.ReactNode;
}
export const commentAtom = atom<CommentDTO | undefined>(undefined);
const CommentAction: FC<CommentActionProps> = ({ children, comment }) => {
  const [user] = useAtom(userAtom);
  const { toast } = useToast();
  const [activeComment, setReplyComment] = useAtom(commentAtom);

  return (
    <div>
      <div className="flex gap-2 pl-2 mt-1 items-center text-xs ">
        <span
          onClick={() => {
            if (activeComment && activeComment?.id === comment?.id) {
              setReplyComment(undefined);
            } else {
              setReplyComment(comment);
            }
          }}
          className="text-stone-600 cursor-pointer hover:text-stone-950"
        >
          回复
        </span>
        {user?.id === comment?.author?.id ? (
          <Popover>
            <PopoverTrigger>
              <span className="text-stone-600 cursor-pointer hover:text-stone-950">
                删除
              </span>
            </PopoverTrigger>
            <PopoverContent>
              <div className="text-center text-sm">
                删除评论后，评论下所有回复都会被删除 是否继续?
              </div>
              <div className="mt-2 flex justify-center gap-2">
                <PopoverClose>
                  <Button
                    onClick={async () => {
                      const token = window.localStorage.getItem("accessToken");
                      await deleteComment(comment?.id, token ?? "");
                      toast({
                        title: "删除成功",
                        // description: "Friday, February 10, 2023 at 5:57 PM",
                      });
                    }}
                    size={"sm"}
                  >
                    确认
                  </Button>
                </PopoverClose>
                <PopoverClose>
                  <Button variant={"outline"} size={"sm"}>
                    取消
                  </Button>
                </PopoverClose>
              </div>
            </PopoverContent>
          </Popover>
        ) : null}
      </div>
      {children}
    </div>
  );
};

export default CommentAction;
