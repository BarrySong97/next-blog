import React, { FC } from "react";
export interface SheetProps {
  children: React.ReactNode;
}
const Sheet: FC<SheetProps> = ({ children }) => {
  return (
    <div className="drop-shadow-xl bg-white m-12 w-full rounded-md">
      {children}
    </div>
  );
};

export default Sheet;
