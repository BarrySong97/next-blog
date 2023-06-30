import React, { FC } from "react";
export interface TwitterCardProps {}
const TwitterCard: FC<TwitterCardProps> = () => {
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
