"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ModelBatik from "../ModelBatik";
import HeroSecond from "../HeroSecond";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative h-auto max-[820px]:h-auto bg-white">
      <div className="">
        <HeroSecond />
        <ModelBatik />
      </div>
    </div>
  );
};

export default Hero;
