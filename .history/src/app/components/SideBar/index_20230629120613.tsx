"use client";
import Link from "next/link";
import React, { FC, ReactNode, useState } from "react";
import styles from "./index.module.scss";
import * as Avatar from "@radix-ui/react-avatar";
import "./styles.css";
import {
  IconParkFlashPayment,
  MaterialSymbolsAccountBox,
  MdiGithub,
  NotoCameraWithFlash,
  NotoV1Postbox,
  RiWeiboFill,
  SimpleIconsAboutdotme,
  TablerBrandBilibili,
  TablerBrandTwitterFilled,
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
  const contactItems: SideMenuItem[] = [
    {
      title: "github",
      icon: <MdiGithub />,
      link: "/",
    },
    {
      title: "twitter",
      icon: <TablerBrandTwitterFilled />,
      link: "/",
    },
    {
      title: "weibo",
      icon: <RiWeiboFill />,
      link: "/",
    },
    {
      title: "bilibili",
      icon: <TablerBrandBilibili />,
      link: "/",
    },
  ];
  const [activeKey, setActiveKey] = useState<string>("/");
  return (
    <div className="px-6">
      <div className="pt-16 pb-0 flex flex-col justify-start">
        <section className="mb-4 flex ">
          <Avatar.Root className="AvatarRoot mr-2">
            <Avatar.Image
              className="AvatarImage"
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              alt="Colm Tuite"
            />
            <Avatar.Fallback className="AvatarFallback" delayMs={600}>
              CT
            </Avatar.Fallback>
          </Avatar.Root>
          <div>
            <div>@BarrySong4Real</div>
            <p>全栈工程师/react/nest/flutter</p>
          </div>
        </section>
        <ul>
          {menuItems.map((item) => {
            const isActive = activeKey === item.link;
            return (
              <li key={item.title} className="">
                <Link
                  onClick={() => setActiveKey(item.link)}
                  className={`${styles.sideLinkItem} ${
                    isActive ? styles.sideLinkItemActive : ""
                  } px-2 py-1 mb-2  font-sans box-border  flex items-center text-base`}
                  href={item.link}
                >
                  <span className="mr-2">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pointer-events-none  mb-2  hidden h-px bg-stone-200/70  md:block"></div>
      <section>
        <div>@BarrySong4Real</div>
        <ul className="flex mt-2 justify-between text-lg">
          {contactItems.map((item) => (
            <li key={item.title}>
              <a href={item.link}>{item.icon}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SideBar;
