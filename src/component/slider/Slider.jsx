import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "tailwindcss/tailwind.css";

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

  const options = {
    items: 4,
    loop: true,
    autoplay: true,
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
    onInitialized: (instance) => {
      setOwlInstance(instance);
    },
  };

  return (
    <div className="slider owl-carousel">
      <div className="slider-controls">
        <button className="slider-prev" onClick={() => owlInstance.prev()}>
          Prev
        </button>
        <button className="slider-next" onClick={() => owlInstance.next()}>
          Next
        </button>
      </div>
      <OwlCarousel
        className="owl-theme"
        ref={(ref) => setOwlInstance(ref)}
        {...options}
      >
        {slides.map((slide, index) => (
          <div key={index} className="bg-white text-xl rounded-lg shadow p-8">
            <h2 className="mb-2">{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Slider;
