import React, { FC } from "react";
export interface TwitterCardProps {}
const WeiboCard: FC<TwitterCardProps> = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <img
        className="Image large"
        src="https://pbs.twimg.com/profile_images/1635250588224204801/f0qNO2x-_400x400.jpg"
        alt="BarrySong"
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <div>
          <div className="Text bold">BarrySong4Real</div>
        </div>
        <div className="Text">
          程序员，个人网站 https://bs4real.netlify.app/
        </div>
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
