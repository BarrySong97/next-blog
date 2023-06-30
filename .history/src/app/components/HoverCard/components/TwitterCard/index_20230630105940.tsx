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
          <div className="Text bold">Radix</div>
          <div className="Text faded">@radix_ui</div>
        </div>
        <div className="Text">
          Components, icons, colors, and templates for building high-quality,
          accessible UI. Free and open-source.
        </div>
        <div style={{ display: "flex", gap: 15 }}>
          <div style={{ display: "flex", gap: 5 }}>
            <div className="Text bold">0</div>{" "}
            <div className="Text faded">Following</div>
          </div>
          <div style={{ display: "flex", gap: 5 }}>
            <div className="Text bold">2,900</div>{" "}
            <div className="Text faded">Followers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterCard;
