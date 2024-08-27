"use client";

import { GALLERIES } from "@/lib/galleries";
import Aos from "aos";
import Image from "next/image";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [image, setImage] = useState(GALLERIES);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="container mx-auto space-y-8 py-16">
      <h1
        data-aos="fade-left"
        id="service"
        className="text-4xl text-center w-full font-bold"
      >
        Gallery
      </h1>

      <div
        data-aos="zoom-in"
        className="columns-1 md:columns-2 xl:columns-3 gap-7 "
      >
        {image?.map((item) => (
          <div className="break-inside-avoid mb-8">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={item.image}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
