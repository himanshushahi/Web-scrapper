'use client'
import {  useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import Loader from './Loader';
import toast from 'react-hot-toast';
function SearchComponent() {
    const [url,setUrl] = useState('')
    const router = useRouter();
    const [loading,setIsLoading] = useState(false)
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
          const validUrl = new URL(url);
          setIsLoading(true)
          const response = await fetch(`/api`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: validUrl }),
          });
          const { success, product } = await response.json();
           setIsLoading(false)
          if (success) {
            router.push('/product/'+product._id)
          }
        } catch (error) {
          toast.error(error.message)
        } finally{
          setIsLoading(false)
        }
      };
  return (
    <div className=" bg-blue-500 flex justify-center">
    <div className="flex wrapper justify-center w-1/2 max-md:w-full max-md:px-2 items-center h-20">
      <input
        type="text"
        name="text"
        onChange={(e) => setUrl(e.target.value)}
        className="w-1/2 max-md:w-full h-12 px-2 outline-none rounded-bl rounded-tl"
        placeholder="Enter Product Url"
      />
      <button
        onClick={submitHandler}
        disabled={url.length<1}
        className="bg-blue-700 hover:bg-blue-600 flex gap-1 rounded-br rounded-tr items-center justify-center h-12 text-white transition-colors duration-200 w-20 px-2 py-1"
      >
       {loading?<Loader/>:<> Find <FaSearch /></>}
      </button>
    </div>
  </div>
  )
}

export default SearchComponent
