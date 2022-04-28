import React from "react";

function Footer() {
  return (
    <div className="what_gpt  lg:w-full px-20  mt-20 h-screen cursor-pointer">
      <div className="flex flex-col justify-center items-center py-8">
        <h1 className="gradient__text text-2xl lg:text:4xl py-6  ">
          Do you want to step in to<br/> the future before others
        </h1>
        <button className="text-white bg-transparent border mt-3 px-5 py-3 mb-10">
          Request Early Access
        </button>
      </div>
      <div className="flex flex-col lg:flex-row  justify-between px-10 text-white">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-extrabold">GPT-3 </h2>
          <p className=" w-44 text-xs text-white tracking-wider">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="flex flex-col space-y-6">
          <h2 className="text-xs font-bold">Links</h2>
          <p className=" w-44 text-xs text-white tracking-widest">Overons</p>
          <p className=" w-44 text-xs text-white tracking-wider">
            Social Media
          </p>
          <p className=" w-44 text-xs text-white tracking-wider">Counters</p>
          <p className=" w-44 text-xs text-white tracking-wider">Contact</p>
        </div>
        <div className="flex flex-col space-y-6">
          <h2 className="text-xs font-bold ">Company</h2>
          <p className=" w-44 text-xs text-white tracking-wider">
            Terms & Conditions
          </p>
          <p className=" w-44 text-xs text-white tracking-wider">
            Privacy Policy
          </p>
          <p className=" w-44 text-xs text-white tracking-wider">Contact</p>
        </div>
        <div className="flex flex-col space-y-6">
          <h2 className="text-xs font-bold t">Get in Touch</h2>
          <p className=" w-44 text-xs text-white tracking-wider">
            Crechterwoord K12 182 DK Alknjkcb
          </p>
          <p className=" w-44 text-xs text-white tracking-wider">085-132567</p>
          <p className=" w-44 text-xs text-white tracking-wider">
            info@payme.net
          </p>
        </div>
      </div>
       <p className=" flex justify-center items-center text-xs text-white tracking-wider mt-20">
           © 2021 GPT-3. All rights reserved.
          </p>
    </div>
  );
}

export default Footer;
