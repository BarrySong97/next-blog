"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { FC, ReactNode, useState } from "react";
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
  return (
    <nav className="w-full py-4 z-50 bg-white items-center px-6 sticky top-0 flex justify-between">
      <ul className="relative flex gap-2">
        {menuItems.map((item) => {
          const isActive = activeKey === item.link;
          return (
            <li key={item.title}>
              <Link
                onClick={() => setActiveKey(item.link)}
                className={`px-2 py-1 relative font-sans box-border  flex items-center text-lg cursor-pointer`}
                href={item.link}
              >
                {item.link === pathname && (
                  <motion.span
                    layoutId="nav_underline"
                    className="absolute left-0 top-full block h-px w-full bg-gray-500"
                  ></motion.span>
                )}
                {/* {isActive ? <span className={styles.mark}></span> : null} */}
                {/* <span style={{ zIndex: 100 }} className="mr-1 ">
                  {item.icon}
                </span> */}
                <span
                  style={{ zIndex: 100 }}
                  className={`font-bold text-sm hover:text-stone-900 ${
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
      <ul className="flex gap-4 justify-between text-lg">
        {contactItems.map((item) => (
          <li key={item.title}>
            <SoicalCard type={item.title}>
              <a
                href={item.link}
                target="_blank"
                className="text-stone-600 cursor-pointer hover:text-stone-950"
              >
                {item.icon}
              </a>
            </SoicalCard>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
