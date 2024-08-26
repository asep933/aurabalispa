"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import ModalOrder from "../ModalOrder";
import { SERVICES } from "@/lib/services.js";

const Layanan = () => {
  const [services, setServices] = useState(SERVICES);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-white pb-20 pt-20 flex flex-col gap-y-4 w-full">
      <h1 className="text-4xl font-semibold text-black pb-12 w-full text-center">
        <span className="text-fourth">Our</span> Treatment
      </h1>
      <div
        id="customs"
        className="w-full h-full flex gap-y-3 justify-center 
    flex-col items-center"
      >
        <div
          className="max-w-full flex justify-center gap-8 px-52 overflow-auto
        max-[820px]:grid-cols-1 max-[820px]:px-4"
        >
          <div
            className="grid grid-cols-2 lg:grid-cols-3 gap-5 capitalize"
            data-aos="fade-right"
          >
            {services?.map((service, index) => (
              <CardLayanan
                key={index}
                batikImage={service.image}
                title={service.title}
                price={service.price}
                buttonModal={
                  <ModalOrder
                    text={`Hello, I would like to book a ${service.title} session at Aura Bali Spa. Please confirm the availability. Thank you!`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CardLayanan = ({ title, price, batikImage, buttonModal }) => {
  return (
    <div className="card min-w-16 bg-second text-black shadow-md">
      <figure className="px-10 pt-10">
        <div className="overflow-hidden h-auto lg:h-44">
          <Image
            src={batikImage}
            alt={title}
            width={500}
            height={300}
            className="rounded-xl object-cover hover:scale-110 transition-all ease-in-out"
          />
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg lg:text-2xl">{title}</h2>
        <p className="text-sm text-gray-800">{price}</p>
        <div className="card-actions">{buttonModal}</div>
      </div>
    </div>
  );
};

export default Layanan;
