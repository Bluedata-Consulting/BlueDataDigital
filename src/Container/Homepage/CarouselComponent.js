import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import image1 from "../../Assets/1.jpg";
import image2 from "../../Assets/2.jpeg";

const slides = [image1, image2];

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen ">
      {slides.map((image, index) => (
        <Transition
          key={index}
          show={index === activeIndex}
          enter="transition-opacity duration-1500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute inset-0 transition duration-1500 ease-in-out"
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover transition-opacity duration-1500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          <div className="absolute px-4 py-10 lg:px-24 bottom-10 w-full text-white">
            <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl xl:text-6xl">
              People who really care about your business
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              ipsam nulla aperiam quo possimus, nihil molestiae modi tenetur
              esse qui repudiandae cum fuga aspernatur ea?
            </p>
            <div className="mt-8">
              <button
                type="button"
                className="rounded-md bg-white px-4 py-2 text-md font-semibold text-black shadow-sm hover:bg-gray-2 00 focus:outline-none focus:ring focus:border-blue-300"
              >
                ABOUT US
              </button>
            </div>
          </div>
        </Transition>
      ))}

      <div className="absolute bottom-4 flex justify-center w-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full mx-2 ${
              index === activeIndex ? "bg-white" : "bg-gray-500"
            } hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-300`}
            aria-label={`Go to Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default CarouselComponent;
