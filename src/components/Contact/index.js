"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState({
    subject: null,
    body: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        id="contact"
        className="relative py-8 sm:py-16 md:py-28 lg:py-32 flex items-top justify-center bg-white sm:items-center sm:pt-0"
      >
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                data-aos="fade-right"
                className="p-6 mr-2 bg-primary sm:rounded-lg"
              >
                <h1 className="text-4xl sm:text-5xl text-gray-800-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 mt-2">
                  Fill in the form to start a conversation
                </p>
                <div className="flex items-center mt-8 text-gray-600"></div>
                <div className="flex items-center mt-4 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +6282340699547
                  </div>
                </div>
                <div className="flex items-center mt-2 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    <a href={`mailto:inyomanjaya555@gmail.com`}>
                      inyomanjaya555@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="p-6 flex flex-col justify-center"
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="message" className="hidden">
                    Message
                  </label>
                  <textarea
                    name="body"
                    placeholder="body"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    defaultValue={""}
                    onChange={handleChange}
                  />
                </div>
                <Link
                  href={`mailto:inyomanjaya555@gmail.com?subject=${encodeURIComponent(
                    email.subject
                  )}&body=${encodeURIComponent(email.body)}`}
                  type="submit"
                  className="md:w-32 text-center bg-secondary hover:bg-opacity-90 active:scale-95 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
