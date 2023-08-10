import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import Image from "next/image";
export interface ImageViewerProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  viewerWidth?: string;
  height?: number;
  width?: number;
  viewerHeight?: string;
}
const ImageViewer: FC<ImageViewerProps> = ({
  src,
  height = 250,
  className = "",
  style,
  width = 250,
  viewerWidth = 1317,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          height={height}
          width={width}
          unoptimized
          className={` rounded-md  object-cover ${className}`}
          src={src}
          alt={"imgs"}
        />
      </DialogTrigger>
      <DialogContent
        className="p-0"
        style={{
          width: viewerWidth,
        }}
      >
        <Image
          height={250}
          width={250}
          unoptimized
          className={`w-full h-full rounded-md  object-cover ${className}`}
          src={src}
          alt={"imgs"}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageViewer;
