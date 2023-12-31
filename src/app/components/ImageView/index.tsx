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
export const blurDataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABSkAAAJHCAIAAADzNETgAAAcGklEQVR4nO3dW1MT2d7A4STkSEg4hJOKijrM1K7aVfv7f4e52XfbcavAHkTkTAg5kJD3IlVU3g6HwPgXHJ7nym46zYq50F9W9+r077//ngIAAADCZB56AAAAAPA3p70BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlv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AAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAIJb2BgAAgFjaGwAAAGJpbwAAAIilvQEAACCW9gYAAIBY2hsAAABiaW8AAACIpb0BAAAglvYGAACAWNobAAAAYmlvAAAAiKW9AQAAINb/AXj0kOGXh906AAAAAElFTkSuQmCC";
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
          blurDataURL={blurDataUrl}
          placeholder="blur"
          className={` rounded-md  object-cover ${className}`}
          src={src}
          alt={"imgs"}
        />
      </DialogTrigger>
      <DialogContent
        className="p-0 !w-[671px] max-h-[871px] "
      >
        <Image
          height={250}
          width={250}
          unoptimized
          blurDataURL={blurDataUrl}
          placeholder="blur"
          className={`w-full max-h-[871px] rounded-md  object-cover `}
          src={src}
          alt={"imgs"}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageViewer;
