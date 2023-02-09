import React from "react";
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import direction from "../assets/direction.svg";
import clock from "../assets/clock.svg";
import star from "../assets/star.svg";
import phone from "../assets/phone-call.svg";
import mail from "../assets/mail.svg";
import img1 from "../assets/footer-1.png";
import img2 from "../assets/footer-2.png";
import img3 from "../assets/footer-3.png";
import img4 from "../assets/footer-4.png";
import ToTop from "./ToTop";

export default function Footer() {
  return (
    <footer className="bg-gray-200 pb-">
      <div className="grid grid-cols-3 justify-items-center md:px-6 md:w-full md:block mt-14 gap-x-12 md:space-y-12 mx-auto w-5/6 lg:w-[90%] ">
        <ToTop />

        <div className="space-y-6 md:pt-4 ">
          <div className="bg-white w-10 mb-20  md:hidden py-2">
            <img src={star} alt="" />
          </div>
          <h3 className="text-tomatoOrange font-mont font-bold text-3xl">
            OLA-TECH
          </h3>
          <p>
            Reach out to us on our social media platforms, We're always
            available for you.
          </p>
          <div className="flex text-orange text-2xl space-x-4">
            <a
              href="https://www.instagram.com/olatechfab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram className="text-[#FF4E01]" />
            </a>
            <a
              href="https://youtube.com/channel/UCZ_EZwjCTrRxPOpCu6vsdlw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiYoutube className="text-[#FF4E01]" />
            </a>
            <a
              href="https://www.facebook.com/Olatechfab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook className="text-[#FF4E01]" />
            </a>
          </div>
        </div>
        <div className="space-y-4 ml-10 lg:ml-0">
          <div className="bg-white  mx-auto w-10 mb-20 md:hidden py-2">
            <img src={star} alt="" />
          </div>
          <h3 className="text-2xl text-tomatoOrange">CONTACT US</h3>
          <div className="flex items-center space-x-4">
            <img src={direction} alt="" />
            <address className="text-sm">
              Shop 3 ECWA Shopping Complex Along Ajase Ipo Rd, AMoyo, Kwara
              State Nigeria.{" "}
            </address>
          </div>
          <div className="flex items-center space-x-4">
            <img src={phone} alt="" className="w-6" />
            <a href="tel:+234 7060404706">+234 7060404706</a>
          </div>
          <div className="flex items-center space-x-4">
            <img src={mail} alt="" className="w-6" />
            <a href="mailto:olatechengine@gmail.com">olatechengine@gmail.com</a>
          </div>
          <div className="flex items-center space-x-4">
            <img src={clock} alt="" className="text-[#FF4E01]" />
            <p>Mon-Fri. 8:00am - 6:00pm.</p>
          </div>
        </div>
        <div className="w-52 space-y-4 ml-auto md:ml-0">
          <div className="bg-white ml-auto w-10 mb-20 md:hidden py-2">
            <img src={star} alt="" />
          </div>
          <h3 className="text-2xl text-tomatoOrange">LATEST POST</h3>
          <div className="grid grid-cols-2 gap-4">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
      <div className="pt-5 bg-white mt-10">
        <p className="text-sm sm:text-[10px]  text-center mb-6">
          DESIGNED BY
          <span className="text-orange "> GORIITE.</span> &copy; COPYRIGHT 2022
          ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
