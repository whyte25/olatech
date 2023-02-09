import React, { useEffect, useState } from "react";
import logo from "../assets/Olatech-Logo.svg";
import mail from "../assets/mail.svg";
import telephone from "../assets/phone-call.svg";
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 153) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  return (
    <>
      <nav className="w-5/6 md:w-4/5 sm:w-full mx-auto ">
        <div className="flex items-center justify-between pr-10 md:pr-0">
          <Link to="/">
            <img src={logo} alt="" data-aos="slide-right" />
          </Link>

          <div
            className="flex space-x-4 md:hidden text-white "
            data-aos="slide-left"
          >
            <div className="flex items-center">
              <img src={telephone} alt="" className="h-10" />
              <div className="mx-2">
                <p className="">CALL US</p>
                <a href="tel:+2347060404706">+234 7060404706</a>
              </div>
            </div>
            <div className="flex items-center">
              <img src={mail} alt="" className="h-10" />
              <div className="mx-2">
                <p className="">EMAIL US</p>
                <a href="mailto:olatechengine@gmail.com">
                  olatechengine@gmail.com
                </a>
              </div>
            </div>
          </div>

          <button
            // data-aos="slide-left"
            onClick={() => setIsOpen(!isOpen)}
            className={
              isOpen
                ? "z-40 md:fixed right-11 open hamburger hamburger focus:outline-none"
                : "z-40 md:block hidden hamburger focus:outline-none"
            }
          >
            <span className="hamburger-one"></span>
            <span className="hamburger-two"></span>
            <span className="hamburger-three"></span>
          </button>
        </div>
        <div
          className={`md:hidden bg-white h-16 mt-7 rounded-md flex justify-between text-grey text-xl items-center ${
            scroll
              ? "fixed z-50 shadow-lg  w-5/6 md:hidden  top-0 bottom-0 mt-0"
              : ""
          }`}
        >
          <ul className="flex space-x-8 uppercase text-[16px] font-medium overflow-hidden   pl-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-orange" : "")}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-orange " : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "text-orange  " : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "text-orange  " : undefined
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-orange  " : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center h-full">
            <div className="group h-full">
              <a
                href="https://www.facebook.com/Olatechfab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group-hover:bg-orange duration-200 border-l-[1px] h-full border-l-gray-200 py-2 px-4"
              >
                <FiFacebook className="group-hover:text-white text-xl" />
              </a>
            </div>
            <div className="group h-full">
              <a
                href="https://www.instagram.com/olatechfab?r=nametag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  duration-200 group-hover:bg-orange border-l-[1px] h-full border-l-gray-200 py-2 px-4"
              >
                <FiInstagram
                  className="group-hover:text-white text-xl"
                  alt=""
                />
              </a>
            </div>
            <div className="group h-full">
              <a
                href="https://youtube.com/channel/UCZ_EZwjCTrRxPOpCu6vsdlw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center duration-200 group-hover:bg-orange border-l-[1px] h-full border-l-gray-200 py-2 px-4"
              >
                <FiYoutube className="group-hover:text-white text-xl" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="menu"
        className={
          isOpen
            ? "fixed z-30 top-0 bottom-0 left-0  flex-col hidden md:flex self-end w-full min-h-screen py-1 pt-36 pl-12 space-y-3 text-lg text-white uppercase bg-black/80 backdrop-blur-sm"
            : "hidden"
        }
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange" : "text-white"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-orange" : "text-white"
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-orange" : "text-white"
          }
        >
          SERVICES
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "text-orange" : "text-white"
          }
        >
          PORTFOLIO
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-orange" : "text-white"
          }
        >
          CONTACT
        </NavLink>
      </div>
    </>
  );
}
