import React, { FC } from "react";
export interface SheetProps {}
const Sheet: FC<SheetProps> = () => {
  return <div className="drop-shadow-xl">Hello Sheet</div>;
};

export default Sheet;
