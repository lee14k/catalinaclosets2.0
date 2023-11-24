import React, { useState } from "react";
import Form from "./Form";
export default function CTA({ headlineone, headlinetwo, buttontext }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = (form) => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {headlineone} <br />
            {headlinetwo}
          </h2>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-pink-800 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => handleOpenModal()}
            >
              {buttontext}
              <span aria-hidden="true">→</span>
            </button>
            {isModalOpen && (
              <div className="modal">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <div className="modal-content">
                  <Form />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
