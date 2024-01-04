import React, { useState, useEffect } from "react";
import Conbar from "@/Components/Conbar";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Conbar/>
      <Navbar/>
      <h2>Gallery</h2>
      <div className="h-100 w-100 bg-red">
        {images.map((key) => (
          <img
            key={key}
            src={`https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${key}`}
            alt="Gallery Image"
            className="width-100 margin-bottom-16 rounded "
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Gallery;
