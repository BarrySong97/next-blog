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
      <div className="py-1 px-3 flex">
        <img
          className="Image  large mb-3 mr-3"
          src="https://pbs.twimg.com/profile_images/1635250588224204801/f0qNO2x-_400x400.jpg"
          alt="BarrySong"
        />
        <div>
          <div className="text-base font-bold ">BarrySong4Real</div>
          <div
            style={{ display: "flex", gap: 15 }}
            className="items-center justify-center"
          >
            <div style={{ display: "flex", gap: 5 }}>
              <div className="Text bold text-xs">192</div>
              <div className="Text faded text-xs">关注</div>
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              <div className="Text bold text-xs">96</div>
              <div className="Text faded text-xs">粉丝</div>
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              <div className="Text bold text-xs">1259</div>
              <div className="Text faded text-xs">获赞</div>
            </div>
          </div>
        </div>
        <div className="Text text-white text-xs text-center">
          微博@BarrySong4Real
        </div>
      </div>
    </div>
  );
};

export default BilibiliCard;
