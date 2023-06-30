import React, { FC } from "react";
export interface TwitterCardProps {}
const BilibiliCard: FC<TwitterCardProps> = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <img
        className="object-cover"
        src="https://pic.imgdb.cn/item/649e6ad81ddac507cc0e02f3.jpg"
        alt=""
        style={{
          height: 116,
        }}
      />
      <img
        className="Image  large mb-3"
        src="https://pbs.twimg.com/profile_images/1635250588224204801/f0qNO2x-_400x400.jpg"
        alt="BarrySong"
      />
      <div
        className="pb-1"
        style={{
          display: "flex",
          flexDirection: "column",
          // gap: 15,
        }}
      >
        <div className="text-white">
          <div className="Text bold text-center text-white">BarrySong4Real</div>
        </div>
        <div className="Text text-white text-xs text-center">
          程序员，个人网站 https://bs4real.netlify.app/
        </div>
        <div
          style={{ display: "flex", gap: 15 }}
          className="items-center justify-center"
        >
          <div style={{ display: "flex", gap: 5 }}>
            <div className="Text bold">192</div>
            <div className="Text faded">关注</div>
          </div>
          <div
            className="pointer-events-none  h-full w-px bg-stone-300  md:block"
            style={{ height: 16 }}
          ></div>
          <div style={{ display: "flex", gap: 5 }}>
            <div className="Text bold">96</div>
            <div className="Text faded">粉丝</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BilibiliCard;
