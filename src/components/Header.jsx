import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="heading  w-full pt-10 flex flex-col items-center">
      <Navbar />
      <div
        data-aos="zoom-in"
        data-aos-delay="1000"
        className="border-[8px] w-[750px] md:w-3/4  mx-auto mt-20 mb-20  text-white border-white text-center  "
      >
        <h4 className="text-sm  font-medium mt-6 ">STANDARDIZED</h4>
        <h1 className="text-6xl md:text-4xl mx-auto mt-10 mb-16 font-semibold  md:my-10 sm:hidden">
          METAL FABRICATION & INSTALLATION
        </h1>
        <h1 className="hidden mx-auto mt-10 mb-16 font-semibold  md:my-10 sm:block text-3xl">
          METAL FABRICATION & INSTALLATION
        </h1>
      </div>
      <a
        href="#hero"
        className="text-orange py-4 px-6 rounded-2xl  bg-white capitalize  lg:mt-30  my-14  hover:opacity-70 animate-pulse"
      >
        welcome! take a look around
      </a>
    </header>
  );
}
