// components/Modal.js
import React from 'react';

type Props = {
    isOpen: boolean,
    onClose: () => void
}

const Modal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
        <button className="text-gray-600 hover:text-gray-800 float-right" onClick={onClose}>
          &times;
        </button>
        <div className="mt-4">
          <h1 className="text-xl font-semibold">Welcome to the App!</h1>
          <p>We are excited to have you here.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
