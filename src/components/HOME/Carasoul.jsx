import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video1 from "../../assets/carasoul1.mp4";
import video2 from "../../assets/carasoul2.mp4";
import video3 from "../../assets/carasoul3.mp4"

const Carasoul = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <Slider {...settings}>
        <div className="relative sm:h-128 md:h-144 lg:h-80 xl:h-150">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={video1}
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="relative sm:h-48 md:h-64 lg:h-80 xl:h-150">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={video2}
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="relative sm:h-48 md:h-64 lg:h-80 xl:h-150">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={video3}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </Slider>
    </div>
  );
};

export default Carasoul;
