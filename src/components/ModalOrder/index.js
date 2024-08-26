"use client";

import Link from "next/link";

const ModalOrder = ({ text }) => {
  return (
    <>
      <Link
        target="_blank"
        href={`https://wa.me/6282340699547?text='${text}'`}
        className="bg-transparent hover:text-black text-black border-third hover:border-fourth border-2
        p-3 hover:bg-none rounded-lg transition duration-300 ease-in-out"
      >
        Booking
      </Link>
    </>
  );
};

export default ModalOrder;
