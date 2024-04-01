import React from "react";

//Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

//Styles
import "./Carousel.scss";

function Carousel() {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className="slider-main">
      <Slider {...settings}>
        <div className="slide-1">
          <div className="text">
            <p>We are the best partner for your construction.</p>
            <h1>Precision</h1>
          </div>
        </div>

        <div className="slide-2">
          <div className="text">
            <p>We are the best partner for your construction.</p>
            <h1>Accuracy</h1>
          </div>
        </div>

        <div className="slide-3">
          <div className="text">
            <p>We are the best partner for your construction.</p>
            <h1>Quality</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
