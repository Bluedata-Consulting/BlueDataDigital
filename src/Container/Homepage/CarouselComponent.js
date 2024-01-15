import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import B1 from "../../Assets/B1.png";
import B2 from "../../Assets/B2.png";

const slides = [B1, B2];

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 2500);
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
              <Link
                to="/about"
                type="button"
                className="rounded-md bg-white px-4 py-2 text-md font-semibold text-black shadow-sm hover:bg-gray-2 00 focus:outline-none focus:ring focus:border-blue-300"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                ABOUT US
              </Link>
            </div>
          </div>
        </Transition>
      ))}
    </section>
  );
};

export default CarouselComponent;
