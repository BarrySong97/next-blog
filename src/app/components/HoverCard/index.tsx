import React, { ReactNode } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import "./styles.css";
import classnames from "classnames";
import TwitterCard from "./components/TwitterCard";
import GithubCard from "./components/GithubCard";
import WeiboCard from "./components/WeiboCard";
import BilibiliCard from "./components/BilibiliCard";

const SoicalCard = ({
  children,
  type,
}: {
  children: ReactNode;
  type: "twitter" | "weibo" | "github" | "bilibili" | string;
}) => {
  const renderContent = () => {
    switch (type) {
      case "twitter":
        return <TwitterCard />;
      case "weibo":
        return <WeiboCard />;
      case "github":
        return <GithubCard />;
      case "bilibili":
        return <BilibiliCard />;
      default:
        return <TwitterCard />;
    }
  };
  const hoverCardClassName = classnames("HoverCardContent ", {
    "p-0": ["weibo", "bilibili"].includes(type),
  });
  return (
    <HoverCard.Root openDelay={300}>
      <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          style={{
            zIndex: 9999,
            position: "relative",
          }}
          className={hoverCardClassName}
          sideOffset={5}
        >
          <HoverCard.Arrow className="HoverCardArrow" />
          {renderContent()}
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default SoicalCard;
