import React, { useState, useEffect } from 'react';
import { Oooh_Baby } from "next/font/google";
import { motion, useViewportScroll, useTransform, AnimatePresence} from "framer-motion";


const Oooh = Oooh_Baby({
  weight: "400",
  subsets: ["latin"],
});

const Gridz = ({ id, imgSrc, description, buttonText, onClick }) => (
  <motion.div layoutId={id} className="grid-item" style={{ backgroundImage: `url(${imgSrc})` }} onClick={() => onClick(id)}>
    <div className="gradient-overlay"></div>
    <div className="overlay-content">
      <motion.p className="text-2xl text-white">{description}</motion.p>
      <button>{buttonText}</button>
    </div>
  </motion.div>
);

const DetailedView = ({ item, onClose }) => {
  return (
    <motion.div layoutId={item.id} className="detailed-view">
      <h2>{item.description}</h2>
      <p>More detailed information about {item.description}...</p>
      <button onClick={onClose}>Close</button>
    </motion.div>
  );
};

// Style your .detailed-view in CSS to make it look like an expanded card



export default function Twophotobutton({ header }) {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    { id: '1', imgSrc: 'accessorydrawers.jpg', description: 'Description 1', buttonText: 'Button 1' },
    { id: '2', imgSrc: 'accessorydrawers.jpg', description: 'Description 2', buttonText: 'Button 2' },
    // ... other items
  ];

  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <div className="flex justify-center items-center flex-col gap-10 mt-48">
      <div className="text-6xl">
        <h1>{header}</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {items.map(item => (
          <Gridz key={item.id} {...item} onClick={setSelectedId} />
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <DetailedView item={selectedItem} onClose={() => setSelectedId(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
