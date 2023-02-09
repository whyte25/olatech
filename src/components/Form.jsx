import React, { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setNumber("");
    setMessage("");
  };

  return (
    <section className="form-wrapper max-h-sc py-12 w-full flex">
      <form
        onSubmit={handleSubmit}
        className="w-5/6 sm:w-full  sm:px-4 mx-auto flex flex-col items-center justify-center"
      >
        <h3 data-aos="slide-up" className="text-white text-4xl mb-10">
          free qoute
        </h3>
        <div className="w-full grid grid-cols-3 md:grid-cols-2  sm:space-y-4 gap-4 sm:block sm:full mb-8">
          <input
            data-aos="slide-up"
            className="py-2 outline-none pl-2 placeholder:text-center placeholder:text-tomatoOrange placeholder:opacity-40 sm:w-full "
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            data-aos="slide-up"
            className="py-2 outline-none pl-2 placeholder:text-center placeholder:text-tomatoOrange placeholder:opacity-40 sm:w-full md:order-last md:col-span-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            data-aos="slide-up"
            className="py-2 outline-none pl-2 placeholder:text-center placeholder:text-tomatoOrange placeholder:opacity-40 sm:w-full "
            type="tel"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            equired
          />
        </div>
        <textarea
          data-aos="slide-up"
          className="w-full py-2 outline-none pl-2 placeholder:text-center  placeholder:text-tomatoOrange placeholder:opacity-40 "
          cols="30"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="group">
          <button
            data-aos="slide-up"
            className="py-4 px-8  sm:py-2 sm:px-6 mt-10  group-hover:bg-orange group-hover:text-white border-[1px] duration-200 text-xl sm:text-base rounded-md text-white border-orange"
            type="submit"
          >
            Send Now
          </button>
        </div>
      </form>
    </section>
  );
}
