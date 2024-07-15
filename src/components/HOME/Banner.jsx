import React from 'react';
import banner from "../../assets/Banner.jpg"

const Banner = () => {
  return (
    <div className="mt-10 bg-cover bg-center h-95 sm:h-95 md:h-96 lg:h- xl:h-160" style={{ backgroundImage: "url('https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg')" }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="mb-32 text-2xl font-bold text-white sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl">Nike By You</h1>
      </div>
    </div>
  );
};

export default Banner;
