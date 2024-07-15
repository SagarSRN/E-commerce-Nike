import React from 'react'
import banner3 from '../../assets/banner3.jpg'
import { Button } from 'react-bootstrap'

const KidsBanner = () => {
  return (
    <>
     <div
        className="mt-10 bg-cover bg-center h-100 sm:h-120 md:h-150 lg:h-80 xl:h-130"
        style={{ backgroundImage: `url(${banner3})` }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className=" text-1.5xl font-bold text-black sm:text-1xl md:text-1xl lg:text-1xl xl:text-1xl">
            <button className='btn mr-96 mt-96 bg-white px-8 py-2 text-black rounded-full'>SignUP</button>
          </h1>
        </div>
      </div>
      <div></div>
    </>
  )
}

export default KidsBanner