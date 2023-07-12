import React from "react";

const Modal = ({ isOpen, onClose, message }) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="bg-white w-80 p-6 rounded shadow">
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold">Success!</h2>
          </div>
          <p className="text-center">{message}</p>
          <div className="text-center mt-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
