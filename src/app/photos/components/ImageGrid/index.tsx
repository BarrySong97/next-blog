"use client";
import { PhotoDTO } from "@/blogapi";
import { AnimatePresence, delay, motion } from "framer-motion";
import React, { FC, useState } from "react";
export interface ImageGridProps {
  data: PhotoDTO[];
}
const ImageGrid: FC<ImageGridProps> = ({ data }) => {
  const [select, setSelect] = useState<PhotoDTO | null>(null);

  return (
    <section className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2  ">
      {data?.map((img) => {
        return (
          <motion.div key={img.id}>
            <motion.div
              onClick={() => {
                setSelect(img);
              }}
              layoutId={`container-${img.id}`}
              className="mb-3 "
            >
              <motion.div
                layoutId={`img-container-${img.id}`}
                className="md:h-[200px] lg:h-[250px] flex justify-start"
              >
                <motion.img
                  // layoutId={img.id}
                  src={img.url}
                  className={`object-cover rounded-md w-full h-full cursor-pointer  `}
                ></motion.img>
              </motion.div>
              <motion.div
                layoutId={`content-${img.id}`}
                className={`h-full w-0`}
              ></motion.div>
            </motion.div>
          </motion.div>
        );
      })}
      <AnimatePresence>
        {select ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.6,
                },
              }}
              onClick={() => {
                setSelect(null);
              }}
              style={{
                backgroundColor: "hsla(0,0%,100%,0.98)",
              }}
              className="fixed w-screen top-0 left-0 h-screen  z-30 flex justify-center items-center overflow-hidden"
            >
              <motion.div
                style={{
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
                className="flex rounded-lg shadow-lg overflow-hidden"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                transition={{ duration: 0.6 }}
                exit={{
                  transition: { delay: 0.6, duration: 0.6 },
                }}
                layoutId={`container-${select.id}`}
              >
                <motion.div
                  layoutId={`img-container-${select.id}`}
                  transition={{ duration: 0.6 }}
                  exit={{
                    transition: { delay: 0.6, duration: 0.6 },
                  }}
                  className="flex items-center bg-gray-100"
                >
                  <motion.img
                    src={select.url}
                    layoutId={select.id}
                    transition={{ duration: 0.6 }}
                    exit={{
                      transition: { delay: 0.6, duration: 0.6 },
                    }}
                    className={`object-cover rounded-l-md  w-[671px] max-h-[871px]   `}
                  ></motion.img>
                </motion.div>
                {/* <motion.div
                  transition={{ duration: 0.6 }}
                  exit={{
                    transition: { delay: 0.6, duration: 0.6 },
                  }}
                  className="bg-white rounded-r-lg z-30 w-[440px] h-[871px]"
                >
                  111
                </motion.div> */}
              </motion.div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default ImageGrid;
