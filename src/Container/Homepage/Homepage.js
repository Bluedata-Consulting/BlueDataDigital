import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Faq from "./Faq";
import Blog from "../Article/Blog";
import Hero from "./Hero";
import ServiceSection from "./ServiceSection";

const Homepage = () => {
  return (
    <div className="relative">
      <Header />
      <Hero />

      <div className="relative z-10 bg-white">
        {/* Features Section */}
        
        <ServiceSection />

        {/* Section - 4 */}
        <section className="bg-cyan-50/95 pb-16 pt-12 my-16">
          <div className="container mx-auto px-2 ">
            <div className="flex flex-wrap items-center ">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-gray-400 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-5xl mb-2 font-bold leading-normal">
                  Tech-Driven Collaboration
                </h3>
                <p className="text-xl font-normal leading-9 mt-4 mb-4 text-gray-600">
                  Join forces with our tech enthusiasts to bring your
                  revolutionary ideas to life. We specialize in innovative
                  technology solutions, ensuring your concepts are translated
                  into cutting-edge applications.
                </p>
                <p className="text-xl font-normal leading-9 mt-0 mb-4 text-gray-600">
                  Experience a collaborative journey into the world of
                  technology transformation. Let's build extraordinary solutions
                  together!
                </p>
                <Link
                  to="/contact"
                  className="font-bold text-xl text-gray-800 mt-8"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact Us
                </Link>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-gray-400 shadow-lg rounded-lg">
                  <img
                    alt="..."
                    src="tech.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      {/* <polygon
                        points="-30,95 583,95 583,65"
                        className="text-my-orange fill-current"
                      ></polygon> */}
                    </svg>

                    <h4 className="text-2xl font-bold text-gray-900">
                      Cutting-Edge Tech Solutions
                    </h4>
                    <p className="text-lg font-normal mt-2 text-gray-700">
                      Dive into the world of unparalleled expertise and
                      cutting-edge tech solutions. We bring your ideas to life
                      with a blend of creativity and technology, delivering
                      results that set your business apart.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Blog />
        <Faq />
      </div>
      {/* Footer */}
      
      <Footer />
    </div>
  );
};

export default Homepage;
