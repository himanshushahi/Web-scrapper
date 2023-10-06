import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-blue-500 flex items-center h-[10vh] sticky top-0 z-10 ">
      <nav className="wrapper md:mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl basis-1/3">
          Deal Scrapper
        </div>
        <ul className="flex space-x-4 basis-1/3 justify-center max-md:hidden">
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
        <div className="flex basis-1/3 justify-end gap-2">
          <button className="btn">Login</button>
          <button className="btn">Signup</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
