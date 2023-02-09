import { data } from "autoprefixer";
import React from "react";
import { Link } from "react-router-dom";
import work1 from "../assets/work-1.png";
import work2 from "../assets/work-2.png";
import work3 from "../assets/work-3.png";
import work4 from "../assets/work-4.png";
import work5 from "../assets/work-5.png";
import work6 from "../assets/work-6.png";
import glass from "../assets/magnify-glass.svg";
import { WorkOverlay } from "./WorkOverlay";

const projects = [
  {
    id: 1,
    img: work1,
    title1: "Moveable Layer",
    title2: "Concrete Block Making",
    title3: "Machine",
  },
  {
    id: 2,
    img: work2,
    title1: "Sand",
    title2: "Mixing",
    title3: "Machine",
  },
  {
    id: 3,
    img: work3,

    title1: " Stationary Concrete",
    title2: " Block Making ",
    title3: " Machine",
  },
  {
    id: 4,
    img: work4,
    title1: " Dough Roller For",
    title2: " Bakery  ",
  },
  {
    id: 5,
    img: work5,
    title1: " Rice ",
    title2: " Thresher",
  },
  {
    id: 6,
    img: work6,
    title1: "Stationary Concrete",
    title2: "Block Making ",
    title3: " Machine",
  },
];

export default function Work() {
  const [show, setShow] = React.useState(false);
  const [image, setImage] = React.useState([]);

  const toggleProject = (project) => {
    setImage(project.img);
    show ? setShow(false) : setShow(true);
  };
  return (
    <section className="py-16  bg-gray-200">
      <div
        data-aos="slide-up"
        className="flex w-[83%] mx-auto  justify-between items-center  sm:justify-start"
      >
        <div className="">
          <small className="text-grey text-[11px] font-bold ">PORTFOLIO</small>
          <h3 className="text-3xl  text-tomatoOrange">RECENT WORK</h3>
        </div>

        <Link
          to="/portfolio"
          className="capitalize px-4 py-2 bg-orange rounded-full text-white md:hidden shadow-lg"
        >
          load more
        </Link>
      </div>
      <div className=" grid grid-cols-3 md:w-full w-[89%] mx-auto  md:grid-cols-2 gap-6 md:gap-3 sm:space-y-10 sm:block px-10 my-10">
        {projects.map((project) => {
          return (
            <div
              data-aos="slide-up"
              className="group relative"
              key={project.id}
            >
              <img
                src={project.img}
                loading="lazy"
                alt=""
                className="rounded-md z-0 w-full group-hover:scale-105 duration-200"
              />
              <div
                className="flex flex-col space-y-10 md:space-y-6 justify-center items-center absolute top-0 bottom-0 right-0 left-0 w-full group-hover:bg-orange group-hover:scale-105  opacity-70 rounded-md duration-200 z-40 cursor-pointer"
                onClick={() => toggleProject(project)}
              >
                <p className="hidden  group-hover:block text-2xl md:text-xl text-center text-white capitalize">
                  <span className="block mb-1">{project.title1}</span>
                  <span className="block mb-1">{project.title2}</span>
                  <span className="block">{project.title3}</span>
                </p>

                <img
                  onClick={() => setShow(true)}
                  className="hidden  group-hover:block"
                  src={glass}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
      {show && <WorkOverlay image={image} toggleProject={toggleProject} />}

      <Link
        to="/portfolio"
        data-aos="slide-up"
        href=""
        className="capitalize px-4 py-2 bg-orange rounded-full text-white sm:block mx-auto w-2/4 hidden text-center"
      >
        load more
      </Link>
    </section>
  );
}
