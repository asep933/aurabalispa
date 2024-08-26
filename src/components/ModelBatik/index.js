import Image from "next/image";
import ModelSatu from "/public/model.jpeg";

const ModelBatik = () => {
  return (
    <div
      className="container mx-auto flex justify-between items-center h-auto w-full py-24 
    px-16 space-x-10 max-[820px]:flex-col max-[820px]:px-4 
    max-[820px]:space-y-16 max-[820px]:pb-16 md:pt-72 lg:py-32"
    >
      <Image
        className="max-[820px]:w-72"
        data-aos="zoom-out"
        src={ModelSatu}
        alt="model image"
        width={350}
      />

      <div className="flex flex-col text-black space-y-6">
        <h2 className="text-4xl font-semibold" data-aos="zoom-in">
          About <span className="text-fourth">Us</span>
        </h2>
        <p data-aos="fade-right">
          Welcome to aurabalispa, a serene retreat where you can rejuvenate your
          mind, body, and spirit. Our expert therapists are dedicated to
          providing personalized treatments designed to restore balance and
          harmony. Experience the art of relaxation in our tranquil environment,
          where every detail is crafted to ensure your comfort and well-being.
          At aurabalispa, your journey to renewal begins.
        </p>
      </div>
    </div>
  );
};

export default ModelBatik;
