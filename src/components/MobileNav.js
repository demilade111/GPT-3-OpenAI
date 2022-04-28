import React from "react";

function MobileNav({ openNav }) {
  return (
    <>
      <div
        className={
          openNav
            ? "bg-gray-900 lg:hidden h-72 w-5/12 absolute right-10 top-12"
            : "hidden"
        }
      >
        <div className="navbar__links flex flex-col  space-y-5 px-6 py-5 text-white text-xs font-semibold lg:hidden transition-all duration-100 eas">
          <a href="#home">Home</a>
          <a href="#gft">
            What is GFT?
          </a>
          <a href="#open">Open Ai</a>
          <a href="#case">Case Studies</a>
          <a href="#library">Library</a>
          <a href="#library">Sign In</a>
          <a className="navbar__btn  px-3 py-1 font-semibold text-xs inline-block" href="#library">Sign up</a>

       
        </div>
      </div>
    </>
  );
}

export default MobileNav;
