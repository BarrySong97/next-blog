import React, { FC } from "react";
export interface SheetProps {
  children: React.ReactNode;
}
const Sheet: FC<SheetProps> = ({ children }) => {
  return (
    <div className="shadow-xl bg-white my-12 mt-16 mx-6  w-full rounded-md p-0 prose">
      {children}
    </div>
  );
};

export default Sheet;
