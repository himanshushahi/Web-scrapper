"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isloading,setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      return;
    }

    if (!formData.email) {
      return;
    }

    if (!formData.message) {
      return;
    }
    try {
      setIsLoading(true)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setIsLoading(false)
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }finally{
      setIsLoading(false)
    }
  };
  return (
    <section className="my-6">
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
            onFocus={(e) => e.target.classList.add("shadow-custom")}
            onBlur={(e) => e.target.classList.remove("shadow-custom")}
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
            onFocus={(e) => e.target.classList.add("shadow-custom")}
            onBlur={(e) => e.target.classList.remove("shadow-custom")}
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
            onFocus={(e) => e.target.classList.add("shadow-custom")}
            onBlur={(e) => e.target.classList.remove("shadow-custom")}
            className="border resize-none h-24 border-gray-300 rounded-md p-2 w-full outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition-colors flex justify-center duration-200 text-white font-semibold py-2 px-4 w-full rounded"
        >
         {isloading?<Loader/>:'Send Message'}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
