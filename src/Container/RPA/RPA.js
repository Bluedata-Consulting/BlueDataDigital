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
      <div
        className="py-64 relative bg-cover bg-clip-border backdrop-blur-sm bg-center"
        style={{ backgroundImage: 'url("bgrpa1.png")' }}
      >
        <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-gray-100 font-bold text-4xl lg:text-[55px] leading-tight mb-6">
            Blue Data Digital RPA Services
          </h1>
          <p className="text-gray-100 text-lg md:text-2xl mb-12">
            Transform Your Business Processes with Robotic Process Automation
            (RPA).
          </p>
        </div>
      </div>

      {/* Section - 2*/}
      <div className="mx-auto bg-blue-shade-5/70">
        <div className="relative z-20 overflow-hidden lg:grid lg:grid-cols-2 lg:pl-48 lg:pt-6">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
            <div className="lg:self-center">
              <h2 className="text-4xl leading-9 font-bold text-blue-shade-2 lg:text-[40px] sm:leading-10 lg:leading-tight">
                Enhance Operations with RPA Solutions
              </h2>
              <p className="w-4/5 mt-5 text-xl text-gray-800">
                Blue Data Digital's RPA development services empower businesses
                to automate repetitive tasks, streamline operations, and improve
                overall efficiency. Mundane and time-consuming tasks, such as
                data entry and file processing, are seamlessly handled by RPA
                bots, allowing your workforce to focus on strategic initiatives.
                Our RPA solutions are designed to elevate productivity, reduce
                errors, and enhance user experiences.
              </p>
              <p className="w-4/5 mt-5 text-xl text-gray-800">
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
                className="mt-8 bg-blue-shade-2 hover:bg-blue-shade-3 border border-transparent rounded-md shadow px-[12px] py-[6px] inline-flex items-center text-lg leading-6 font-medium text-white transition duration-150 ease-in-out"
              >
                Get started
              </Link>
            </div>
          </div>
          <div className="relative ml-24 mt-16">
            <img
              className="relative w-2/3 h-3/4 transform translate-x-6 translate-y-6 rounded-md object-fill"
              src="rpa1.png"
              alt=""
            />
          </div>
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
