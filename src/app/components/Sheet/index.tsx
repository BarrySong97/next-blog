"use client";
import React, { FC } from "react";

import { motion } from "framer-motion";
import Footer from "../Footer";
export interface SheetProps {
  children: React.ReactNode;
  className?: string;
}
const Sheet: FC<SheetProps> = ({ className = "", children }) => {
  const layoutClass =
    "md:max-w-2xl sm:max-w-none    flex-col  md:mt-0 md:flex-row  md:mx-auto ";
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100, }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
        style={{
          minHeight: "calc(100vh - 198px)",
        }}
        className={` w-full rounded-md px-3 pb-4 sm:p-4 sm:px-6 sm:pt-0 ${layoutClass} ${className} `}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Sheet;
