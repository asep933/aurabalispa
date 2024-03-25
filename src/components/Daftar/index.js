"use client";

import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Daftar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gradient-to-br from-black to-primary">
      <div className="hero min-h-screen pt-24 pb-16 bg-[url('/batik-motif.png')] bg-contain">
        <div className="hero-content flex-col">
          <h1 className="text-4xl font-medium text-fourth mb-6 mt-6">Daftar</h1>
          <div
            className="card shrink-0 w-full max-w-sm shadow-2xl bg-fourth"
            data-aos="flip-left"
          >
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered bg-transparent"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered bg-transparent"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">No Handphone</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered bg-transparent"
                  required
                />
                <label className="label">
                  <p className="label-text-alt">
                    Sudah punya akun?{" "}
                    <Link className="hover:text-third" href={"/loginPage"}>
                      Login
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  className="text-fourth bg-third transition ease-out duration-300 
                  hover:bg-opacity-80 p-2 hover:animate-pulse"
                >
                  Daftar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
