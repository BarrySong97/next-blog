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
  ];
  return <div></div>;
};

export default SideBar;
