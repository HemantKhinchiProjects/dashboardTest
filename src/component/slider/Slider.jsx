import React, { useEffect, useState } from "react";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const Slider = () => {
  const [owlInstance, setOwlInstance] = useState(null);
  const slides = [
    { title: "Slide 1", description: "Description 1" },
    { title: "Slide 2", description: "Description 2" },
    { title: "Slide 3", description: "Description 3" },
    { title: "Slide 4", description: "Description 4" },
    { title: "Slide 5", description: "Description 5" },
    { title: "Slide 6", description: "Description 6" },
    { title: "Slide 7", description: "Description 7" },
    { title: "Slide 8", description: "Description 8" },
  ];

  useEffect(() => {
    const options = {
      items: 4,
      loop: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      dots: false,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    };

    const $slider = $(".owl-carousel").owlCarousel(options);

    setOwlInstance($slider);

    return () => {
      $slider.trigger("destroy").owlCarousel();
    };
  }, []);

  const handleNextSlide = () => {
    owlInstance.trigger("next.owl.carousel");
  };

  const handlePrevSlide = () => {
    owlInstance.trigger("prev.owl.carousel");
  };

  return (
    <div className="slider owl-carousel">
      <div className="slider-content">
        <ul className="slider-list">
          {slides.map((slide, index) => (
            <li key={index} className={`slide ${index === 0 ? "active" : ""}`}>
              <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
              <p className="text-gray-700">{slide.description}</p>
              <div className="mt-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Read more...
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="slider-controls">
        <button className="slider-prev" onClick={handlePrevSlide}>
          Prev
        </button>
        <button className="slider-next" onClick={handleNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
