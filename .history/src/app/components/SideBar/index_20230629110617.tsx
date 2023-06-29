import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { IconParkFlashPayment } from "./icons";
export interface SideBarProps {}
type SideMenuItem = {
  title: string;
  icon: ReactNode;
  link: string;
};
const SideBar: FC<SideBarProps> = () => {
  const menuItems: SideMenuItem[] = [
    {
      title: "主页",
      icon: <IconParkFlashPayment />,
      link: "/",
    },
    {
      title: "关于",
      icon: "about",
      link: "/about",
    },
    {
      title: "文章",
      icon: "posts",
      link: "/posts",
    },
    {
      title: "项目",
      icon: "projects",
      link: "/projects",
    },
    {
      title: "照片",
      icon: "photos",
      link: "/photos",
    },
    {
      title: "resume",
      icon: "resume",
      link: "/resume",
    },
  ];
  return (
    <ul>
      {menuItems.map((item) => {
        return (
          <li key={item.title} className="p-2">
            <Link href={item.link}>
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SideBar;
