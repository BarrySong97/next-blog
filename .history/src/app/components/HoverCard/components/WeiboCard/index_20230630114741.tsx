import React, { FC } from "react";
export interface TwitterCardProps {}
const WeiboCard: FC<TwitterCardProps> = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <div
        className="p-6  w-full flex  flex-col justify-center items-center"
        style={{
          height: 160,

          backgroundImage:
            "url(https://ww1.sinaimg.cn/mw690/549d0121tw1egm1kjly3jj20hs0hsq4f.jpg)",
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
        className="p-2"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <div style={{ display: "flex", gap: 15 }}>
          <div style={{ display: "flex", gap: 5 }}>
            <div className="Text bold">192</div>
            <div className="Text faded">关注</div>
          </div>
          <div className="pointer-events-none  hidden h-full w-px bg-stone-200/70  md:block"></div>
          <div style={{ display: "flex", gap: 5 }}>
            <div className="Text bold">96</div>
            <div className="Text faded">粉丝</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeiboCard;
