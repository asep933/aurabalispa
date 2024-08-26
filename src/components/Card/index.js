"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { GALLERIES } from "@/lib/galleries.js";

const Card = () => {
  const [galleries, setGalleries] = useState(GALLERIES);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex justify-center drop-shadow-md" data-aos="zoom-in">
      <CarouselProduct galleries={galleries} />
    </div>
  );
};

const CarouselProduct = ({ galleries }) => {
  return (
    <div className="w-full px-52 max-[820px]:px-0">
      <div className="carousel carousel-end rounded-box min-w-full flex">
        {galleries?.map((gallery, index) => (
          <div key={index} className="carousel-item">
            <Image
              className="object-cover"
              src={gallery.image}
              alt={gallery.title}
              width={250}
              height={250}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
