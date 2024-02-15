import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const testimonialsData = [
  {
    name: "Airtel, India",
    role: "Enterprise buisnes team",
    image:
      "https://www.bluedataconsulting.in/wp-content/uploads/2021/11/airtel-logo-white-text-vertical_customer_blue_data_consulting_telecom-150x150.jpg",
    content:
      "Getting to work with Blue Data team has been of great benefit to us, they understand data well, have good experience in suggesting right approach and tools, the consultant was experienced and helped us to speed up our project.",
  },
  {
    name: "Etisalat, UAE",
    role: "Enterprise data management team, Sharjah",
    image:
      "https://www.bluedataconsulting.in/wp-content/uploads/2021/10/etisalat-logo-150x150.png",
    content:
      "The company provided consultant to scale up our data and analytics team with Azure services in data and ML space. Our team is now more confident and faster at developing solutions.",
  },

  // Add more testimonials with a similar structure
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonialsData.length - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < testimonialsData.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      handleNext();
    }, 5000); // Change the interval as needed (e.g., every 5 seconds)

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [activeIndex]);

  const currentTestimonial = testimonialsData[activeIndex];

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold text-blue-shade-2">
          WHAT OUR CLIENTS HAVE TO SAY
        </h2>

        <div className="flex items-center justify-center">
          <div className="max-w-lg">
            <div className="mb-6">
              <img
                className="mx-auto mb-6 rounded-full border border-black shadow-lg w-24"
                src={currentTestimonial.image}
                alt="avatar"
              />
              <h5 className="mb-2 text-2xl font-bold text-blue-shade-3">
                {currentTestimonial.name}
              </h5>
              <p className="mb-4 font-medium text-xl text-blue-shade-1">
                {currentTestimonial.role}
              </p>
              <p className="mb-6 text-blue-shade-1/80 text-lg">
                {currentTestimonial.content}
              </p>
            </div>
          </div>
        </div>

        {/* Previous and Next Buttons */}
        <div className="flex justify-between">
          {/* Previous Button with Icon */}
          <div
            className="cursor-pointer text-lg text-blue-shade-1 mr-4"
            type="button"
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
            Previous
          </div>
          {/* Next Button with Icon */}
          <div
            className="cursor-pointer text-lg text-blue-shade-1  ml-4"
            type="button"
            onClick={handleNext}
          >
            Next
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
