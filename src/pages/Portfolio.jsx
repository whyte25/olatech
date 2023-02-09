import React, { useState } from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

//
import portfolio1 from "../assets/portfolio-1.png";
import portfolio2 from "../assets/portfolio-2.png";
import portfolio3 from "../assets/portfolio-3.png";
import work1 from "../assets/work-1.png";
import work2 from "../assets/work-2.png";
import work3 from "../assets/work-3.png";
import work4 from "../assets/work-4.png";
import work5 from "../assets/work-5.png";
import work6 from "../assets/work-6.png";
import portfolio4 from "../assets/portfolio-4.png";
import portfolio5 from "../assets/portfolio-5.png";
import portfolio6 from "../assets/portfolio-6.png";
import portfolio7 from "../assets/portfolio-7.png";
import portfolio8 from "../assets/portfolio-8.png";
import svg from "../assets/Element.svg";

const works = [
  {
    id: 1,
    img: portfolio1,
  },
  {
    id: 2,
    img: portfolio2,
  },
  {
    id: 3,
    img: portfolio3,
  },
  {
    id: 4,
    img: work1,
  },
  {
    id: 5,
    img: work2,
  },
  {
    id: 6,
    img: work3,
  },
  {
    id: 7,
    img: work4,
  },
  {
    id: 8,
    img: work5,
  },
  {
    id: 9,
    img: work6,
  },
];

export default function Portfolio() {
  const [noOfElement, setNoOfElement] = useState(4);

  const spliceWorks = works.slice(0, noOfElement);

  const handleClick = () => {
    setNoOfElement(noOfElement + 2);
  };

  return (
    <section className="bg-gray-100">
      <header className="portfolio-wrapper w-full pt-10 flex flex-col items-center">
        <Navbar />
        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
          className="border-[8px] w-[750px] md:w-3/4 mx-auto mt-20 mb-20  text-white border-white text-center"
        >
          <h4 className="text-sm font-medium mt-6">WE PROVIDE SOLUTIONS BY</h4>
          <h1 className="text-6xl md:text-4xl mx-auto mt-10 mb-16 font-semibold  md:my-10 sm:hidden">
            FABRICATING MACHINES TO MEET YOUR NEEDS.
          </h1>
          <h1 className="hidden  mx-auto mt-10 mb-16 font-semibold  md:my-10 sm:block text-3xl">
            FABRICATING MACHINES TO MEET YOUR NEEDS.
          </h1>
        </div>

        <a
          href="https://wa.me/2347060404706?text=Hello,%20thanks%20for%20visiting%20Ola%20Tech.%20What%20can%20we%20do%20for%20you?"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange py-4 px-6 rounded-2xl  bg-white capitalize  lg:mt-30  my-14  hover:opacity-70 animate-pulse"
        >
          {" "}
          Message Now
        </a>
      </header>

      {/*  */}
      <div className="w-5/6  mx-auto" id="portfolio">
        <h3
          data-aos="slide-up"
          className="text-4xl sm:text-2xl font-mont portfolio-title sm:text-center  my-16 text-grey"
        >
          Quality Products You Will Get From Us!
        </h3>
        <div data-aos="slide-up" className="">
          <small className="text-grey font-bold text-[11px]">PORTFOLIO</small>
          <h3 className="text-3xl mb-10 text-tomatoOrange">RECENT WORK</h3>
        </div>
        <div className="w-full mx-auto mb-16 grid grid-cols-3 md:grid-cols-2 grid-rows-4 gap-4 sm:hidden sm:space-y-6">
          {works.map((item) => {
            const { id, img } = item;
            return (
              <img
                data-aos="slide-up"
                key={id}
                className="first:col-span-2 first:row-span-2 w-full object-contai "
                src={img}
                alt=""
              />
            );
          })}
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="w-4/5 hidden  mx-auto my-12 sm:block sm:space-y-6">
        {spliceWorks.map((item) => {
          const { id, img } = item;
          return (
            <img
              data-aos="slide-up"
              key={id}
              className="first:col-span-2 first:row-span-2 w-full object-cover "
              src={img}
              alt=""
              loading="lazy"
            />
          );
        })}
      </div>
      {noOfElement < works.length && (
        <button
          data-aos="slide-up"
          onClick={() => handleClick()}
          className="capitalize px-4 py-2 bg-orange rounded-full text-white sm:block mx-auto w-2/4 hidden text-center"
        >
          load more
        </button>
      )}

      <section className="">
        <div className="w-5/6 mx-auto space-y-4 my-16">
          {/*  */}
          <div className="flex justify-between items-center  sm:justify-center">
            <div data-aos="slide-up" className="">
              <small className="text-grey font-bold text-[11px]">
                PORTFOLIO
              </small>
              <h3 className="text-3xl text-tomatoOrange">MACHINE TESTING</h3>
            </div>

            <img src={svg} alt="" className="sm:hidden animate-bounce" />
          </div>
          <div className=" grid  grid-cols-4 gap-4 sm:block sm:space-y-6">
            <img
              data-aos="slide-up"
              className="col-span-2"
              src={portfolio4}
              alt=""
            />
            <img
              data-aos="slide-up"
              className="col-span-2"
              src={portfolio5}
              alt=""
            />
          </div>
          <div className=" grid  grid-cols-3 sm:block sm:space-y-6   gap-4">
            <img data-aos="slide-up" src={portfolio6} alt="" />
            <img data-aos="slide-up" src={portfolio7} alt="" />
            <img data-aos="slide-up" src={portfolio8} alt="" />
          </div>
        </div>
      </section>
      <Form />
    </section>
  );
}
