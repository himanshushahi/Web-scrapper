import Image from "next/image";
import React from "react";
import { FaShoppingCart, FaAmazon, FaFacebook } from "react-icons/fa";
import scrapperImage from '../../public/scrapper.jpeg'

function HeroSection() {
  return (
    <section className="bg-blue-500 text-white py-20 ">
      <div className="wrapper mx-auto flex flex-col-reverse gap-4 md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Product Scrapper
          </h1>
          <p className="text-lg mb-6">
            Find the Best Deals from Amazon and Flipkart!
          </p>
          <div className="flex space-x-6 max-md:justify-center ">
            <div className="flex items-center">
              <FaAmazon className="text-3xl" />
              <p className="ml-2">Amazon</p>
            </div>
            <div className="flex items-center">
              <FaFacebook className="text-3xl" />
              <p className="ml-2">Flipkart</p>
            </div>
          </div>
          <div className="max-md:px-4">
            <button className="bg-yellow-500 transition-colors rounded max-md:w-full duration-200 hover:bg-yellow-400 text-gray-900 font-bold py-2 px-4 mt-8 flex justify-center items-center">
              <FaShoppingCart className="text-xl mr-2" />
              <span>Search Deal</span>
            </button>
          </div>
        </div>
        <div className="basis-1/2 max-md:basis-full flex justify-end max-md:justify-center">
          <Image
            height={500}
            width={500}
            src={scrapperImage}
            alt="Product Scraper"
            className="w-[80%] h-[80%] rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
