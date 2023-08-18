"use client";
import "react-grid-layout/css/styles.css";
import { Responsive, Layout, WidthProvider, Layouts } from "react-grid-layout";
import { FC, useState } from "react";
import { PhotoDTO } from "@/blogapi";
import ImageViewer from "../ImageView";
import { AnimatePresence, motion } from "framer-motion";
export interface ImageLayoutProps {
  layout: Layout[];
  images: PhotoDTO[];
}
const ResponsiveGridLayout = WidthProvider(Responsive);
const ImageLayout: FC<ImageLayoutProps> = ({ layout, images }) => {
  const [select, setSelect] = useState<PhotoDTO | null>(null);
  const layouts: Layouts = {
    xxs: layout.map((v, i) => {
      const x = 0;
      const y = i * 2;
      return {
        ...v,
        w: 3.75,
        h: 2,
        x: x,
        y: y,
        moved: false,
        static: false,
      };
    }),
    xs: layout.map((v, i) => {
      const x = (i % 2) * 2;
      const y = i * 3;
      return {
        ...v,
        w: 1,
        h: 2,
        x: x,
        y: y,
        moved: false,
        static: false,
      };
    }),
    lg: layout,
  };
  return (
    <>
      <ResponsiveGridLayout
        className="layout sm:ml-[-3px]"
        layouts={layouts}
        isResizable={false}
        isDraggable={false}
        margin={{ md: [5, 5], xxs: [0, 5], xs: [5, 5] }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 9, sm: 3, xs: 2, xxs: 2 }}
        isDroppable={false}
        // width={10}
        rowHeight={110}
      >
        {images?.map((img, i) => {
          return (
            <div key={i} className="h-full">
              <motion.div
                onClick={() => {
                  setSelect(img);
                }}
                layoutId={`container-${img.id}`}
                className="cursor-pointer h-full "
              >
                <motion.div
                  layoutId={`img-container-${img.id} `}
                  className="h-full"
                >
                  <motion.img
                    layoutId={img.id}
                    src={img.url}
                    className={`object-cover rounded-md  h-full w-full cursor-pointer  `}
                  ></motion.img>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </ResponsiveGridLayout>
      <AnimatePresence>
        {select ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
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
                // transition={{ duration: 0.6 }}
                exit={{
                  // transition: { delay: 0.6, duration: 0.6 },
                }}
                layoutId={`container-${select.id}`}
              >
                <motion.div
                  layoutId={`img-container-${select.id}`}
                  // transition={{ duration: 0.6 }}
                  exit={{
                    // transition: { delay: 0.6, duration: 0.6 },
                  }}
                  className="flex items-center bg-gray-100"
                >
                  <motion.img
                    src={select.url}
                    // layoutId={select.id}
                    // transition={{ duration: 0.6 }}
                    exit={{
                      // transition: { delay: 0.6, duration: 0.6 },
                    }}
                    className={`object-cover rounded-l-md  w-[671px] max-h-[871px]   `}
                  ></motion.img>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default ImageLayout;
