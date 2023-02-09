import React, { useState } from "react";
import arrow from "../assets/arrow-up.svg";

export default function ToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={`${
        visible
          ? "bg-orange hidden md:fixed bottom-10 right-7 w-10 h-10 rounded-full text-orange md:flex items-center justify-center z-40 outline:hidden"
          : ""
      }`}
      onClick={scrollToTop}
    >
      <img src={arrow} className="red" alt="" />
    </button>
  );
}
