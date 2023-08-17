"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { FC, ReactNode, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import "./styles.css";
import {
  IconParkFlashPayment,
  MaterialSymbolsAccountBox,
  MdiGithub,
  NotoCameraWithFlash,
  NotoV1Postbox,
  RiWeiboFill,
  TablerBrandBilibili,
  TablerBrandTwitterFilled,
  UimBox,
} from "./icons";
import SoicalCard from "../HoverCard";
import CommandSearch from "../CommandSearch";
export interface SideBarProps {}
type SideMenuItem = {
  title: string;
  icon: ReactNode;
  link: string;
};
const Navigation: FC<SideBarProps> = () => {
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
  const contactItems: SideMenuItem[] = [
    {
      title: "github",
      icon: <MdiGithub />,
      link: "https://github.com/BarrySong97",
    },
    {
      title: "weibo",
      icon: <RiWeiboFill />,
      link: "https://weibo.com/u/2670904663",
    },
    {
      title: "bilibili",
      icon: <TablerBrandBilibili />,
      link: "https://space.bilibili.com/868586?spm_id_from=333.1007.0.0",
    },
    {
      title: "twitter",
      icon: <TablerBrandTwitterFilled />,
      link: "https://twitter.com/home",
    },
  ];
  const pathname = usePathname();
  const [activeKey, setActiveKey] = useState<string>(pathname);
  const shadow =
    "md:supports-backdrop-blur:bg-background/60  md:bg-background/95 md:backdrop-blur";
  const border = "border-b border-slate-900/10";
  const layout =
    "md:max-w-4xl lg:max-w-3xl xl:max-w-3xl 2xl:max-w-6xl  sm:max-w-none  lg:mx-auto  w-full py-3 md:py-4 z-50";
  useEffect(() => {
    setActiveKey(pathname);
  }, [pathname]);
  return (
    <header className={`${border} sticky top-0 mb-2 md:mb-4 z-20`}>
      <nav
        className={` ${shadow} ${layout} bg-white items-center px-2 sm:px-6  flex justify-between ${styles.nav} `}
      >
        <ul className="relative flex gap-2">
          {menuItems.map((item) => {
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
        <div className="flex gap-4 items-center"> 
          <CommandSearch />
          <ul className="flex gap-4 justify-between text-lg">
            {contactItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.link}
                  target="_blank"
                  className="text-stone-600 cursor-pointer hover:text-stone-950"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
