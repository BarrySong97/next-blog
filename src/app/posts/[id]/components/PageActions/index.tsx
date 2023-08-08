"use client";
import { SolarArrowToTopLeftBold, TablerArrowBackUp } from "@/app/posts/icons";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

export interface PageActionsProps {}
const PageActions: FC<PageActionsProps> = () => {
  const router = useRouter();
  const actionList = [
    {
      icon: <TablerArrowBackUp className="cursor-pointer text-2xl " />,
      key: "back",
      onClick: () => {
        router.back();
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
    <div className="flex gap-2 ">
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
