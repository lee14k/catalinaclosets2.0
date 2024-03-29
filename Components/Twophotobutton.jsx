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

const Gridz = ({ id, imgSrc, description, buttonText, onClick, headerText }) => (
  <motion.div 
    layoutId={`item-${id}`} 
    onClick={() => onClick(id)}
    initial="hidden"
    animate="visible"
    variants={gridItemVariants}
    className="grid-item twocontainer" 
    style={{ backgroundImage: `url(${imgSrc})` }}
  >
    <h2 className="text-white text-2xl" style={{ position: 'relative', zIndex: 2 }}>{headerText}</h2>
    {/* Ensure any other content here also has a higher z-index if needed */}
  </motion.div>
);
const DetailedView = ({ item, onClose }) => {
  return (
    <motion.div 
      layoutId={`item-${item.id}`} 
      className="modal-backdrop twocontainer"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={detailedViewVariants}
      onClick={onClose} // Clicking on the backdrop closes the modal
    >
      <motion.div className="modal-content" onClick={e => e.stopPropagation()}>
        {/* Prevents modal from closing when clicking inside the content */}
        <h2 className="text-white text-2xl">{item.description}</h2>
        <p>More detailed information about {item.description}...</p>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
};

export default function Twophotobutton({ header }) {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    { id: '1', imgSrc: '/accessorydrawers.jpg', description: 'our finish options', buttonText: 'Button 1' },
    { id: '2', imgSrc: '/library.jpg', description: 'fun projects', buttonText: 'Button 2' },
    // ... other items
  ];

  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <div className="pt-48 twocontainer bg-white">
      <div className="text-6xl flex justify-center items-center bg-white">
        <h1>{header}</h1>
      </div>
      <div className="grid grid-cols-2 gap-64 justify-center items-center twocontainer">
        {items.map(item => (
          <Gridz 
            key={item.id} 
            {...item} 
            onClick={setSelectedId} 
            headerText={`Click here to learn more about ${item.description}`} // Custom header text
          />
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
