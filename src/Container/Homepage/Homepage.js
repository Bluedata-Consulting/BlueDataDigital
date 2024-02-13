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
        <section className="bg-blue-shade-5/60 pb-8 pt-16 mt-12">
          <div className="container mx-auto px-2 ">
            <div className="flex flex-wrap items-center ">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-gray-400 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-blue-shade-2 text-xl"></i>
                </div>
                <h3 className="text-[46px] mb-2 text-blue-shade-2 font-bold leading-normal">
                  Tech-Driven Collaboration
                </h3>
                <p className="text-xl font-normal leading-9 mt-4 mb-4 text-gray-800">
                  Join forces with our tech enthusiasts to bring your
                  revolutionary ideas to life. We specialize in innovative
                  technology solutions, ensuring your concepts are translated
                  into cutting-edge applications.
                </p>
                <p className="text-xl font-normal leading-9 mt-0 mb-4 text-gray-800">
                  Experience a collaborative journey into the world of
                  technology transformation. Let's build extraordinary solutions
                  together!
                </p>
                <Link
                  to="/contact"
                  className="font-bold text-xl text-blue-shade-2 mt-8"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  CONTACT US
                </Link>
              </div>
              <div className="w-3/4 pt-10 lg:py-0 md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col bg-white w-full  mb-2 shadow-gray-400 shadow-lg rounded-lg">
                  <img
                    alt="..."
                    src="tech.png"
                    className="align-middle rounded-t-lg"
                  />
                  <blockquote className="relative px-6 py-4">
                    <h4 className="text-[28px] font-bold text-blue-shade-1">
                      Cutting-Edge Tech Solutions
                    </h4>
                    <p className="text-[20px] font-normal mt-2 leading-7 text-slate-800">
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
