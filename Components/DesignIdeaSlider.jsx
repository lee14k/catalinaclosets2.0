import { useState } from 'react';

export default function DesignIdeaSlider({ images }) {

  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImage = () => {
    setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIdx((prevIdx) => (prevIdx - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div>
        <button onClick={prevImage}>Previous</button>
        <img src={images[currentIdx]} alt={`Slide ${currentIdx}`} />
        <button onClick={nextImage}>Next</button>
      </div>
      <div>
        <img
          src={images[(currentIdx - 1 + images.length) % images.length]}
          alt={`Slide ${currentIdx - 1}`}
          className="preview"
        />
        <img
          src={images[(currentIdx + 1) % images.length]}
          alt={`Slide ${currentIdx + 1}`}
          className="preview"
        />
      </div>
      <style jsx>{`
        .preview {
          width: 100px;  // Adjust this to your desired preview size
          opacity: 0.5;  // Make it slightly transparent
        }
      `}</style>
    </div>
  );
}
