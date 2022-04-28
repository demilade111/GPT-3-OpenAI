import React from "react";
import Features from "./Features";


function WhatGPT3() {
  return (
    <div className="max-w-6xl  mx-auto what_gpt h-92 w-full   mt-6 px-10  py-6 drop-shadow-2xl">
      <div className="flex flex-col items-center md:flex-row md:space-x-28 md:justify-center">
        <h1 className="mt-3  text-white font-bold w-40  block">
            <div className="gpt-line w-12 h-1 bg-gradient-to-r mb-4 from-yellow-400 via-red-500 to-pink-500"></div>What is GPT-3
        </h1>
        <p className="w-full max-w-4xl mt-3 text-sm tracking-wider font-medium">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His<br/> defective nor convinced residence own. Connection
          has put impossible own apartments<br/> boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div>
        <div className="flex flex-col font-bold md:flex-row md:justify-between md:items-center py-14 md:py-24">
          <h1 className="mt-3 gradient__text    font-bold text-xl md:text-2xl w-72  block">
            The possibilities are beyond your imagination
          </h1>
          <p className="max-w-4xl mt-3  explore cursor-pointer">Explore The Library </p>
        </div>
      </div>
      <div className="features flex flex-col md:flex-row  lg:space-x-28  -mt-5">
        < Features heading='Chatbots' title='We  so opinion friends me message as delight. Whole front do of plate heard oh ought.' />
        < Features heading='Knowledgebase' title='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments' />
        < Features heading='Education' title='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments' />
       
      </div>
       
    </div>
  );
}

export default WhatGPT3;
