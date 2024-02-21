import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FeaturesSection from "./FeaturesSection";
import WhyUs from "./WhyUs";
import Benefits from "./Benefits";
import Blog from "./Blog";
const Telecom = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}

      <section className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-t">
              <span className="block xl:inline">Enrich your </span>
              <span className="block text-blue-shade-2/90 xl:inline">
                Telecom Analytics
              </span>
              <span className="block xl:inline"> business</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Looking to engineer a smarter future with data? You need a correct
              blend of technical skills, experience and business knowledge.
              Count on us to deliver these in the exact measure.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-shade-2/90 hover:bg-gray-600 md:text-lg "
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            <img
              className="ml-4 lg:pt-0 object-fit md:h-full scale-105"
              src="TAS-icon2.png"
              alt=""
            />
          </div>
        </div>
      </section>

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
