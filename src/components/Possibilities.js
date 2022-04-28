import React from "react";
import About from "./About";

function Possibilities() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-16 px-4   py-5 lg:pt-28 md:px-20">
      <div>
        <h1 className="gradient__text text-xl font-bold mb-5 md:text-2xl w-4/5 lg:w-96 lg:pl-26">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p className="explore">Request Early Access to Get Started</p>
      </div>
      <div className="grid grid-cols-1 py-2 space-y-1  lg:text-sm sm:grid-cols-2 lg:w-full md:space-y-1 lg:space-y-8 lg:flex lg:flex-col">
        <About title="Improving end distrusts instantly" />
        <About title="Become the tended active" />
        <About title="Message or am nothing" />
        <About title="Really boy law county" />
      </div>
      <div className="grid grid-cols-1 py-2 space-y-4  sm:space-y-0 font-normal md:text-xs lg:text-sm  sm:grid-cols-2 sm:gap-y-3 gap-x-10 mt-16 lg:flex lg:flex-col lg:mt-0 ">
        <p>
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded.
        </p>
        <p>
          Considered sympathize ten uncommonly occasional assistance sufficient
          not. Letter of on become he tended active enable to.
        </p>
        <p>
          Led ask possible mistress relation elegance eat likewise debating. By
          message or am nothing amongst chiefly address.
        </p>
        <p>
          Really boy law county she unable her sister. Feet you off its like
          like six. Among sex are leave law built now. In built table in an
          rapid blush.
        </p>
      </div>
    </div>
  );
}

export default Possibilities;
