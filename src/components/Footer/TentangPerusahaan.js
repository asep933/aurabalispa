import Image from "next/image";
import Logo from "/public/logo.jpg";

const TentangPerusahaan = () => {
  return (
    <div className="flex flex-col w-full space-y-4 md:w-full lg:w-1/2 max-[820px]:w-full">
      <Image src={Logo} alt="logo batik nasional" width={200} />

      <p>
        Welcome to aurabalispa, a serene retreat where you can rejuvenate your
        mind, body, and spirit. Our expert therapists are dedicated to providing
        personalized treatments designed to restore balance and harmony.
        Experience the art of relaxation in our tranquil environment, where
        every detail is crafted to ensure your comfort and well-being. At
        aurabalispa, your journey to renewal begins.
      </p>
    </div>
  );
};

export default TentangPerusahaan;
