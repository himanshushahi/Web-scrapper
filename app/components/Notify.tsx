"use client";
import React, { useState } from "react";
import EmailModal from "./EmailModal";
import toast from "react-hot-toast";

function Notify({ id }) {
  const [isOpen, setIsOpen] = useState(false);

  const submitHandler = async (id, email) => {
    if (!id || !email) {
      toast.error("Enter Your Email To Proceed");
      return;
    }

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: id, email: email }),
      };
      const response = await fetch("/api/subscribe", options);
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        setIsOpen(false)
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className=" rounded px-2 py-2 w-full bg-blue-500 transition-colors duration-300 hover:bg-blue-600 text-center text-white"
      >
        Notify Me
      </button>
      <EmailModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={(email) => submitHandler(id, email)}
      />
    </div>
  );
}

export default Notify;
