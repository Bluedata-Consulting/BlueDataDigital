// Hero.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import slide1 from "../../Assets/B1.png";
import slide2 from "../../Assets/B2.png";
import slide3 from "../../Assets/benefit.png";

const slides = [
  {
    id: 1,
    image: slide1,
    heading: "GenAI",
    subheading: "REDEFINE EXECUTION BOUNDARIES TO MAXIMIZE PRODUCTIVITY",
    link: "/article-1",
  },
  {
    id: 2,
    image: slide2,
    heading: "Innovate Solutions",
    subheading:
      "UNLEASH CREATIVITY AND DRIVE INNOVATION WITH OUR AI-POWERED TOOLS",
    link: "/article-2",
  },
  {
    id: 3,
    image: slide3,
    heading: "Optimize Workflow",
    subheading:
      "STREAMLINE PROCESSES AND OPTIMIZE WORKFLOW EFFICIENCY FOR GREATER RESULTS",
    link: "/article-3",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentLink, setCurrentLink] = useState(slides[0].link);

  useEffect(() => {
    setCurrentLink(slides[currentSlide - 1].link);
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 1 ? slides.length : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length ? 1 : prev + 1));
  };

  return (
    <div className="relative h-screen">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition duration-1500 ease-in-out ${
            currentSlide === slide.id ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="w-full h-full object-cover transition-opacity duration-1500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          <div className="absolute px-4 pb-32 lg:pl-48 bottom-10 w-full text-white">
            <h1 className="mt-2 max-w-4xl text-3xl font-bold tracking-tight md:text-7xl">
              {slide.heading}
            </h1>
            <p className="mt-3 mb-5 max-w-3xl text-lg md:text-2xl text-gray-300">
              {slide.subheading}
            </p>
            <Link
              to={currentLink}
              className="mt-4 bg-gray-200 text-black text-lg font-semibold px-4 py-2 rounded hover:bg-gray-50/95"
            >
              Click Here
            </Link>
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 start-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
          <svg
            className="w-4 h-4 text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        className="absolute top-1/2 end-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 ">
          <svg
            className="w-4 h-4 text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Hero;
