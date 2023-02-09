import React from "react";
import heroImg from "../assets/hero-img.png";
import heroIcon1 from "../assets/hero-icon-1.svg";
import heroIcon2 from "../assets/hero-icon-2.svg";
import heroIcon3 from "../assets/hero-icon-3.svg";
import heroIcon4 from "../assets/hero-icon-4.svg";
import heroIcon5 from "../assets/hero-icon-5.svg";
import heroIcon6 from "../assets/hero-icon-6.svg";

const data = [
  {
    id: 1,
    img: heroIcon1,
    title: "Creativity",
    desc: " Creatively solving daily human challenges in the area of creating machines that enhances human performance in the community. Rice millers and egg laying laying machines are some of those examples. ",
  },
  {
    id: 2,
    img: heroIcon2,
    title: "Reliability",
    desc: "We do not only make machines, we teach, instruct and take our esteemed customers through the installation process. We provide a reliable support system to ensure value for money.",
  },
  {
    id: 3,
    img: heroIcon3,
    title: "Service",
    desc: "We value every customer need, from initial contact to on-time delivery of completed solutions, fully satisfying all customer needs with superior product quality and customer service.",
  },
  {
    id: 4,
    img: heroIcon4,
    title: "Precision",
    desc: "Paying attention to details is a thing of utmost priority, not only in ensuring quality products but even more importantly in ensuring the safety of users when operating these machines.",
  },
  {
    id: 5,
    img: heroIcon5,
    title: "History",
    desc: "Paying attention to details is a thing of utmost priority, not only in ensuring quality products but even more importantly in ensuring the safety of users when operating these machines.",
  },
  {
    id: 6,
    img: heroIcon6,
    title: "Manpower",
    desc: "We make boast of a dedicated and motivated workforce of not less than 25 craftsmen annually. This gives us room to effectively explore our areas of strength while creating solutions. ",
  },
];

export default function Hero() {
  return (
    <section className="mb-12 overflow-hidden" id="hero">
      <div className="w-3/5 lg:w-[90%] mx-auto  px-6 space-y-6 sm:space-y-7 my-24 sm:mt-6 sm:pt-6 relative ">
        <div
          data-aos="slide-up"
          className="w-[2px] h-24 bg-orange absolute -left-10"
        ></div>
        <div
          data-aos="slide-up"
          className="w-[2px] h-24 bg-orange absolute -right-10 bottom-1"
        ></div>
        <h3
          data-aos="slide-up"
          className="text-tomatoOrange font-mont font-medium text-4xl md:text-xl mx-auto w-5/5 text-center sm:w-full "
        >
          Product Design, Mold Design, Mold Fabrication, Installation & Testing.
        </h3>
        <p data-aos="slide-up" className="text-grey text-base sm:text-sm">
          <span className="text-orange text-xl md:text-sm">
            OLATECH METAL FABRICATION{" "}
          </span>
          is a fast rising company in Nigeria that started with little or no
          capital back in 2004. More like a dream it was to our founder back
          then, to build the strongest locally made metal fabrication services
          in Kwara state which has eventually metamorphosed into something
          bigger and getting better by the day.
        </p>
        <p data-aos="slide-up" className="text-grey text-base sm:text-sm">
          With a dedicated staff of 25 workers, we have consistently and
          creatively serviced over 3000 satisified customers in various
          industries of the economy. Discipline has been a strong backup bone
          that has kept the company in the last 18years. We have come to believe
          that everyone has a role to play in nation building.
        </p>
      </div>
      <img
        data-aos="zoom-out"
        src={heroImg}
        alt=""
        className="mx-auto w-5/6  h-auto md:w-4/5 rounded-lg object-cover"
        loading="lazy"
      />
      <div className="bg-white w-5/6 md:w-full mx-auto flex justify-between items-center flex-wrap md:px-4  sm:space-y-16 sm:block sm:flex-now sm:text-center md:justify-around  py-0 mt-20  sm:mb-10 sm:px-4">
        {data.map((item) => {
          const { id, img, title, desc } = item;
          return (
            <div
              data-aos="slide-up"
              className="flex flex-col items-center   text-sm  md:px-0 mb-10 sm:mb-0 space-y-2 basis-[30%] md:basis-[45%] sm:basis-full"
              key={id}
            >
              <img src={img} alt={title} loading="lazy" className="w-6 h-6" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-[16px]  lg:w-full ">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
