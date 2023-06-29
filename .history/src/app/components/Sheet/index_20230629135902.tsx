import React, { FC } from "react";
export interface SheetProps {
  children: React.ReactNode;
}
const Sheet: FC<SheetProps> = ({ children }) => {
  return (
    <div className="drop-shadow-xl bg-white mx-12 mt-16 w-full rounded-md p-4">
      {children}
    </div>
  );
};

export default Sheet;
