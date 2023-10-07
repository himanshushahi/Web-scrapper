'use client'

import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="bg-blue-500 flex justify-center items-center h-[10vh] sticky top-0 z-10 ">
      <nav className="wrapper relative max-md:w-full max-md:px-2 flex justify-between items-center">
        <div className="text-white font-bold text-xl max-md:text-base text-start basis-1/3 max-md:basis-1/2">
          Deal Scrapper
        </div>
        <ul className={`flex space-x-4 max-md:absolute top-full transition-all duration-300 ${isOpen?'right-0':'right-full'} max-md:flex-col max-md:p-4 max-md:bg-blue-500 max-md:items-center max-md:w-full basis-1/3 justify-center  max-md:basis-[unset]`}>
          <li className="text-white px-2 py-1 hover:bg-blue-300 transition-colors duration-300 rounded">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white px-2 py-1 hover:bg-blue-300 transition-colors duration-300 rounded">
            <a href="#">Products</a>
          </li>
          <li className="text-white px-2 py-1 hover:bg-blue-300 transition-colors duration-300 rounded">
            <a href="#">About</a>
          </li>
          <li className="text-white px-2 py-1 hover:bg-blue-300 transition-colors duration-300 rounded">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="flex basis-1/3 max-md:basis-1/2 justify-end gap-2">
          <FaBars className="md:hidden" color="white" size={30} onClick={()=>setIsOpen(prev=>!prev)}/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
