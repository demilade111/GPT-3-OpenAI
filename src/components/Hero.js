import React from "react";
import ai from "../assets/ai.png";
import people from "../assets/people.png";
import atlassian from "../assets/atlassian.png";
import slack from "../assets/slack.png";
import shopify from "../assets/shopify.png";
import google from "../assets/google.png";
import dropbox from "../assets/dropbox.png";

function Hero() {
  return (
    <>
      <div className="hero sm:grid sm:grid-cols-2 sm:pl-12 sm:gap-x-5">
        <div className="hero-left mx-auto px-5 lg:px-10  flex flex-col space-y-6 pt-10 max-w-4xl">
          <h1 className="gradient__text text-2xl lg:text-4xl pt-3 font-bold tracking-normal">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="hero-text text-sm  tracking-wide font-medium lg:text-base">
      
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="flex mt-10">
            <input
              className="hero-input focus:outline-none text-base px-1 py-2 w-64 text-white"
              placeholder="Your Email Address"
              type="text"
            />
            <a
              className="navbar__btn px-4 py-1 flex items-center font-semibold text-xs text-white"
              href="#library"
            >
              Sign up
            </a>
          </div>
          <div className="hero_people py-2 lg:flex items-center justify-center">
            <img src={people} />
            <p className="text-white mt-5 lg:mt-0 text-sm lg:ml-3">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
        <div className="hero-right lg:ml-20">
          <img className="mt-1 lg:h-96 object-contain object-center" src={ai} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2 sm:space-x-4 lg:space-x-16 my-20">
        <img className="w-14" src={google} />
        <img className="w-14"src={slack} />
        <img className="w-14"src={atlassian} />
        <img className="w-14"src={dropbox} />
        <img className="w-14"src={shopify} />
      </div>
    </>
  );
}

export default Hero;
