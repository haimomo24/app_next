"use client";
import React, { useEffect, useState } from 'react'


const images = [
  'https://cdn.shopvnb.com/img/1920x640/uploads/slider/astrox88-sd-key-visual-2880x1120-_1718650445.webp',
  'https://cdn.shopvnb.com/img/1920x640/uploads/slider/65z3ltd-launch-website_1695177820.webp',
  'https://cdn.shopvnb.com/img/1920x640/uploads/slider/1000z-launch-website-banner_1695177885.webp',
];
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Thời gian chuyển ảnh, 3000ms = 3 giây

    return () => clearInterval(interval);
  }, []);
  return (
    
    <>
    <div className="relative w-full h-[320px] sm:h-[480px] md:h-[640px] mt-[20px] overflow-hidden">
  <div
    className="flex transition-transform duration-1000"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((image, index) => (
      <div
        key={index}
        className="min-w-full h-[320px] sm:h-[480px] md:h-[640px] bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    ))}
  </div>
  <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-2">
    {images.map((_, index) => (
      <div
        key={index}
        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
      ></div>
    ))}
  </div>
</div>
    </>
  )
}

export default Slider