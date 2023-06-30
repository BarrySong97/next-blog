import React, { FC } from "react";
export interface TwitterCardProps {}
const WeiboCard: FC<TwitterCardProps> = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <div
        className="p-6 w-full flex  flex-col justify-center items-center"
        style={{
          height: 160,

          width: 334,
          backgroundImage:
            "url(https://ww1.sinaimg.cn/mw690/549d0121tw1egm1kjly3jj20hs0hsq4f.jpg)",
          // backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 0.15)",
          // backgroundPosition: "center",
        }}
      >
        <img
          className="Image large"
          src="https://pbs.twimg.com/profile_images/1635250588224204801/f0qNO2x-_400x400.jpg"
          alt="BarrySong"
        />
        <div className="text-white">
          <div className="Text bold text-center text-white">BarrySong4Real</div>
        </div>
        <div className="Text text-white text-center">
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
