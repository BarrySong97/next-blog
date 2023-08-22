"use client"
import React, { useState, useEffect } from "react";

interface ScrollProgressBarProps {
  // props here
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / height) * 100;

      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);
  return (
    <div className="progress-bar will-change-auto bg-[#6941c6] h-[4px]  top-[60px] md:top-[70px] z-50 fixed w-full left-0 " style={{ width: `${scrollProgress}%` }} />
  );
};

export default ScrollProgressBar;
