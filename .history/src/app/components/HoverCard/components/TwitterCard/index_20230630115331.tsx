import React, { FC } from "react";
export interface TwitterCardProps {}
const TwitterCard: FC<TwitterCardProps> = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <img
        className="absolute top-0 left-0 object-cover"
        src="https://pbs.twimg.com/profile_banners/2343262210/1592558908/600x200"
        height={250}
      ></img>
      <div
        className="z-30 pt-16"
        style={{ display: "flex", flexDirection: "column", gap: 15 }}
      >
        <img
          className="Image large z-30"
          src="https://pbs.twimg.com/profile_images/1635250588224204801/f0qNO2x-_400x400.jpg"
          alt="BarrySong"
        />
        <div>
          <div className="Text bold">BarrySong4Real</div>
          <div className="Text faded">@BarrySong97</div>
        </div>
        <div className="Text">web developer</div>
        <div style={{ display: "flex", gap: 15 }}>
          <div style={{ display: "flex", gap: 5 }}>
            <div className="Text bold">119</div>
            <div className="Text faded">Following</div>
          </div>
          <div style={{ display: "flex", gap: 5 }}>
            <div className="Text bold">29</div>
            <div className="Text faded">Followers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterCard;
