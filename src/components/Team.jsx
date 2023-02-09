import React from "react";
import metalicBoss from "../assets/metalic-boss.png";
import metalicSvg from "../assets/team-svg.svg";
import metalic1 from "../assets/metalic-1.png";
import metalic2 from "../assets/metalic-2.png";
import metalic3 from "../assets/metalic-3.png";
import teamdot from "../assets/teamdot.svg";
import icon from "../assets/simple-icon.svg";

const items = [
  {
    id: 1,
    name: "Name of Occupant",
    title: "title",
    img: metalic1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium hic sint ipsa iure, quod aut voluptatibus explicabo reiciendis nostrum illum?",
  },
  {
    id: 2,
    name: "Name of Occupant",
    title: "title",
    img: metalic2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium hic sint ipsa iure, quod aut voluptatibus explicabo reiciendis nostrum illum?",
  },
  {
    id: 3,
    name: "Name of Occupant",
    title: "title",
    img: metalic3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium hic sint ipsa iure, quod aut voluptatibus explicabo reiciendis nostrum illum?",
  },
];

export default function Team() {
  return (
    <section className="bg-gray-200 md:bg-white  relative overflow-hidden ">
      <h3
        data-aos="slide-up"
        className="text-tomatoOrange font-mont text-4xl sm:text-2xl text-center mb-20 md:mb-0 md:mt-16"
      >
        MEET THE METALLIC TEAM
      </h3>
      <div
        data-aos="slide-up"
        className="flex flex-row w-full md:flex-col md:justify-center h-full  bg-white"
      >
        <div className="flex flex-col relative justify-center z-1 md:my-14">
          <div className="px-10 sm:px-5">
            <div
              data-aos="slide-up"
              className="mb-8  lg:w-full w-5/6 mx-auto md:mx-0"
            >
              <h3 className="text-4xl   md:text-2xl sm:text-xl">
                Odedina Bolu{" "}
                <span className="text-tomatoOrange ">Olanrewaju</span>
              </h3>{" "}
              <p className="text-orange">FOUNDER</p>
            </div>
            <p
              data-aos="slide-up "
              className="text-base  mx-auto md:mx-0  w-5/6 lg:w-full tracking-wide relative"
            >
              <img
                src={icon}
                alt=""
                className="absolute top-0 -left-7 animate-spin"
              />
              “As a graduate of mechanical engineering, my passion for creative
              space has never been the easy one, which has pushed me into
              personal development on locally made metal fabrication humbly by
              the road side at a young age. I didn’t let the challenges i
              encountered deter my determination to keep improving and honing my
              skills even in an economy that wasn’t supportive. Nevertheless,
              through blood, sweat and tears, we have evolved over the years.”
            </p>
            <div className=" flex justify-end mt-4 md:hidden space-x-2">
              <img src={teamdot} alt="" className="z-10" />
              <img src={teamdot} alt="" className="z-10" />
              <img src={teamdot} alt="" className="z-10" />
              <img src={teamdot} alt="" className="z-10" />
            </div>
          </div>
        </div>
        <img
          src={metalicBoss}
          alt=""
          className="boss md:px-8  object-cover z-10"
        />
        <img
          src={metalicSvg}
          alt=""
          className="absolute  w-[65%]  top-[-42%] right-[0] left-[43%] bottom-0 lg:hidden"
        />
      </div>
      <div className="py-28 sm:py-16 w-[86.5%] md:w-full mx-auto ">
        <div className="grid w-full grid-cols-3 md:grid-cols-2  sm:w-full sm:block gap-10 lg:gap-6  mx-auto px-6 sm:space-y-14">
          {items.map((item) => {
            const { id, img, title, name, desc } = item;
            return (
              <div
                data-aos="slide-up"
                className="bg-white flex flex-col items-center shadow sm:max-w-2xl"
                key={id}
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="w-full rounded-sm"
                />
                <h3>{name}</h3>
                <small className="text-orange text-base">{title}</small>
                <p className="text-center">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
