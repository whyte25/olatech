import React from "react";
import Navbar from "../components/Navbar";

import svg from "../assets/Element.svg";
import dot1 from "../assets/svg-1.svg";
import dot2 from "../assets/svg-2.svg";
import dot3 from "../assets/svg-3.svg";
import dotOrange from "../assets/dot-one.svg";
import dotgrey from "../assets/dot-two.svg";
import img1 from "../assets/about-1.png";
import img2 from "../assets/about-2.png";
import orange from "../assets/orange.svg";
import pink from "../assets/pink.svg";
import lightBlue from "../assets/light-blue.svg";

export default function About() {
  return (
    <div className="bg-gray-100">
      <header className="about-wrapper  w-full pt-10 flex flex-col items-center">
        <Navbar />
        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
          className="border-[8px] w-[750px]  md:w-3/4 mx-auto mt-20 mb-20  text-white border-white text-center  "
        >
          <h4 className="text-sm font-medium mt-6 ">MACHINE FABRICATION FOR</h4>
          <h1 className="text-6xl md:text-4xl mx-auto mt-10 mb-16 font-semibold  md:my-10 sm:hidden">
            ENHANCED HUMAN PERFORMANCE
          </h1>
          <h1 className="hidden mx-auto mt-10 mb-16 font-semibold  md:my-10 sm:block text-3xl">
            ENHANCED HUMAN PERFORMANCE
          </h1>
        </div>
        <a
          href="#story"
          className="text-orange py-4 px-6 rounded-2xl  bg-white capitalize  lg:mt-30  my-14  hover:opacity-70 animate-pulse"
        >
          Message Now
        </a>
      </header>

      <div
        className=" w-5/6 lg:w-[90%] grid grid-cols-2 md:grid-cols-1 mx-auto py-16 gap-y-20 gap-x-6"
        id="story"
      >
        <div className="w-5/6  lg:w-full">
          <h3 data-aos="slide-up" className="text-tomatoOrange text-xl ">
            OUR STORY
          </h3>
          <p data-aos="slide-up" className="mb-16  font-bold">
            More like a dream it was to our founder back then, to build the
            strongest locally made metal fabrication services in the state which
            eventually metamorphosed into something bigger and getting better by
            the day.{" "}
          </p>
          <div data-aos="slide-up" className="flex relative">
            <img src={svg} alt="" className="animate-bounce" />
            <img
              src={dotOrange}
              alt=""
              className="absolute top-[-3rem]  right-40 animate-bounce"
            />
            <img
              src={dotgrey}
              alt=""
              className="absolute top-[-2rem] right-0 animate-bounce"
            />
            <p className="px-6 text-sm sm:pr-1">
              We decided to use our creativity in solving daily human challenges
              in the area of creating machines that enhances human performance
              in the community.
            </p>
          </div>
        </div>
        <div className="space-y-8 ">
          <div data-aos="slide-up" className="flex  space-x-6 sm:space-x-2 ">
            <p className="font-medium mt-[6px] sm:mt-[2px]">01.</p>
            <div>
              <div>
                <h3 className="font-bold text-2xl sm:text-xl mb-2">
                  12 years of machine fabrication
                </h3>
                <p className="text-sm mb-1">
                  Machines like stationary concrete, block making machines,
                </p>{" "}
                <p className="text-sm">
                  egg laying machines, block molding machines
                </p>
              </div>
            </div>
          </div>
          <div data-aos="slide-up" className="flex  space-x-6 sm:space-x-2">
            <p className="font-medium mt-[6px] sm:mt-[2px]">02.</p>
            <div>
              <div>
                <h3 className="font-bold text-2xl sm:text-xl mb-2">
                  Tested & Trusted In Quality Delivery
                </h3>
                <p className="text-sm mb-1">
                  Machines like stationary concrete, block making machines,
                </p>{" "}
                <p className="text-sm">
                  egg laying machines, block molding machines
                </p>
              </div>
            </div>
          </div>
          <div data-aos="slide-up" className="flex  space-x-6 sm:space-x-2">
            <p className="font-medium mt-[6px] sm:mt-[2px]">03.</p>
            <div>
              <div>
                <h3 className="font-bold text-2xl sm:text-xl mb-2">
                  Robust Customer Base
                </h3>
                <p className="text-sm mb-1">
                  Machines like stationary concrete, block making machines,
                </p>{" "}
                <p className="text-sm">
                  egg laying machines, block molding machines
                </p>
              </div>
            </div>
          </div>
          <p
            data-aos="slide-up"
            data-aos-delay="1000"
            className="px-4 lg:px-0"
          ></p>
        </div>
        <div className="my-auto">
          <h3 data-aos="slide-up" className="flex relative">
            <span className="text-4xl font-rubik font-bold mb-6">
              Our Mission
            </span>
            <img
              data-aos="slide-up"
              className="absolute md:left-[15rem]  left-[20rem] animate-bounce duration-[5s] top-[-2rem]"
              src={dot2}
              alt=""
            />
          </h3>
          <p
            data-aos="slide-up"
            className="leading-9 lg:leading-6 font-medium w-5/6 md:w-full"
          >
            Founded on the commitment to engineering excellence, customer-based
            innovation and exceptional product value, Ola-tech Metal Fabrication
            is consistently providing full range fabrication, machining, design
            and finishing services to a wide variety of companies.
          </p>
          <div
            className="flex justify-between w-5/6 sm:w-full mt-6"
            data-aos="slide-up"
          >
            <div className="flex flex-col relative items-center">
              <img src={orange} alt="" className="absolute w-9 right-16" />

              <h3 className="font-bold text-3xl z-10">94%</h3>
              <p className="text-[11px] font-bold">CLIENT RETENTION</p>
            </div>
            <div className="flex flex-col relative items-center">
              <img src={pink} alt="" className="absolute w-9 right-16" />
              <h3 className="font-bold text-3xl z-10">650+</h3>
              <p className="text-[11px] font-bold">MACHINES BUILT</p>
            </div>
            <div className="flex flex-col relative items-center">
              <img src={lightBlue} alt="" className="absolute w-9 right-14" />
              <h3 className="font-bold text-3xl z-10">45+</h3>
              <p className="text-[11px] font-bold">INTERNS TRAINED</p>
            </div>
          </div>
        </div>
        <img data-aos="slide-up" src={img2} alt="" />
        <img data-aos="slide-up" src={img1} className="md:order-last" alt="" />
        <div className="my-auto">
          <h3 data-aos="slide-up" className="flex relative">
            <span className="text-4xl font-bold mb-6">Our Vision</span>
            <img
              className="absolute md:left-[15rem]   left-[20rem] animate-bounce duration-[5s] top-[-2rem]"
              src={dot3}
              alt=""
            />
          </h3>
          <p
            data-aos="slide-up"
            className="leading-9 lg:leading-6 font-medium md:w-full w-[90%]"
          >
            Ola-tech’s vision is to be a force to reckon with in our industry by
            satisfying our esteemed customers with both indelible value and
            unrelenting service, and by constant, unwavering effort to build an
            internal culture of team play, individual respect and regular
            recognition. We know there are many places you can choose to do
            business, but we hope <span className="text-orange">Olatech</span>{" "}
            is your first choice. We want to earn that privilege on every single
            job.
          </p>
        </div>
      </div>
    </div>
  );
}
