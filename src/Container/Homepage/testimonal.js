import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const testimonialsData = [
  {
    name: "Maria Kate",
    role: "Photographer",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg",
    content:
      "In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam sed cursus lectus. Proin non rutrum magna. Proin gravida, justo et imperdiet tristique turpis nisi viverra.",
    rating: 5,
  },
  {
    name: "John Doe",
    role: "Web Developer",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel magna sit amet erat lacinia rutrum eu in leo. Curabitur ut ex vel augue fringilla interdum ut eu libero.",
    rating: 4,
  },
  {
    name: "Alice Smith",
    role: "Graphic Designer",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).jpg",
    content:
      "Sed euismod est eget sapien tincidunt, id ullamcorper elit volutpat. In non lacus eu lectus egestas ultricies eget in elit. Sed vel elit id arcu vulputate tristique.",
    rating: 5,
  },
  {
    name: "Bob Johnson",
    role: "Marketing Specialist",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).jpg",
    content:
      "Nullam a est ut tellus feugiat fringilla. Ut et gravida sem, sit amet elementum ligula. Integer ut ligula in dui consectetur feugiat. Donec eu rhoncus metus.",
    rating: 3,
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
        <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

        <div className="flex items-center justify-center">
          <div className="max-w-lg">
            <div className="mb-6">
              <img
                className="mx-auto mb-6 rounded-full shadow-lg w-24"
                src={currentTestimonial.image}
                alt="avatar"
              />
              <h5 className="mb-2 text-lg font-bold">
                {currentTestimonial.name}
              </h5>
              <p className="mb-4 font-medium text-gray-700">
                {currentTestimonial.role}
              </p>
              <p className="mb-6 text-gray-500">{currentTestimonial.content}</p>
            </div>
          </div>
        </div>

        {/* Previous and Next Buttons */}
        <div className="flex justify-between">
          {/* Previous Button with Icon */}
          <button
            className="text-gray-700 mr-4"
            type="button"
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
            Previous
          </button>
          {/* Next Button with Icon */}
          <button
            className="text-gray-700 ml-4"
            type="button"
            onClick={handleNext}
          >
            Next
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
