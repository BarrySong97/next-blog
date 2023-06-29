import React, { FC } from "react";
export interface SideBarProps {}
type SideMenuItem = {
  title: string;
  icon: string;
};
const SideBar: FC<SideBarProps> = () => {
  const menuItems: SideMenuItem[] = [
    {
      title: "主页",
      icon: "home",
    },
    {
      title: "关于",
      icon: "about",
    },
    {
      title: "文章",
      icon: "posts",
    },
    {
      title: "项目",
      icon: "projects",
    },
    {
      title: "照片",
      icon: "photos",
    },
    {
      title: "resume",
      icon: "resume",
    },
  ];
  return <div></div>;
};

export default SideBar;
