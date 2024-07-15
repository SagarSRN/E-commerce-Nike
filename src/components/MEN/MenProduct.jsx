import React from 'react';
import Carasoul from '../HOME/Carasoul';
import banner1 from '../../assets/banner1.jpeg';


const MenProduct = () => {
  return (
    <>
      <Carasoul />
      <div
        className="mt-10 bg-cover bg-center h-60 sm:h-95 md:h-80 lg:h-160 xl:h-160"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="mb-32 text-2xl font-bold text-white sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl">
            {/* Add your heading text here */}
          </h1>
        </div>
      </div>
      <div>

      </div>
    </>
    
  );
};

export default MenProduct;
