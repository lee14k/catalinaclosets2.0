import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const detailedViewVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Gridz = ({ id, imgSrc, description, buttonText, onClick }) => (
  <motion.div 
    layoutId={`item-${id}`} 
    onClick={() => onClick(id)}
    initial="hidden"
    animate="visible"
    variants={gridItemVariants}
    className="grid-item" 
    style={{ backgroundImage: `url(${imgSrc})` }}
  >
  </motion.div>
);

const DetailedView = ({ item, onClose }) => {
  return (
    <motion.div 
      layoutId={`item-${item.id}`} 
      className="detailed-view"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={detailedViewVariants}
    >
      <h2>{item.description}</h2>
      <p>More detailed information about {item.description}...</p>
      <button onClick={onClose}>Close</button>
    </motion.div>
  );
};

export default function Twophotobutton({ header }) {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    { id: '1', imgSrc: '/accessorydrawers.jpg', description: 'Description 1', buttonText: 'Button 1' },
    { id: '2', imgSrc: '/accessorydrawers.jpg', description: 'Description 2', buttonText: 'Button 2' },
    // ... other items
  ];

  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <div className="container">
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
