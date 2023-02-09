import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

import mail from "../assets/mail-contact.svg";
import phone from "../assets/Phone-contact.svg";
import house from "../assets/house.svg";

export default function Contact() {
  return (
    <section>
      <header className="contact-wrapper  w-full pt-10 flex flex-col items-center">
        <Navbar />
        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
          className="border-[8px] w-[750px] md:w-3/4 mx-auto mt-20 mb-20  text-white border-white text-center "
        >
          <h4 className="text-sm font-medium mt-6 ">PROXIMITY</h4>
          <h1 className="text-6xl md:text-4 mx-auto mt-10 mb-16  font-semibold  md:my-10 sm:mb-24 sm:hidden">
            YOU’RE CLOSER TO US THAN YOU THINK!
          </h1>
          <h1 className="hidden mx-auto mt-10 mb-16  font-semibold  md:my-10 sm:mb-24 sm:block text-3xl">
            YOU’RE CLOSER TO US THAN YOU THINK!
          </h1>
        </div>
        <a
          href="https://wa.me/2347060404706?text=Hello,%20thanks%20for%20visiting%20Ola%20Tech.%20What%20can%20we%20do%20for%20you?"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange py-4 px-6 rounded-2xl  bg-white capitalize shadow-xl  lg:mt-30  my-14  hover:opacity-70 animate-pulse"
        >
          CHAT NOW
        </a>
      </header>

      <div className="pl-6 lg:pl-0 md:pl-0" id="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.847859941831!2d4.622000314273522!3d8.416598800597933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037b340f89c717d%3A0x4b1210c54dbaa9da!2sAmoyo%20ECWA%20Nursery%20and%20Primary%20School!5e0!3m2!1sen!2sng!4v1666793944475!5m2!1sen!2sng"
          // width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-5/6 mx-auto my-16"
        ></iframe>
        <h3
          data-aos="slide-up"
          className="hidden  text-center md:block text-tomatoOrange text-3xl sm:text-xl"
        >
          GET IN TOUCH WITH US
        </h3>
        <div className="flex w-[86%] sm:w-full mx-auto sm:mx-0 md:flex-col-reverse md:items-center ">
          <div className="flex-1 space-y-12">
            <h3
              data-aos="slide-up"
              className="text-tomatoOrange text-3xl md:hidden"
            >
              GET IN TOUCH WITH US
            </h3>
            <Form />
          </div>
          <div className="px-16 sm:px-0 space-y-12 mt-20 md:mt-10">
            <div data-aos="slide-up" className="flex space-x-4 ">
              <img src={house} alt="" />
              <div className="">
                <p className="text-tomatoOrange font-medium">
                  Ilorin, Kwara State{" "}
                </p>
                <small>ECWA Shopping complex, Amoyo</small>
              </div>
            </div>
            <div data-aos="slide-up" className="flex space-x-4 ">
              <img src={phone} alt="" />
              <div className="">
                <a
                  href="tel:+2347060404706"
                  className="text-tomatoOrange block font-medium"
                >
                  07060404706
                </a>
                <small>Mon To Fri 8am - 6am </small>
              </div>
            </div>
            <div data-aos="slide-up" className="flex space-x-4 ">
              <img src={mail} alt="" />
              <div className="">
                <a
                  href="mailto:olatechengine@gmail.com"
                  className="text-tomatoOrange block font-medium"
                >
                  olatechengine@gmail.com
                </a>
                <small>Send Your Enquiry At Anytime!</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
