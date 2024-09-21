"use client";
import { useState } from "react";


const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:w-1/3 w-full py-20 animate-grow-fade ">
        <div className="mt-4">
          <h1 className="text-2xl font-semibold text-black text-center">
            Welcome my portfolio site.
          </h1>
          <p className="text-black text-center m-4">
            Have a look around. When you're done you can send me a direct
            message right here and I will get back to you shortly.
          </p>
        </div>
        <div className="flex justify-center w-full">
          <button className="text-white bg-black w-[80%] rounded py-2 my-4" onClick={onClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
