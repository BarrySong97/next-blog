import React, { FC } from "react";
export interface ErrorProps {}
const PostLoading: FC<ErrorProps> = () => {
  return (
    <div className="w-full rounded-md px-3 pb-4 sm:p-4 sm:px-6 sm:pt-0 md:max-w-2xl sm:max-w-none relative  flex-col  md:mt-0 md:flex-row  md:mx-auto lg:max-w-3xl xl:max-w-3xl 2xl:max-w-6xl ">
      <div className="absolute flex justify-center items-center left-0 top-0 bottom-0 right-0 h-[300px]">
        <div className="flex items-center justify-center w-56 h-56  absolute   ">
          <div className="px-3 py-1 text-xs font-medium leading-none text-center text-white bg-primary rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
            正在从天启星拉取数据...
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLoading;
