import Image from "next/image";
import buttonWhatsApp from "/public/whatsapp.svg";
import Link from "next/link";

const ButtonWhatsApp = () => {
  return (
    <Link
      href={"https://wa.me/6285333707305"}
      target="_blank"
      className="fixed bottom-16 right-8 hover:scale-110 transition*
    duration-300 ease-in-out"
    >
      <figure>
        <Image src={buttonWhatsApp} alt="image whats app" width={50} />
      </figure>
    </Link>
  );
};

export default ButtonWhatsApp;
