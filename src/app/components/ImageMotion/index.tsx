"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { PhotoDTO } from "@/blogapi";
export interface ImageMotionProps {
  photo: PhotoDTO;
  imgClassName?: string;
}
const ImageMotion: FC<ImageMotionProps> = ({ imgClassName = "", photo }) => {
  return (
    <>
      <motion.img src={photo.url} className={imgClassName}></motion.img>
    </>
  );
};

export default ImageMotion;
