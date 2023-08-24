import React, { FC, ReactNode } from "react";
import { MdiGithub, RiWeiboFill, TablerBrandBilibili, TablerBrandTwitterFilled } from "../SideBar/icons";
export interface FooterProps {}
export type SideMenuItem = {
  title: string;
  icon: ReactNode;
  link: string;
};
const Footer: FC<FooterProps> = () => {
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
  return (
    <footer className="bg-white mt-4   rounded-lg shadow dark:bg-gray-900 ">
      <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " />
      <div className="w-full md:max-w-4xl lg:max-w-3xl xl:max-w-3xl 2xl:max-w-6xl  sm:max-w-none  lg:mx-auto  p-6 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-gray-500 text-sm">
            Made by{" "}
            <a href="https://nextjs.org/" className="hover:underline">
              Next.js
            </a>{" "}
            and{" "}
            <a href="https://nestjs.com/" className="hover:underline">
              nestjs
            </a>
          </span>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
            © 2023{" "}
            <a href="http://barrysong4real.cc/" className="hover:underline">
              BarrySong4Real All rights reserved.
            </a>
          </span>
        </div>
        <div className="mt-2">
          <ul className="flex gap-4 text-lg">
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
      </div>
    </footer>
  );
};

export default Footer;
