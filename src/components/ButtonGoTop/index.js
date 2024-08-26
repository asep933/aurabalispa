"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "/public/arrow.svg";

const ButtonGoTop = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const x = window.scrollY;
      if (x > 550) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href={"/"}
      className="fixed bottom-32 right-[37px] transition duration-300 ease-in-out"
    >
      {status && (
        <button
          className="-rotate-90 bg-secondary rounded-full hover:animate-pulse
        "
        >
          <Image src={arrow} alt="icon arrow" width={42} />
        </button>
      )}
    </Link>
  );
};

export default ButtonGoTop;
