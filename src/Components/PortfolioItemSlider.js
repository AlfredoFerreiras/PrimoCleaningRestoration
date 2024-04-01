import React from "react";

// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Slider image
import img4018 from "../Img/Slider-Portfolio/IMG_4018.png";
import img4024 from "../Img/Slider-Portfolio/IMG_4024.png";
import img4025 from "../Img/Slider-Portfolio/IMG_4025.png";
import img4026 from "../Img/Slider-Portfolio/IMG_4026.png";
import img4027 from "../Img/Slider-Portfolio/IMG_4027.png";
import img4028 from "../Img/Slider-Portfolio/IMG_4028.png";
// Arrows
import Next from "../Icons/Next";
import Prev from "../Icons/Prev";

// Styles
import "./PortfolioItemSlider.scss";

const images = [img4018, img4024, img4025, img4026, img4027, img4028];

function PortfolioItemSlider() {
  // Custom arrows
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
      id="prevSlide">
      <Prev />
    </button>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
      id="nextSlide">
      <Next />
    </button>
  );

  const settings = {
    dots: false,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="portfolioItemSlider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <div className="image">
              <img src={image} alt={`portfolio-item-${index}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PortfolioItemSlider;
