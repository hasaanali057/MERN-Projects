import React, { useState } from 'react'

import ImageGallery from "react-image-gallery";

import './slider.css'

const Slider = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    {
      original: "slideImage1.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "slideImage2.jpg",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "slideImage3.jpg",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "slideImage4.jpg",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    }
  ];

  const previousSliderImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
  }

  const nextSliderImage = () => {
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
  }

  return (
    <div>
      {/* <div className="image-container">
        <div className="image-list">
          {images.map((image, index) => (
            <div key= { index } className={`image-item ${ index === currentIndex ? `active` : ''}`}>
              <img src={ image } alt={ `Slide ${index}` }/>
            </div>
          ))}
        </div>
        <div className="image-btn-container">
            <button onClick={ previousSliderImage } className="slider-btn" id="slide-btn-left"><i className="fa-solid fa-chevron-left"></i></button>
            <button onClick={ nextSliderImage } className="slider-btn" id="slide-btn-right"><i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </div> */}
      <ImageGallery items={images} />
    </div>
  )
}

export default Slider