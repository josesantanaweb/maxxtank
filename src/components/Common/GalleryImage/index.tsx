import React, { useState } from 'react';

interface GalleryImageData {
  image: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImageData[];
}

const GalleryImage: React.FC<GalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center p-3 bg-gray-300 w-full h-full m-auto">
        <div className="relative h-4/5 w-full">
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded"
          >
            ❮
          </button>
          <img
            src={`/images/${images[currentImageIndex].image}`}
            alt={images[currentImageIndex].alt}
            className="w-full h-full object-contain"
          />
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded"
          >
            ❯
          </button>
        </div>

        {/* Imagenes pequenas */}
        <div className="flex space-x-3 h-1/5 w-full mx-auto my-3 overflow-x-auto justify-center">
          {images.map((item, index) => (
            <div key={index}>
              <img src={`/images/${item.image}`} alt="app" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
