"use client";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Layanan from "@/components/Layanan";
import Produk from "@/components/Produk";

const Page = () => {
  return (
    <main className="bg-transparent overflow-auto">
      <Hero />
      <Layanan />
      <Produk />
      <Contact />
    </main>
  );
};

export default Page;
