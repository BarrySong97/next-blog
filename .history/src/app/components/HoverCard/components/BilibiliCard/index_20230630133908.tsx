import React, { FC } from "react";
export interface TwitterCardProps {}
const BilibiliCard: FC<TwitterCardProps> = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <div
        className="p-6  w-full flex  flex-col justify-center items-center"
        style={{
          height: 140,

          backgroundImage:
            "url(https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png@2560w_400h_100q_1o.webp)",
          // backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 0.15)",
          // backgroundPosition: "center",
        }}
      >
        <img
          className="Image large mb-3"
          src="https://tvax2.sinaimg.cn/crop.0.0.406.406.180/9f32c557ly8gt9r8qnu68j20ba0bawfo.jpg?KID=imgbed,tva&Expires=1688105383&ssig=%2FgHiLiSPwX"
          alt="BarrySong"
        />
        <div className="text-white">
          <div className="Text bold text-center text-white">BarrySong4Real</div>
        </div>
        <div className="Text text-white text-xs text-center">
          程序员，个人网站 https://bs4real.netlify.app/
        </div>
      </div>
      <div
        className="pb-1"
        style={{
          display: "flex",
          flexDirection: "column",
          // gap: 15,
        }}
      >
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
