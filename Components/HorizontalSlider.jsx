import React from 'react';

const HorizontalSlider = () => {
  return (
    <div className='sliderContainer'>
      <div className='slider'>
        {/* Add your images here */}
        <img src="/library.jpg" className="slideimage"/>
        <img src="/darkwoodfinish.jpg" className="slideimage" alt="Image 2" />
        <img src="/accessorydrawers.jpg" className="slideimage" alt="Image 3" />
        <img src="/library.jpg" className="slideimage" alt="Image 4" />
        <img src="/hamper.jpg" className="slideimage" alt="Image 5" />
        <img src="/library.jpg" className="slideimage" alt="Image 1" />
        <img src="/darkwoodfinish.jpg" className="slideimage" alt="Image 2" />
        <img src="/accessorydrawers.jpg" className="slideimage" alt="Image 3" />
        <img src="/library.jpg" className="slideimage" alt="Image 4" />
        <img src="/hamper.jpg" className="slideimage" alt="Image 5" />
        <img src="/library.jpg" className="slideimage" alt="Image 4" />
        <img src="/hamper.jpg" className="slideimage" alt="Image 5" />      
        </div>
      <div className='textOverlay text-8xl'>
About Us      
</div>
    </div>
  );
};

export default HorizontalSlider;
