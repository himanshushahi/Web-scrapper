'use client'
import React ,{useState} from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Page = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
      };
  return (
    <div className="flex justify-center py-14">
      <div className="wrapper max-md:px-2">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          Have a question or feedback for us? We'd love to hear from you! Feel
          free to get in touch using any of the following methods:
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 ">
        <div className="flex items-start flex-col bg-gray-300 rounded-md p-2">
          <h2 className="text-xl flex items-center font-semibold justify-center">
            <FaEnvelope className="text-blue-500 mr-2" /> Email
          </h2>
          <a
            href="mailto:contact@pricetrackerapp.com"
            className="hover:underline"
          >
            contact@pricetrackerapp.com
          </a>
        </div>
        <div className=" flex items-start flex-col bg-gray-300 rounded-md p-2">
          <h2 className="text-xl flex items-center font-semibold justify-center">
            <FaPhone className="text-blue-500 mr-2" /> Phone
          </h2>
          <p>+1 (123) 456-7890</p>
        </div>
        <div className=" flex items-start flex-col bg-gray-300 rounded-md p-2">
          <h2 className="text-xl font-semibold mb-2 flex items-center justify-center">
            <FaMapMarkerAlt className="text-blue-500 mr-2" /> Mailing Address
          </h2>
          <address>
            123 Main Street,
            City, State 12345,
            Country
          </address>
        </div>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-semibold mb-2 w-1/2 mx-auto max-md:w-full max-md:mx-2 text-blue-500">Contact Us</h2>
          <form className="w-1/2 mx-auto max-md:w-full " onSubmit={onSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={(e)=>e.target.classList.add('shadow-custom')}
                onBlur={(e)=>e.target.classList.remove('shadow-custom')}
                className="border border-gray-300 rounded-md p-2 w-full outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={(e)=>e.target.classList.add('shadow-custom')}
                onBlur={(e)=>e.target.classList.remove('shadow-custom')}
                className="border border-gray-300 rounded-md p-2 w-full outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={(e)=>e.target.classList.add('shadow-custom')}
                onBlur={(e)=>e.target.classList.remove('shadow-custom')}
                className="border resize-none h-24 border-gray-300 rounded-md p-2 w-full outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white font-semibold py-2 px-4 w-full rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
