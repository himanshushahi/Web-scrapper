import React, { useState } from "react";

const EmailModal = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(email);
  };

  return (
    <div
      onClick={onClose}
      className={`fixed z-20 inset-0 bg-gray-800 flex justify-center items-center bg-opacity-75 transition-opacity ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white border-l-4 border-blue-500 flex flex-col items-center justify-center rounded-lg px-4 py-2 h-[25%] md:h-[30%] w-[98%] md:w-[35%] z-[999]"
      >
        <div className="w-full">
          <h2 className="text-blue-500 text-xl font-semibold mb-4">
            Enter Your Email
          </h2>
          <input
            type="email"
            onFocus={(e) => e.target.classList.add("shadow")}
            onBlur={(e) => e.target.classList.remove("shadow")}
            className="w-full  border-[1px] border-blue-500 outline-none transition-shadow duration-300 rounded  p-3 mb-4"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="flex justify-end w-full">
          <button
            disabled={
              email.length < 1 ||
              !/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(email)
            }
            className="bg-blue-500 transition-colors duration-300 hover:bg-blue-600 text-white px-4 py-2 rounded-sm"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <button
            className="bg-gray-300 transition-colors duration-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-sm ml-2"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
