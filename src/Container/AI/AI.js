import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import OfferingsSection from "./OfferingSection";
import WorkSection from "./WorkSection";
import IndustryUseCases from "./IndustryUseCases";
import Blog from "../Article/Blog";
import Faq from "./Faq";
import { Link } from "react-router-dom";
const AI = () => {
  return (
    <>
      <Header />

      {/* Section - 1*/}
      <div
        className="py-64 relative bg-cover bg-clip-border backdrop-blur-sm bg-center"
        style={{ backgroundImage: 'url("bgai.png")' }}
      >
        <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-gray-100 font-bold text-4xl lg:text-[55px] leading-tight mb-6">
            Artificial Intelligence & Machine Learning Services
          </h1>
          <p className="text-gray-100 text-lg md:text-2xl mb-12">
            Efficient, Accurate, and Automated Systems for Amplified Business
            Intelligence.
          </p>
        </div>
      </div>

      {/* Section - 2*/}
      <div className="mx-auto bg-gray-100">
        <div className="relative z-20 overflow-hidden lg:grid lg:grid-cols-2 lg:pl-48 lg:pt-6">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
            <div className="lg:self-center">
              <h2 className="text-4xl leading-9 font-bold text-gray-900 lg:text-[40px] sm:leading-10 lg:leading-tight">
                <span className="">AI & ML Solutions for Automation</span>
              </h2>
              <p className="w-4/5 mt-5 text-xl text-gray-900">
                Blue Data Digital is a leading tech consulting company, offering
                state-of-the-art Artificial Intelligence and Machine Learning
                solutions. In an era where technology is driving rapid
                transformations, our AI & ML services empower businesses to
                innovate, automate processes, and gain a competitive edge .
              </p>
              <p className="w-4/5 mt-4 text-xl  text-gray-900">
                With Blue Data Digital’s expertise, you can harness the power of
                AI to automate operations, enhance analytics, and future-proof
                your business. Our AI & ML consulting services unlock new
                possibilities, allowing you to derive valuable insights and tap
                into new revenue streams by leveraging the full potential of
                your data.
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
          <div className="relative ml-24 mt-12">
            <img
              className="relative w-2/3 h-3/4 scale-125 transform translate-x-6 translate-y-6 rounded-md"
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
    </>
  );
};

export default AI;
