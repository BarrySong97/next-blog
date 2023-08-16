"use client";
import { SolarArrowToTopLeftBold, TablerArrowBackUp } from "@/app/posts/icons";
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";

export interface PageActionsProps {
  backPath: string;
}
const PageActions: FC<PageActionsProps> = ({ backPath }) => {
  const router = useRouter();
  const [showBackToTop, setShowBackToTop] = useState(false);
  function isInViewport(element: Element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  }
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile =
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(
        userAgent
      );

    const handleScroll = () => {
      // 获取所有有id的元素
      const headings = Array.from(document.querySelectorAll("h2[id], h3[id]"));
      const tocItems = Array.from(document.querySelectorAll(".toc-item"));

      // 遍历headings,获取滚动到视口中的元素
      for (const heading of headings) {
        // 获取当前Heading的id
        if (isInViewport(heading)) {
          const headingId = heading.id;

          // 找到匹配的TocItem
          const matchedItem = tocItems.find((item) => {
            return item.attributes
              .getNamedItem("href")
              ?.value.includes(headingId);
          });

          // 如果找到匹配项,进行处理
          if (matchedItem) {
            // 例如在Heading前添加锚点元素
            matchedItem.classList.add("toc-item-active");
          }
          tocItems.forEach((item) => {
            if (item !== matchedItem) {
              item.classList.remove("toc-item-active");
            }
          });

          break;
        }
      }
    };
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
      if (!isMobile) {
        handleScroll();
      }
    });
  }, []);
  const actionList = [
    {
      icon: <TablerArrowBackUp className="cursor-pointer text-2xl " />,
      key: "back",
      show: true,
      onClick: () => {
        const path = backPath === "posts" ? "/posts" : "/";
        router.replace(path);
      },
    },
    {
      icon: <SolarArrowToTopLeftBold className="cursor-pointer text-2xl " />,
      key: "backToTop",
      show: showBackToTop,
      onClick: () => {
        window.scrollTo({
          top: 0,
        });
      },
    },
  ];

  return (
    <div className="md:flex gap-2 hidden ml-4">
      {actionList.map((action) => {
        const show = action.show ? "" : "opacity-0 pointer-events-none ";
        return (
          <Button
            variant={"outline"}
            key={action.key}
            onClick={action.onClick}
            className={`p-2  transition-all rounded-lg  ${show} `}
          >
            {action.icon}
          </Button>
        );
      })}
    </div>
  );
};

export default PageActions;
