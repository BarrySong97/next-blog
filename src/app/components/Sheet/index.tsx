"use client";
import React, { FC } from "react";

import { motion } from "framer-motion";
export interface SheetProps {
  children: React.ReactNode;
}
const Sheet: FC<SheetProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.4 }}
      className="  mx-2   w-full rounded-md p-4 "
    >
      {children}
    </motion.div>
  );
};

export default Sheet;
