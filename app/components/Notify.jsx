"use client";
import React, { useState } from "react";
import EmailModal from "./EmailModal";

function Notify({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const submitHandler = (id,email)=>{
    alert(id)
    alert(email)
  }
  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className=" rounded px-2 py-2 w-full bg-blue-500 transition-colors duration-300 hover:bg-blue-600 text-center text-white"
      >
        Notify Me
      </button>
      <EmailModal isOpen={isOpen} onClose={()=>setIsOpen(false)} onSubmit={(email)=>submitHandler(id,email)}/>
    </div>
  );
}

export default Notify;
