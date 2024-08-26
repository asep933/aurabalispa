"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "/public/logo.jpg";
import ProgresBar from "@/components/Progres";
import useHash from "@/lib/useHash";

const NavbarComponent = () => {
  const [jasa, setJasa] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [animation, setAnimation] = useState({
    beranda: false,
    produk: false,
    layanan: false,
    kontak: false,
  });
  const [humberger, setHumberger] = useState(false);
  const hash = useHash();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsFixed(!0);
      } else {
        setIsFixed(!1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (jasa) setAnimation({ layanan: true });
    if (!jasa) setAnimation({ layanan: false });
  }, [jasa]);

  useEffect(() => {
    switch (hash) {
      case "":
        return setAnimation({ beranda: true });
      case "#service":
        return setAnimation({ produk: true });
      case "#contact":
        return setAnimation({ kontak: true });
    }
  }, [hash]);

  return (
    <>
      <div
        className={`${
          isFixed ? "fixed" : "relative"
        } w-full h-auto z-50 m-0 p-0`}
      >
        <ProgresBar />

        <div className="bg-primary shadow-sm bg-opacity-80 backdrop-blur-sm text-black flex justify-around font-medium items-center">
          <div className="text-3xl">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="image logo"
                className={`w-24 max-[820px]:w-20`}
              />
            </Link>
          </div>

          <div className="flex gap-x-8 mb-0 text-base mobile-menu">
            <div
              onMouseLeave={() => setAnimation({ beranda: false })}
              onMouseEnter={() => setAnimation({ beranda: true })}
            >
              <Link href={"/"}>Beranda</Link>
              <div
                className={`p-[2px] bg-fourth transition duration-300 ease-in-out ${
                  animation.beranda ? "w-full" : "w-0"
                } ${animation.beranda ? "opacity-100" : "opacity-0"}`}
              ></div>
            </div>
            <div
              onMouseLeave={() => setAnimation({ produk: false })}
              onMouseEnter={() => setAnimation({ produk: true })}
            >
              <Link href={"#service"}>Gallery </Link>
              <div
                className={`p-[2px] bg-fourth transition duration-300 ease-in-out ${
                  animation.produk ? "w-full" : "w-0"
                } ${animation.produk ? "opacity-100" : "opacity-0"}`}
              ></div>
            </div>
            <div
              onMouseOver={() => setJasa((value) => (value = true))}
              onMouseEnter={() => setAnimation({ layanan: true })}
            >
              <Link href={""}>
                Services <span>↓</span>
                <div
                  className={`p-[2px] bg-fourth transition duration-300 ease-in-out ${
                    animation.layanan ? "w-full" : "w-0"
                  } ${animation.layanan ? "opacity-100" : "opacity-0"}`}
                ></div>
              </Link>
            </div>
            <div
              onMouseLeave={() => setAnimation({ kontak: false })}
              onMouseEnter={() => setAnimation({ kontak: true })}
            >
              <Link href={"#contact"}>Contact</Link>
              <div
                className={`p-[2px] bg-fourth transition duration-300 ease-in-out ${
                  animation.kontak ? "w-full" : "w-0"
                } ${animation.kontak ? "opacity-100" : "opacity-0"}`}
              ></div>
            </div>
          </div>

          <Humberger humberger={humberger} setHumberger={setHumberger} />
        </div>

        {jasa && <MenuJasa setJasa={setJasa} jasa={jasa} />}
      </div>

      {humberger && (
        <div>
          <MenuMobile
            animation={animation}
            setAnimation={setAnimation}
            setJasa={setJasa}
            humberger={humberger}
            setHumberger={setHumberger}
          />
        </div>
      )}
    </>
  );
};

// humberger
const Humberger = ({ humberger, setHumberger }) => {
  return (
    <div className="hidden max-[820px]:block">
      <label className={`btn btn-circle mr-6 dark:bg-primary`}>
        <input
          type="checkbox"
          onClick={() => setHumberger(!humberger)}
          className="hidden"
        />

        {/* hamburger icon */}
        <svg
          className="swap-off fill-current dark:fill-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
      </label>
    </div>
  );
};

