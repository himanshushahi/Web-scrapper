import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedin, FaGit, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-4">
      <div className="wrapper mx-auto max-md:flex-col max-md:gap-4 flex justify-between items-center">
        <div className="flex-1 text-xl">Product Scraper</div>
        <div className="flex-1 flex justify-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/#product-section">Products</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <div className="flex-1 flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/himanshu-kumar-shahi-1b6817259/" target='_blank'>
            <FaLinkedin size={30}/>
          </a>
          <a href="https://github.com/himanshushahi?tab=repositories" target='_blank'>
            <FaGithub size={30}/>
          </a>
          <a href="https://www.instagram.com/djgolubabu_yt/" target='_blank'>
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
