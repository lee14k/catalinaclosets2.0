import React, { useState, useEffect } from 'react';
import { Oooh_Baby } from "next/font/google";

const Oooh = Oooh_Baby({
  weight: "400",
  subsets: ["latin"],
});

export default function Twophotobutton({ header }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 2000) { // Adjust this value based on your layout
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Event listener for scroll
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center flex-col gap-10 mt-20">
      <div className="text-6xl">
        <h1 className={Oooh.className}>{header}</h1>
      </div>
      <div className="gridfour">
       
    
      </div>
      <button>Learn More</button>
    </div>
  );
}
