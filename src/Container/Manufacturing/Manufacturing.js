import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Features from "./Features";
import Blog from "./Blog";
import Services from "./Services";

const Manufacturing = () => {
  return (
    <div>
      <Header />
      {/*Hero Section*/}

      <section className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-5xl">
              <span className="block xl:inline">
                Manufacturing Analytics Solutions
              </span>
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
              className="mx-4 lg:pt-0 object-cover md:scale-75 lg:h-full lg:w-full lg:scale-110"
              src="MAS.png"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* <section className="pt-32">
        <div className="my-20 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-normal font-bold text-blue-shade-2 md:text-[40px]">
              <span>Manufacturing Analytics Solutions</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-[18px] lg:mx-0">
              Discover the transformative potential of manufacturing analytics
              and drive your business toward unprecedented success.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-shade-3 hover:bg-blue-shade-2 md:text-lg"
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
          </div>
          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="MAS.png"
              alt=""
            />
          </div>
        </div>
      </section> */}

      {/* Features Section*/}
      <Features />

      <Services />
      <Blog />

      <Footer />
    </div>
  );
};

export default Manufacturing;
