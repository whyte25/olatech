import React, { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import Navbar from "../components/Navbar";
import svg from "../assets/services-icon.svg";
import service1 from "../assets/services-1.png";
import service2 from "../assets/services-2.png";
import service3 from "../assets/services-3.png";
import service4 from "../assets/services-4.png";
import service5 from "../assets/services-5.png";
import service6 from "../assets/services-6.png";
import plus from "../assets/dropdown.svg";
import dot from "../assets/dot.svg";
import Form from "../components/Form";
import { useRef } from "react";

const images = [
  {
    id: 1,
    img: service1,
    title: "ELECTRIC EGG LAYING  BLOCK MAKER",
    desc: "Electrically powered concrete block moulding machine. It produces four 6’ and three 9’ block respectively.",
    l1: "Easy to move from site to site",
    l2: "Egg laying type that doesnt require the use of pallet",
    l3: "It saves producton time, energy & cost.",
    l4: " Requires a very low electrical current and can be powered by 5kva generator",
    open: "read more",
  },
  {
    id: 2,
    img: service2,
    title: "  PADDY THRESHER",
    desc: "This new design of thresher is capable of handling other crops like peas, soya beans, wheat, and other small grains and seed crops.",
    l1: "Thresh & seive the straws",
    l2: "It doesn’t break grain",
    l3: "Easy to maintain",
    l4: "Easy to operate",
    l5: "Blows away all the chaff so at the end of the operation, only the grain will be left in the bucket.",
    open: "read more",
  },
  {
    id: 3,
    img: service3,
    title: "SUPER BMM 209 MACHINE",
    desc: "Electric concrete block making machine. powered by 1.5kva Generator Best of it kind, with a very high productivity.",
    l1: "Easy to move from site to site",
    l2: "Egg laying type that doesnt require the use of pallet",
    l3: "It saves producton time, energy & cost.",
    l4: " Requires a very low electrical current and can be powered by 5kva generator",
    open: "read more",
  },
  {
    id: 4,
    img: service4,
    title: "RICE THRESHER",
    desc: "Our multipurpose threshing machine is capacited to thresh 50-60bags per day with the ability to thresh and sieve the straws.",

    l1: "Easy to move from site to site",
    l2: "Egg laying type that doesnt require the use of pallet",
    l3: "It saves producton time, energy & cost.",
    l4: " Requires a very low electrical current and can be powered by 5kva generator",
    open: "read more",
  },
  {
    id: 5,
    img: service5,
    title: "SAND MIXING MACHINE",
    desc: "Sand mixer machine is used to mix sand and cement of desired ratio together, in order to achieve a proper mixture",
    l1: "Easy to maintain",
    l2: "Easy to operate",
    l3: "Boosts productivity and efficiency.",
    l4: "Easy to move from site to site",
    open: "read more",
  },
  {
    id: 6,
    img: service6,
    title: "CONCRETE BLOCK MAKING MACHINE",
    desc: "Electrically powered concrete block moulding machine. It produces four 6’ and three 9’ block respectively.",
    l1: "Easy to move from site to site",
    l2: "Egg laying type that doesnt require the use of pallet",
    l3: "It saves producton time, energy & cost",
    l4: "Requires a very low electrical current and can be powered by 5kva generator",
    open: "read more",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(false);
  const dropdownRef = useRef();

  const handleClick = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSelected(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <header className="service-wrapper  w-full pt-10 flex flex-col items-center">
        <Navbar />
        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
          className="border-[8px] w-[750px] md:w-3/4 mx-auto mt-20 mb-20  text-white border-white text-center  "
        >
          <h4 className="text-sm font-medium mt-6 sm:text-sm">OUR TEAM IS</h4>
          <h1 className="text-6xl md:text-4xl mx-auto  mt-10 mb-16 font-semibold  md:my-10 sm:hidden">
            CREATIVE, INNOVATIVE & PRODUCTIVE
          </h1>
          <h1 className="hidden mx-auto  mt-10 mb-16 font-semibold leading-10 sm:block text-3xl">
            CREATIVE, INNOVATIVE & PRODUCTIVE
          </h1>
        </div>
        <a
          href="#service"
          className="text-orange py-4 px-6 rounded-2xl  bg-white capitalize  lg:mt-30  my-14  hover:opacity-70 animate-pulse"
        >
          GET FAMILIAR
        </a>
      </header>

      <section className="bg-gray-100 pb-20 " id="service">
        <div className=" flex items-center ">
          <img
            data-aos="slide-up"
            data-aos-delay="1000"
            src={svg}
            alt=""
            className="-mt-24 md:hidden first-line: w-2/4 ml-24"
          />
          <div
            data-aos="slide-up"
            className="w-1/4 md:my-10 space-y-2 md:w-3/4 md:mx-auto"
          >
            <div className="py-4  sm:w-full border-b-2 border-b-gray-300">
              <small className="font-bold">SERVICES</small>
              <h3 className="text-tomatoOrange text-3xl">What we Do</h3>
              <p className="text-gray-400 text-sm">
                Strong work ethics which guarantees excellence
              </p>
            </div>
            <div className="w-full flex flex-row py-4 border-b-2 border-b-gray-300">
              <div className="flex items-center px-4 space-x-1">
                <img src={dot} alt="" />
                <img src={dot} alt="" />
                <img src={dot} alt="" />
                <img src={dot} alt="" />
              </div>
              <p className="text-gray-400 text-sm">Product Design</p>
            </div>
            <div className="w-full flex flex-row py-4 border-b-2 border-b-gray-300">
              <div className="flex items-center px-4 space-x-1">
                <img src={dot} alt="" />
                <img src={dot} alt="" />
                <img src={dot} alt="" />
                <img src={dot} alt="" />
              </div>
              <p className="text-gray-400 text-sm">Mold Fabrication</p>
            </div>
            <div className="w-full flex flex-row py-4">
              <div className="flex items-center px-4 space-x-1">
                <img src={dot} alt="" />
                <img src={dot} alt="" />
                <img src={dot} alt="" />
                <img src={dot} alt="" />
              </div>
              <p className="text-gray-400 text-sm">Mold Fabrication</p>
            </div>
          </div>
        </div>
        <div className="w-5/6 mx-auto md:w-full sm:w-5/6 grid grid-cols-3 lg:grid-cols-2 sm:block sm:space-y-24 px-6 py-6 mb-10 sm:mb-0 gap-y-24 gap-x-6 bg-white pb-28">
          {images.map((item) => {
            const { id, desc, img, title, l1, l2, l3, l4, l5 } = item;

            return (
              <div data-aos="slide-up" className="relative" key={id}>
                <img src={img} loading="lazy" alt="" className="sm:w-full" />
                <div className="bg-white text-base md:text-sm md:px-2 shadow-lg w-[90%] px-8 pt-4 md:pt-2 absolute z-20  -bottom-16 left-[18px] sm:left-[13px] xl:px-2 ">
                  <div
                    ref={dropdownRef}
                    className={`cursor-pointer  ${
                      selected === id ? "border-b-2" : ""
                    }`}
                    onClick={() => handleClick(id)}
                  >
                    <h3 className="text-center  text-sm text-[13px] md:text-[8px] mb-1 md:mb-0 font-rubik font-bold">
                      {title}
                    </h3>
                    <p className="text-[14px] md:text-[9px] mb-2 md:mb-0 md: leading-4">
                      {desc}
                    </p>
                    <div className="flex mt-1 md:mt-0 items-center">
                      {selected === id ? null : (
                        <>
                          <p className="text-tomatoOrange text-[13px] md:text-[11px] mr-1  capitalize">
                            {item.open}
                          </p>
                          <img src={plus} alt="" className="" />
                        </>
                      )}
                    </div>
                  </div>

                  <ul
                    className={`text-[12px] list-disc w-4/5 mx-auto  ${
                      selected === id
                        ? "visible h-auto max-h-[999px] transition-all duration-500"
                        : "invisible max-h-0"
                    }`}
                  >
                    <p className="text-[13px] md:text-[11px] -ml-7 md:-ml-4 mt-1 ">
                      Advantages
                    </p>
                    <li className="md:text-[10px]">{l1}</li>
                    <li className="md:text-[10px]">{l2}</li>
                    <li className="md:text-[10px]">{l3}</li>
                    <li className="md:text-[10px]">{l4}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <Form />
      </section>
    </>
  );
}
