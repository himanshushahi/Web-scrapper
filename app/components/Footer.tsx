import React from 'react'
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-4">
      <div className="wrapper mx-auto max-md:flex-col max-md:gap-4 flex justify-between items-center">
        <div className="flex-1 text-xl flex gap-1 items-center"><Image width={500} height={500} src={'/logo.webp'} alt='logo' className='object-cover rounded-full w-10 h-10'/>  Product Scraper</div>
        <div className="flex-1 flex justify-center gap-4">
          <Link href="/" className='transition-colors duration-200 hover:text-gray-500'>Home</Link>
          <Link href="/#product-section" className='transition-colors duration-200 hover:text-gray-500'>Products</Link>
          <Link href="/about" className='transition-colors duration-200 hover:text-gray-500'>About Us</Link>
          <Link href="/contact-us" className='transition-colors duration-200 hover:text-gray-500'>Contact Us</Link>
        </div>
        <div className="flex-1 flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/himanshu-kumar-shahi-1b6817259/" target='_blank' className='transition-colors duration-200 hover:text-gray-500'>
            <FaLinkedin size={30}/>
          </a>
          <a href="https://github.com/himanshushahi?tab=repositories" target='_blank' className='transition-colors duration-200 hover:text-gray-500'>
            <FaGithub size={30}/>
          </a>
          <a href="https://www.instagram.com/djgolubabu_yt/" target='_blank' className='transition-colors duration-200 hover:text-gray-500'>
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
