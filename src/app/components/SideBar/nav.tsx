"use client";
import { ReactNode } from "react";

import {
  IconParkFlashPayment,
  MaterialSymbolsLogin,
  NotoCameraWithFlash,
  NotoV1Postbox,
  UimBox,
} from "./icons";
type SideMenuItem = {
  title: string;
  icon: ReactNode;
  link: string;
};
import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { userAtom } from "@/app/providers";
import { useAtom } from "jotai";
export interface NavListProps {
  activeKey: string;
}
const NavList: FC<NavListProps> = ({ activeKey }) => {
  const getInfo = () => {
    // if (typeof window !== "undefined") {
    //   const urlParams = new URLSearchParams(window.location.search);
    //   const code = urlParams.get("code");
    //   const path = window.localStorage.getItem("redirectUrl");
    //   return { path, code };
    // }
  };
  const [user] = useAtom(userAtom);
  const menuItems: SideMenuItem[] = [
    {
      title: "主页",
      icon: <IconParkFlashPayment />,
      link: "/",
    },
    {
      title: "文章",
      icon: <NotoV1Postbox />,
      link: "/posts",
    },
    {
      title: "照片",
      icon: <NotoCameraWithFlash />,
      link: "/photos",
    },
    {
      title: "项目",
      icon: <UimBox />,
      link: "/projects",
    },
    // {
    //   title: "简历",
    //   icon: <MaterialSymbolsAccountBox />,
    //   link: "/resume",
    // },
  ];
  return (
    <ul className="relative flex gap-2">
      {menuItems.map((item) => {
        // const { path, code } = getInfo() || {};
        console.log(user);
        
        const isActive =
          item.link === "/"
            ? activeKey === item.link
            : activeKey.includes(item.link);
        return (
          <li key={item.title}>
            <Link
              // onClick={() => setActiveKey(item.link)}
              className={`px-2 py-1 relative font-sans box-border  flex items-center text-lg cursor-pointer`}
              href={item.link}
            >
              {isActive && (
                <motion.span
                  layoutId="nav_underline"
                  className="absolute left-0 top-full block h-px w-full bg-gray-500"
                ></motion.span>
              )}
              <span
                style={{ zIndex: 100 }}
                className={`font-bold sm:text-sm text-xs hover:text-stone-900 ${
                  isActive ? "text-stone-900" : "text-stone-400"
                }`}
              >
                {item.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
