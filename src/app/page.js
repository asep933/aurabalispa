"use client";

import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Layanan from "@/components/Layanan";

const Page = () => {
  return (
    <main className="bg-transparent overflow-auto">
      <Hero />
      <Layanan />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Page;
