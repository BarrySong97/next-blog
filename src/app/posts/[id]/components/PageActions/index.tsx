"use client";
import { SolarArrowToTopLeftBold, TablerArrowBackUp } from "@/app/posts/icons";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

export interface PageActionsProps {
  backPath: string;
}
const PageActions: FC<PageActionsProps> = ({ backPath }) => {
  const router = useRouter();
  const actionList = [
    {
      icon: <TablerArrowBackUp className="cursor-pointer text-2xl " />,
      key: "back",
      onClick: () => {
        const path = backPath === "posts" ? "/posts" : "/";
        router.replace(path);
      },
    },
    {
      icon: <SolarArrowToTopLeftBold className="cursor-pointer text-2xl " />,
      key: "backToTop",
      onClick: () => {
        window.scrollTo({
          top: 0,
        });
      },
    },
  ];

  return (
    <div className="md:flex gap-2 hidden fixed right-60 bottom-10">
      {actionList.map((action) => {
        return (
          <div
            key={action.key}
            onClick={action.onClick}
            className="cursor-pointer p-1 hover:bg-gray-200  rounded  "
          >
            {action.icon}
          </div>
        );
      })}
    </div>
  );
};

export default PageActions;
