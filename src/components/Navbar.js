import React,{useState} from "react";
import { HiMenuAlt1 } from 'react-icons/hi';
import MobileNav from "./MobileNav";

function Navbar() {
    const [openNav,setOpenNav] = useState(false)
  return (
      <div>
      
<nav className="flex justify-between px-5 py-5 md:px-4 md:py-10 lg:px-16 lg:py-10 items-center">
      <div className="navbar__left flex justify-center items-center  md:space-x-10 space-x-20">
        <div className="nav-logo block  no-underline">
          <a className="text-white font-bold text-lg" href="#logo">
            GPT-3
          </a>
        </div>
        <div className="navbar__links md:flex md:space-x-4 lg:space-x-6 md:text-sm text-white hidden">
          <a  href="#home">Home</a>
          <a href="#gft">What is GFT?</a>
          <a href="#open">Open Ai</a>
          <a href="#case">Case Studies</a>
          <a href="#library">Library</a>
        </div>
      </div>
 
     
      <div className="navbar__right md:flex items-center text-white hidden">
        <div className="navbar__button flex md:space-x-6 text-white">
          <button className="font-semibold text-xs">Sign in</button>
          <button  className="navbar__btn px-5 py-1 font-semibold text-xs">Sign up</button>
        </div>
        
      </div>
      <div  className="icon md:hidden text-gray-100 text-2xl">
       <HiMenuAlt1  onClick={()=>setOpenNav(!openNav)}/>
       
        </div>
       
    </nav>
    {openNav&&<MobileNav openNav={openNav}/>}
      </div>
    
  );
}

export default Navbar;
