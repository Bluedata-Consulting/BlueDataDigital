import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Blog from "./Blog";
import Faq from "./Faq";
import IndustryUseCases from "./IndustryUseCases";
import WorkSection from "./WorkSection";
import OfferingsSection from "./OfferingSection";
import { Link } from "react-router-dom";

const RPA = () => {
  return (
    <div>
      <Header />
      {/* Section - 1*/}
      <section className="py-16 md:py-32 my-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-black font-bold text-4xl md:text-7xl leading-tight mb-6">
            Blue Data Digital RPA Services
          </h1>
          <p className="text-black text-lg md:text-2xl mb-12">
            Transform Your Business Processes with Robotic Process Automation
            (RPA).
          </p>
        </div>
      </section>

      {/* Section - 2*/}
      <div className="mx-auto bg-gray-100">
        <div className="relative z-20 overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 px-10">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
            <div className="lg:self-center">
              <h2 className="text-4xl leading-9 font-bold text-gray-900 sm:text-5xl ">
                <span className="">Enhance Operations with RPA Solutions</span>
              </h2>
              <p className="mt-5 text-lg text-gray-900">
                Blue Data Digital's RPA development services empower businesses
                to automate repetitive tasks, streamline operations, and improve
                overall efficiency. Mundane and time-consuming tasks, such as
                data entry and file processing, are seamlessly handled by RPA
                bots, allowing your workforce to focus on strategic initiatives.
                Our RPA solutions are designed to elevate productivity, reduce
                errors, and enhance user experiences.
              </p>
              <p className="mt-4 text-lg  text-gray-900">
                With our RPA consulting services, we extend the automation
                capabilities by integrating RPA with cognitive technologies,
                Machine Learning, and Artificial Intelligence. Blue Data Digital
                leverages leading RPA tools, including Automation Anywhere,
                UiPath, BluePrism, Azure Logic Apps, and Azure Automation
                Services, to deliver intelligent automation solutions that make
                a measurable impact on business processes.
              </p>
              <Link
                to="/contact"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                style={{ backgroundColor: "#000" }}
                className="mt-8 border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium text-white transition duration-150 ease-in-out"
              >
                Get started
              </Link>
            </div>
          </div>
          {/* <div className="relative ml-16"> */}
          <img
            className="relative inset-0 w-4/5 h-2/3 transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-10 lg:translate-y-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GMWmP0731udNIQ2_gFzVnJaL1thiJos--Q&usqp=CAU"
            alt=""
          />
          {/* </div> */}
        </div>
      </div>

      {/*Section - 3*/}
      <OfferingsSection />

      {/*Section - 4*/}
      <WorkSection />

      {/* Section - 5*/}
      <IndustryUseCases />

      {/* Section - 6*/}
      <Blog />

      {/* Section - 7*/}
      <Faq />

      <Footer />
    </div>
  );
};

export default RPA;
