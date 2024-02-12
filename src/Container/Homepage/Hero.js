// Hero.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {ChevronRight} from "lucide-react";

const slides = [
  {
    id: 1,
    image: "homepage1.png",
    heading: "Genrative\nAI",
    subheading: "Redifne execution boundaries \nto maximize productivity",
    link: "/article-1",
  },
  {
    id: 2,
    image: "homepage2.jpg",
    heading: "Innovate \nSolutions",
    subheading:
      "Unleash creativity and drive innovation\n with our AI-powered tools",
    link: "/article-2",
  },
  {
    id: 3,
    image: "homepage3.png",
    heading: "Optimize \nWorkflow",
    subheading:
      "Streamline processes and optimize workflow\n efficiency for greater results",
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
          <div className="absolute flex flex-col h-full w-full top-0 start-0 items-end justify-center">
            <div className=" text-white mr-36 mt-16">
              <h1
                className="mt-2 text-3xl font-bold tracking-wide lg:text-7xl text-right"
                style={{ whiteSpace: "pre-line" }}
              >
                {slide.heading}
              </h1>
              <p
                className="mt-3 mb-5 text-xl lg:text-3xl tracking-normal text-gray-300 text-right"
                style={{ whiteSpace: "pre-line" }}
              >
                {slide.subheading}
              </p>
              <div className="justify-end flex items-center"> 
                <Link
                  to={currentLink}
                  className="mt-4 bg-transparent text-white border-white border-2  text-xl font-semibold px-4 py-2 rounded-xl flex items-center"
                >
                  Click Here
                  <ChevronRight className="ml-2" />
                </Link>
              </div>
            </div>
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
