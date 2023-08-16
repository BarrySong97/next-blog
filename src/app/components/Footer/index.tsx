import React, { FC } from "react";
export interface FooterProps {}
const Footer: FC<FooterProps> = () => {
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
      </div>
    </footer>
  );
};

export default Footer;
