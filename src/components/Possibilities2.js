import React from "react";
import possibilities from "../assets/possibility.png";

function Possibilities2() {
  return (
    <>
      <div className="flex flex-col  md:flex-row px-10   py-5 sm:px-20 lg:px-28 md:items-center md:space-x-16 text-sm">
        <img className="w-96" src={possibilities} alt="" />
        <div className="flex flex-col space-y-4">
          <h2 className="text-white explore2 cursor-pointer mt-5">
            Request Early Access to Get Started
          </h2>
          <h1 className="gradient__text text-lg lg:text-3xl">
            The possibilities are <br />
            beyond your imagination
          </h1>
          <p className="md:text-xs tracking-wider  w-80">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to orderallow
            asked of.
          </p>
          <p className="explore cursor-pointer text-xs">
            Request Early Access to Get Started
          </p>
        </div>
      </div>
      <div className="px-10">
        <div className="max-w-4xl   flex  flex-col md:flex-row justify-between register  px-5  md:px-2 mb-12  items-center mx-auto mt-20 h-44 pt-2 md:h-24 bg-gradient-to-r from-purple-600 via-red-400 to-pink-400">
          <div className="space-y-4  text-sm md:text-base">
            <p className="text-black font-medium ">
              Request Early Access to Get Started
            </p>
            <h2 className="text-black font-extrabold">
              Register today & start exploring the endless possiblities.
            </h2>
          </div>
          <button className="bg-black text-white rounded-full px-3 py-2 mb-2 text-xs mr-5">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Possibilities2;
