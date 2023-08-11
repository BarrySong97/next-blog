"use client";
import "react-grid-layout/css/styles.css";
import { Responsive, Layout, WidthProvider, Layouts } from "react-grid-layout";
import { FC } from "react";
import { PhotoDTO } from "@/blogapi";
import ImageViewer from "../ImageView";
export interface ImageLayoutProps {
  layout: Layout[];
  images: PhotoDTO[];
}
const ResponsiveGridLayout = WidthProvider(Responsive);
const ImageLayout: FC<ImageLayoutProps> = ({ layout, images }) => {
  const layouts: Layouts = {
    xxs: layout.map((v, i) => {
      const x = 0;
      const y = i * 3;
      return {
        ...v,
        w: 3.75,
        h: 3,
        x: x,
        y: y,
        moved: false,
        static: false,
      };
    }),
    lg: layout,
  };
  return (
    <ResponsiveGridLayout
      className="layout left-[-5px]"
      layouts={layouts}
      isResizable={false}
      isDraggable={false}
      margin={{ md: [5, 5], xxs: [0, 10] }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      isDroppable={false}
      // width={10}
      rowHeight={110}
    >
      {images?.map((item) => {
        return (
          <div key={item.id} className="cursor-pointer">
            <ImageViewer
              key={item.id}
              src={item.url}
              className={`cursor-pointer h-full w-full  object-cover `}
            />
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};

export default ImageLayout;
