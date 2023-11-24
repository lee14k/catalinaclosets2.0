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
        <div className="stage gap-10">
                  <button onClick={prevImage}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
</svg></button>

          <img className="currentimage" src={images[currentIdx]} alt={`Slide ${currentIdx}`} />
                            <button onClick={nextImage}>    
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
</svg>


 </button>

          {/* Display the description corresponding to the current image */}
          <div className='flex flex-col'>
          <h1 className='text-2xl'>{header[currentIdx]}</h1>
          <p>{descriptions[currentIdx]}</p>

          </div>
        </div>
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
