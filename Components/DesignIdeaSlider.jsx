import { useState } from 'react';

export default function DesignIdeaSlider({ images, descriptions, header }) {

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
        <div className="stage">
          <img className="currentimage" src={images[currentIdx]} alt={`Slide ${currentIdx}`} />
          {/* Display the description corresponding to the current image */}
          <div className='flex flex-col'>
          <h1 className='text-2xl'>{header[currentIdx]}</h1>
          <p>{descriptions[currentIdx]}</p>
          </div>
        </div>
        <button onClick={nextImage}>Next</button>
      </div>
      <div className='flex'>
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
