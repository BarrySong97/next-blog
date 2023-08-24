"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { FC, ReactNode, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { usePathname, useSearchParams } from "next/navigation";
import "./styles.css";
import {
  IconParkFlashPayment,
  LogosGoogleIcon,
  MaterialSymbolsLogin,
  NotoCameraWithFlash,
  NotoV1Postbox,
  UimBox,
} from "./icons";
import CommandSearch from "../CommandSearch";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { userAtom } from "@/app/providers";
import { useAtom } from "jotai";
import { proxy } from "@/blogapi/core/OpenAPI";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
export interface SideBarProps {}
type SideMenuItem = {
  title: string;
  icon: ReactNode;
  link: string;
};
export function createGoogleLoginUrl() {
  const baseUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const scope = "email profile"; // 请求 email 和 profile 信息
  const responseType = "code"; // 我们希望得到一个授权码
  const url = new URL(baseUrl);

  url.searchParams.append(
    "client_id",
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ""
  );
  url.searchParams.append(
    "redirect_uri",
    process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL ?? ""
  );
  url.searchParams.append("scope", scope);
  url.searchParams.append("response_type", responseType);
  console.log(url.toString());

  window.location.href = url.toString();
}
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
  const pathname = usePathname();
  const [activeKey, setActiveKey] = useState<string>(pathname);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [user, setUser] = useAtom(userAtom);
  const shadow =
    "md:supports-backdrop-blur:bg-background/60  md:bg-background/95 md:backdrop-blur";
  const border = "border-b border-slate-900/10";
  const layout =
    "md:max-w-4xl lg:max-w-3xl xl:max-w-3xl 2xl:max-w-6xl  sm:max-w-none  lg:mx-auto  w-full py-3 md:py-4 z-50";
  useEffect(() => {
    setActiveKey(pathname);
  }, [pathname]);

  const getCurrentUser = async (token: string) => {
    setLoading(true);
    const user = await fetch(`${proxy}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
    setLoading(false);
    if (user) {
      setUser(user);
    }
  };
  const logout = () => {
    window.localStorage.removeItem("accessToken");
    setUser(null);
    setLoading(false);
  };
  useEffect(() => {
    if (user) return;
    const token = window.localStorage.getItem("accessToken");
    if (token) {
      getCurrentUser(token);
    } else {
      // googleLogin();
    }
  }, []);

  return (
    <header className={`${border} sticky top-0 mb-2 md:mb-4 z-20`}>
      <nav
        className={` ${shadow} ${layout} bg-white items-center px-2 sm:px-6  flex justify-between ${styles.nav} `}
      >
        <ul className="relative flex gap-2">
          {menuItems.map((item) => {
            const isActive = !code
              ? item.link === "/"
                ? activeKey === item.link
                : activeKey.includes(item.link)
              : false;
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
          {user || loading ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="h-[30px] w-[30px]">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback>{user?.firstname?.[0]}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>我的账户</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    logout();
                  }}
                >
                  登出
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Button
                  className="rounded-full"
                  variant={"outline"}
                  size={"icon"}
                >
                  <MaterialSymbolsLogin />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Button
                  onClick={() => {
                    window.localStorage.setItem("redirectUrl", pathname);
                    createGoogleLoginUrl();
                  }}
                  variant={"outline"}
                  className="w-full"
                >
                  <div className="flex items-center gap-2">
                    <LogosGoogleIcon />
                    Google 登录
                  </div>
                </Button>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
