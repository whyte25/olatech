import React from "react";

export const WorkOverlay = ({ image, toggleProject }) => {
  return (
    <div
      className="flex justify-center items-center h-screen w-full  bg-black/80 backdrop-blur-sm fixed z-[999] top-0 bottom-0 left-0"
      onClick={toggleProject}
    >
      <img
        src={image}
        alt=""
        className="w-2/4 object-contain md:w-3/4  h-auto"
      />
      <button
        onClick={toggleProject}
        className="capitalize absolute top-5 right-[10rem] md:right-[40%] px-4 py-2 bg-orange rounded-sm text-white self-start mt-4 ml-5 md:ml-0 hover:opacity-80 duration-200"
      >
        close
      </button>
    </div>
  );
};
