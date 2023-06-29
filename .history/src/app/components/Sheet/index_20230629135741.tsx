import React, { FC } from "react";
export interface SheetProps {
  children: React.ReactNode;
}
const Sheet: FC<SheetProps> = ({ children }) => {
  return <div className="drop-shadow-xl bg-white m-24">{children}</div>;
};

export default Sheet;
