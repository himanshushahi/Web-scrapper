import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-4">
      <div className="wrapper mx-auto flex justify-between items-center">
        <div className="flex-1 text-xl">Product Scraper</div>
        <div className="flex-1 flex justify-center gap-4">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="flex-1 flex justify-center gap-4">
          <a href="#">
            <FaFacebook size={30}/>
          </a>
          <a href="#">
            <FaTwitter size={30}/>
          </a>
          <a href="#">
            <FaInstagram size={30}/>
          </a>
        </div>
      </div>
      <div className="mt-14 text-center">
        &copy; {new Date().getFullYear()} Copyright by Himanshu Kumar Shahi
      </div>
    </footer>
  );
};

export default Footer;
