import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/hero/01.jpg";
import img2 from "../../assets/images/hero/02.jpg";
import img3 from "../../assets/images/hero/03.jpg";
import "./HeroSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    cssEase: "ease-out",
    beforeChange: (oldIndex, newIndex) => {
      // Remove zoom classes from old slide
      const oldSlide = slideRefs.current[oldIndex];
      if (oldSlide) {
        oldSlide.classList.remove("zoom-in", "zoom-out");
      }
    },
    afterChange: (index) => {
      setCurrentSlide(index);

      // Add zoom-in to current slide
      const current = slideRefs.current[index];
      if (current) {
        current.classList.add("zoom-in");

        // After zoom in animation ends, trigger zoom out
        setTimeout(() => {
          current.classList.remove("zoom-in");
          current.classList.add("zoom-out");
        }, 2000); // match zoomInAnim duration

        // After zoom out animation ends, remove zoom-out class
        setTimeout(() => {
          current.classList.remove("zoom-out");
        }, 4000); // total zoomIn + zoomOut duration
      }
    },
  };

  const slides = [
    {
      id: 1,
      image: img1,
      title: "Discover The",
      largeText: "Benchmark of Excellence",
    },
    {
      id: 2,
      image: img2,
      title: "Slider Caption 1",
      mediumText: "Slider Caption 2 Large Text Here",
    },
    {
      id: 3,
      image: img3,
      title: "Slider Caption 1",
      mediumText: "Slider Caption 2 Large Text Here",
    },
  ];

  return (
    <section className="relative w-full h-[250px] md:h-screen overflow-hidden">
      <div className="c-slider">
        <Slider {...settings} className="c-slider-init slick-initialized slick-slider">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="c-slide"
              ref={(el) => (slideRefs.current[index] = el)}
              style={{ position: "relative" }}
            >
              {/* Background div with zoom animations */}
              <div
                className="c-slide-bg"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />
              {/* Content */}
              <div className="c-slide-content" style={{ position: "relative", zIndex: 2 }}>
                <div className="c-wrap c-wrap--line">
                  <h2 className="c-slide__title">
                    {slide.title}
                    {slide.largeText && (
                      <span className="c-slide__title--large">{slide.largeText}</span>
                    )}
                    {slide.mediumText && (
                      <span className="c-slide__title--medium">{slide.mediumText}</span>
                    )}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSlider;
