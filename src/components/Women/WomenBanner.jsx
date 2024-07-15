import React from 'react'
import Banner2 from "../../assets/banner2.png"

const WomenBanner = () => {
  return (
    <>
       <div
        className="mt-10 bg-cover bg-center h-100 sm:h-120 md:h-150 lg:h-80 xl:h-130"
        style={{ backgroundImage: `url(${Banner2})` }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="mb-32 text-2xl font-bold text-white sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl">
            {/* Add your heading text here */}
          </h1>
        </div>
      </div>
      <div></div>
    </>
  )
}

export default WomenBanner