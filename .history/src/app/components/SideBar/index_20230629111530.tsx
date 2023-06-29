"use client";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import {
  IconParkFlashPayment,
  MaterialSymbolsAccountBox,
  NotoCameraWithFlash,
  NotoV1Postbox,
  SimpleIconsAboutdotme,
  UimBox,
} from "./icons";
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
      icon: <SimpleIconsAboutdotme />,
      link: "/about",
    },
    {
      title: "文章",
      icon: <NotoV1Postbox />,
      link: "/posts",
    },
    {
      title: "项目",
      icon: <UimBox />,
      link: "/projects",
    },
    {
      title: "照片",
      icon: <NotoCameraWithFlash />,
      link: "/photos",
    },
    {
      title: "resume",
      icon: <MaterialSymbolsAccountBox />,
      link: "/resume",
    },
  ];
  return (
    <ul>
      {menuItems.map((item) => {
        return (
          <li key={item.title} className="">
            <Link
              className={`${styles.sideLinkItem} p-2 font-sans  flex items-center text-base`}
              href={item.link}
            >
              <span className="mr-2">{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SideBar;
