import React, { useState, useRef } from "react";
import Link from "next/link";
import Form from "./Form";
export default function CTA({ headlineone, headlinetwo, buttontext }) {
  const [isModalOpen, setModalOpen] = useState(false);
    const modalContentRef = useRef(null);

  const handleOpenModal = (form) => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
    const handleClickOutside = (event) => {
    if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  return (
    <div className="bg-slate-100">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {headlineone} <br />
            {headlinetwo}
          </h2>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/Consultation">
            <button
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-pink-800 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              
            >
              {buttontext}
              <span aria-hidden="true">→</span>
            </button>
                          </Link>

            {isModalOpen && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleCloseModal}>
                    &times;
                  </span>
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
