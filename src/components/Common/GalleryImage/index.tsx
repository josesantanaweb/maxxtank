import React from 'react'
import { GalleryImageData } from '@/components/Apps/types/types'
import './styles.css'
interface GalleryProps {
  images: GalleryImageData[]
}

const GalleryImage: React.FC<GalleryProps> = ({ images }) => {
  console.log(images)
  return (
    <div className=" h-screen relative">
      <div className="flex flex-col p-3 bg-gray-300 w-10/12 h-full m-auto">
        <div style={{ height: '80%' }}>
          {<img src={`/images/${images[0].image}`} alt={images[0].alt} className="object-contain w-full h-full"></img>}
        </div>

        {/* Imagenes pequenas */}
        <div className="imageGalery space-x-3 h-1/5 w-fit mx-auto mt-3">
          {images.map((item, index) => (
            <div className="imageGaleryItem" key={index}>
              <img src={`/images/${item.image}`} alt="app" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryImage
