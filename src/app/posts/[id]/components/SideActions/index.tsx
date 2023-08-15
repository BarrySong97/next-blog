"use client";
import { Button } from "@/app/components/ui/button";
import copy from "copy-to-clipboard";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import QRCode from "qrcode";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import {
  BiSinaWeibo,
  IconParkTencentQq,
  MaterialSymbolsContentCopy,
  SolarShareBold,
  TablerBrandTwitterFilled,
  UiwWeixin,
} from "@/app/posts/icons";
import { PostDTO } from "@/blogapi";

import React, { FC, useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/components/ui/hover-card";
export interface SideActionsProps {
  post?: PostDTO;
}
const SideActions: FC<SideActionsProps> = ({ post }) => {
  const items = [
    // {
    //   key: "like",
    //   icon: "",
    //   onClick: () => {},
    // },
    // {
    //   key: "comment",
    //   icon: "",
    //   onClick: () => {},
    // },
    {
      key: "share",
      icon: <SolarShareBold />,
      className: "",
      onClick: () => {},
      style: {},
    },
  ];
  //   const href = window.location.href;
  const [qrcode, setQrcode] = useState<string>();
  useEffect(() => {
    const url = `http://www.barrysong4real.cc/posts/${post?.id}`;
    renderQrCode(url);
  }, []);
  const renderQrCode = async (text: string) => {
    try {
      const code = await QRCode.toDataURL(text);
      setQrcode(code);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {items.map((item) => {
        const className = `text-xl text-stone-600  rounded-full ${item.className}`;
        return (
          <div key={item.key}>
            {item.key !== "share" ? (
              <Button
                style={item.style}
                size="icon"
                key={item.key}
                className={className}
                onClick={item.onClick}
                variant="outline"
              >
                {item.icon}
              </Button>
            ) : (
              <Popover>
                <PopoverTrigger>
                  <Button
                    style={item.style}
                    size="icon"
                    className={className}
                    onClick={item.onClick}
                    variant="outline"
                  >
                    {item.icon}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex flex-col space-y-2 text-center sm:text-left">
                    <h3 className="text-lg font-semibold">分享文章</h3>
                    <p className="text-sm text-muted-foreground">
                      分享这篇文章到你的社交媒体上，或者转发给你的朋友
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 pt-4">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        value={`http://www.barrysong4real.cc/posts/${post?.id}`}
                        readOnly
                        className="h-9"
                      />
                    </div>
                    <Button
                      size="sm"
                      className="px-3 "
                      onClick={() => {
                        copy(`http://www.barrysong4real.cc/posts/${post?.id}`);
                      }}
                    >
                      <span className="sr-only">Copy</span>
                      <MaterialSymbolsContentCopy className="text-base" />
                    </Button>
                  </div>
                  <div className="flex justify-between mt-4 ">
                    <Button
                      onClick={() => {
                        open(
                          `http://twitter.com/intent/tweet?text=${post?.title}&url=http://barrysong4real.cc/posts/${post?.id}&via=BarrySong97`,
                          "_blank"
                        );
                      }}
                      size="sm"
                      variant={"outline"}
                      className="text-xl text-blue-500 hover:text-blue-700"
                    >
                      <TablerBrandTwitterFilled />
                    </Button>
                    <Button
                      variant={"outline"}
                      size="sm"
                      onClick={() => {
                        const url = `http://service.weibo.com/share/share.php?url=http://barrysong4real.cc/posts/${post?.id}&title=${post?.title}&pic=&appkey=1343713053&searchPic=false`;
                        open(url, "_blank");
                      }}
                      className=" text-xl text-red-700 hover:text-red-900"
                    >
                      <BiSinaWeibo />
                    </Button>
                    <HoverCard openDelay={0}>
                      <HoverCardTrigger>
                        <Button
                          variant={"outline"}
                          size="sm"
                          className=" text-xl text-green-700 hover:text-green-900"
                        >
                          <UiwWeixin />
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="flex justify-center items-center">
                        <img
                          src={qrcode}
                          alt="qrcode"
                          className="h-[200px] w-[200px]"
                        />
                      </HoverCardContent>
                    </HoverCard>
                    <Button
                      onClick={() => {
                        open(
                          `http://connect.qq.com/widget/shareqq/index.html?url=http://www.barrysong4real.cc/posts/${post?.id}&title=${post?.title}&source=`,
                          "_blank"
                        );
                      }}
                      variant={"outline"}
                      size="sm"
                      className=" text-xl"
                    >
                      <IconParkTencentQq />
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SideActions;
