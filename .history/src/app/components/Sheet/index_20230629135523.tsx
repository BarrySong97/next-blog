import React, { FC } from "react";
export interface SheetProps {
  children: React.ReactNode;
}
const Sheet: FC<SheetProps> = ({ children }) => {
  return <div className="drop-shadow-xl">{children}</div>;
};

export default Sheet;
