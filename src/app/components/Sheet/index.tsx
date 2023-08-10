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
      className="     w-full rounded-md px-3 pb-4 sm:p-4 sm:px-6 sm:pt-0"
    >
      {children}
    </motion.div>
  );
};

export default Sheet;
