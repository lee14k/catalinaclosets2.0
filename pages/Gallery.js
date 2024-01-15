import React, { useState, useEffect } from "react";
import Conbar from "@/Components/Conbar";
import Footer from "@/Components/Footer";
import NewNav from "@/Components/NewNav";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/images");
        const data = await response.json();
        setImages(data.imageKeys);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
      setLoading(false);
    };

    fetchImages();
  }, []);

  const handleOpenModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentImageIndex(null);
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mainbodywrapper">
      <Conbar />
      <NewNav />
      <h2>Gallery</h2>
      <div className="h-100 w-100 bg-red">
        <div className="imgcontainer">
          {images.map((key, index) => (
            <img
              key={key}
              src={`https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${key}`}
              alt="Gallery Image"
              className="gallery__img"
              onClick={() => handleOpenModal(index)}
            />
          ))}
        </div>
        {isModalOpen && currentImageIndex !== null && (
          <div className="modal">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            {currentImageIndex > 0 && (
              <button onClick={handlePreviousImage} className="modal-prev text-xl text-white">Previous</button>
            )}
            <img 
              className="modal-content" 
              src={`https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${images[currentImageIndex]}`}
              alt="Gallery Modal" 
            />
            {currentImageIndex < images.length - 1 && (
              <button onClick={handleNextImage} className="modal-next text-xl text-white">Next</button>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
