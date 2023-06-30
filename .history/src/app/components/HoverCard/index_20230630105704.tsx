import React, { ReactNode } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import "./styles.css";

const SoicalCard = ({
  children,
  type,
}: {
  children: ReactNode;
  type: "twitter" | "weibo" | "github" | "bilibili";
}) => (
  <HoverCard.Root openDelay={300}>
    <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content className="HoverCardContent" sideOffset={5}>
        <HoverCard.Arrow className="HoverCardArrow" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default SoicalCard;
