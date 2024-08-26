"use client";

import { useEffect, useState } from "react";

const ProgresBar = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / trackLength) * 100;
      setValue(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [value]);

  return (
    <progress
      className="progress h-[3px] progress-accent w-full"
      value={value}
      max="100"
    ></progress>
  );
};

export default ProgresBar;
