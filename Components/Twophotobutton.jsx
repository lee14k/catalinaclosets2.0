import React, { useState, useEffect } from 'react';
import { Oooh_Baby } from "next/font/google";

const Oooh = Oooh_Baby({
  weight: "400",
  subsets: ["latin"],
});

const Gridz = ({ imgSrc, description, buttonText }) => (
  <div className="grid-item" style={{ backgroundImage: `url(${imgSrc})` }}>
    <div className="overlay-content">
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  </div>
);


export default function Twophotobutton({ header }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // your existing useEffect logic
  }, []);

  return (
    <div className="flex justify-center items-center flex-col gap-10 mt-20">
      <div className="text-6xl">
        <h1 className={Oooh.className}>{header}</h1>
      </div>
      <div className="gridfour grid grid-cols-2 gap-4">
        <Gridz imgSrc="accessorydrawers.jpg" description="Description 1" buttonText="Button 1" />
        <Gridz imgSrc="darkwoodfinish.jpg" description="Description 2" buttonText="Button 2" />
        <Gridz imgSrc="linensheets.jpg" description="Description 3" buttonText="Button 3" />
        <Gridz imgSrc="mudroom.jpg" description="Description 4" buttonText="Button 4" />
      </div>
      <button>Learn More</button>
    </div>
  );
}
