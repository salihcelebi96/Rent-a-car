import React, { useState, useEffect } from 'react';
import img1 from "../assets/bmw.png";
import img2 from "../assets/mercedes.png";
import img3 from "../assets/nissan.png";
import './Slider.css'; 

const Slider = () => {
  const images = [img1, img2, img3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Set an interval to slide automatically every 3 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className='flex justify-center items-center bg-gray-950'>
      <div>
        <div className='text-white'>
          <h1>For Rent 70$ Per Day</h1>
          <h1 className='text-4xl'>Reserved Now and Get 50% off</h1>
        </div>
        <div>
          <button className='text-black rounded-sm hover:bg-gray-700 hover:text-white border mt-10 p-2 bg-white' type="">Reserve Now</button>
        </div>
      </div>

      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            className={`h-[500px] my-14 ${index === currentSlide ? 'fade-in-out' : 'hidden'}`}
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
