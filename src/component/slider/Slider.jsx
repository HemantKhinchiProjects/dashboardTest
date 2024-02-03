import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const Slider = () => {
  const [owlInstance, setOwlInstance] = useState(null);
  const slides = [
    {
      title: "How FDs are taxed",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "How FDs are taxed",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "How FDs are taxed",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "How FDs are taxed",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "How FDs are taxed",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "How FDs are taxed",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "How FDs are taxed",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "How FDs are taxed",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
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
      // +instance.enter(true);
    },
  };
  // useEffect(() => {
  //   if (owlInstance) {
  //     owlInstance.enter(true);
  //   }
  // }, [owlInstance]);

  return (
    <div className="slider owl-carousel" style={{ display: "block" }}>
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
          <div
            key={index}
            className="bg-white text-xl rounded-lg shadow p-8 mr-4"
          >
            <h2 className="text-xl font-semibold mb-4">{slide.title}</h2>
            <p className="text-sm  mb-4">{slide.description}</p>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Slider;
