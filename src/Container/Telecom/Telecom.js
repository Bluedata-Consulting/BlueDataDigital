import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FeaturesSection from "./FeaturesSection";
import WhyUs from "./WhyUs";
import Benefits from "./Benefits";
import Blog from "./Blog";
import ImageTele from "../../Assets/telecom.jpg";

const Telecom = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="pt-24">
        <div className="mx-auto w-[90%] lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-blue-shade-2 md:text-4xl lg:text-5xl lg:leading-tight">
              Telecom Analytics Services
            </h1>
            <p className="mt-8 text-lg text-gray-800">
              Looking to engineer a smarter future with data? You need a correct
              blend of technical skills, experience and business knowledge.
              Count on us to deliver these in the exact measure.
            </p>
            <div className="mt-8 flex items-start space-x-2">
              <Link
                to="/contact"
                className="rounded-md bg-blue-shade-3 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-shade-2"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img className=" object-cover " src={ImageTele} alt="" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-blue-shade-5/60 flex flex-col space-y-8 py-16">
        <p className="text-3xl font-bold text-blue-shade-2 md:text-4xl text-center">
          What is Telecom Analytics?
        </p>
        <p className="text-lg w-[80%] mx-auto text-gray-700 md:text-xl md:leading-8 text-center">
          We are a specialized data engineering services company, with a deep
          understanding of data engineering principles and best practices. We
          apply this knowledge to design and implement effective solutions for
          businesses.
        </p>
      </div>

      {/* Hero Section */}
      <FeaturesSection />

      <Benefits />
      {/* Hero Section */}
      <WhyUs />
      <Blog />
      <Footer />
    </div>
  );
};

export default Telecom;