// menu mobile
const MenuMobile = ({ humberger, setHumberger }) => {
  const [layananMobile, setLayananMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflow = humberger ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [humberger]);

  return (
    <div
      className="flex flex-col gap-x-8 mb-0 fixed topx-2 pt-24 h-screen
    text-lg bg-primary w-full z-20 text-pria items-center gap-y-4 text-black"
    >
      <Link
        onClick={() => setHumberger(!humberger)}
        className="hover:bg-white hover:text-black w-full px-2 py-2 text-center"
        href={"/"}
      >
        Beranda
      </Link>

      <Link
        onClick={() => setHumberger(!humberger)}
        className="hover:bg-white hover:text-black w-full px-2 py-2 text-center"
        href={"#service"}
      >
        Gallery{" "}
      </Link>

      <div
        onClick={() => setLayananMobile(!layananMobile)}
        onMouseLeave={() => setLayananMobile(false)}
        onMouseEnter={() => setLayananMobile(true)}
      >
        <Link href={""}>
          Services <span>↓</span>
        </Link>
        {layananMobile && (
          <div className="flex flex-col pl-4 pt-2 lg:hidden">
            <Link
              className="hover:bg-white hover:text-black"
              href={"#customs"}
              onClick={() => setHumberger(!humberger)}
            >
              balinese masas
            </Link>
            <Link
              className="hover:bg-white hover:text-black"
              href={"#customs"}
              onClick={() => setHumberger(!humberger)}
            >
              aromatherapy
            </Link>
            <Link
              className="hover:bg-white hover:text-black"
              href={"#customs"}
              onClick={() => setHumberger(!humberger)}
            >
              hot stone massage
            </Link>
            <Link
              className="hover:bg-white hover:text-black"
              href={"#customs"}
              onClick={() => setHumberger(!humberger)}
            >
              refleksi
            </Link>
            <Link
              className="hover:bg-white hover:text-black"
              href={"#customs"}
              onClick={() => setHumberger(!humberger)}
            >
              foot scrub
            </Link>
            <Link
              className="hover:bg-white hover:text-black"
              href={"#customs"}
              onClick={() => setHumberger(!humberger)}
            >
              medical massage
            </Link>
            <Link
              className="hover:bg-white hover:text-black"
              href={"#customs"}
              onClick={() => setHumberger(!humberger)}
            >
              deep tissue
            </Link>
            <Link
              className="hover:bg-white hover:text-black"
              href={"#customs"}
              onClick={() => setHumberger(!humberger)}
            >
              bamboo massage
            </Link>
            <Link
              className="hover:bg-white hover:text-black"
              href={"#customs"}
              onClick={() => setHumberger(!humberger)}
            >
              facial
            </Link>
          </div>
        )}
      </div>

      <Link
        onClick={() => setHumberger(!humberger)}
        className="hover:bg-white hover:text-black w-full px-2 py-2 text-center"
        href={"#contact"}
      >
        Contact
      </Link>
    </div>
  );
};

const MenuJasa = ({ setJasa, jasa }) => {
  const handleHref = (id) => {
    setJasa(!jasa);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onMouseLeave={() => setJasa(false)}
      onMouseEnter={() => setJasa(true)}
      className="absolute bg-secondary capitalize text-primary w-full lg:flex justify-center gap-x-3 hidden"
    >
      <Link
        onClick={() => handleHref("customs")}
        className="hover:bg-white hover:text-black transition duration-300 ease-in-out px-2 py-2"
        href={"#customs"}
      >
        balinese massage
      </Link>
      <Link
        onClick={() => handleHref("customs")}
        className="hover:bg-white hover:text-black transition duration-300 ease-in-out px-2 py-2"
        href={"#customs"}
      >
        aromatherapy
      </Link>
      <Link
        onClick={() => handleHref("customs")}
        className="hover:bg-white hover:text-black transition duration-300 ease-in-out px-2 py-2"
        href={"#customs"}
      >
        hot stone massage
      </Link>
      <Link
        onClick={() => handleHref("customs")}
        className="hover:bg-white hover:text-black transition duration-300 ease-in-out px-2 py-2"
        href={"#customs"}
      >
        refleksi
      </Link>
      <Link
        onClick={() => handleHref("customs")}
        className="hover:bg-white hover:text-black transition duration-300 ease-in-out px-2 py-2"
        href={"#customs"}
      >
        foot scrub
      </Link>
      <Link
        onClick={() => handleHref("customs")}
        className="hover:bg-white hover:text-black transition duration-300 ease-in-out px-2 py-2"
        href={"#customs"}
      >
        body scrub
      </Link>
      <Link
        onClick={() => handleHref("customs")}
        className="hover:bg-white hover:text-black transition duration-300 ease-in-out px-2 py-2"
        href={"#customs"}
      >
        medical massage
      </Link>
      <Link
        onClick={() => handleHref("customs")}
        className="hover:bg-white hover:text-black transition duration-300 ease-in-out px-2 py-2"
        href={"#customs"}
      >
        deep tissue
      </Link>
      <Link
        onClick={() => handleHref("customs")}
        className="hover:bg-white hover:text-black transition duration-300 ease-in-out px-2 py-2"
        href={"#customs"}
      >
        bamboo massage
      </Link>
      <Link
        onClick={() => handleHref("customs")}
        className="hover:bg-white hover:text-black transition duration-300 ease-in-out px-2 py-2"
        href={"#customs"}
      >
        facial
      </Link>
    </div>
  );
};

export default NavbarComponent;
