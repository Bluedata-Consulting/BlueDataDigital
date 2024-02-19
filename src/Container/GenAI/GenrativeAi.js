import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// import { Link } from "react-router-dom";
import MainFeatures from "./MainFeatures";
import Blog from "./Blog";
import Faq from "./Faq";
import Principle from "./Principle";
import Section from "./Section";
import CtaSection from "./CtaSection";
// import IndustryUseCases from "./IndustryUseCases";

const GenrativeAi = () => {
  return (
    <div>
      <Header />
      {/* Section - 1*/}
      <div
        className="py-64 relative bg-cover bg-clip-border backdrop-blur-sm bg-center"
        style={{ backgroundImage: 'url("bggenai1.png")' }}
      >
        <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-gray-100 font-bold text-4xl lg:text-[55px] leading-tight mb-6">
            Empower Your Generative AI Journey
          </h1>
          <p className="text-gray-100 text-lg md:text-2xl mb-12">
            Revolutionize Your Business with Blue Data Digital's Generative AI
            Solutions.
          </p>
        </div>
      </div>

      {/* Section - 2*/}
      <CtaSection />

      {/*Section - 3*/}
      <Principle />

      {/*Section - 4*/}
      <MainFeatures />

      {/*Section - 5*/}
      <Section />
      {/* <IndustryUseCases /> */}

      {/*Section - 6*/}
      <Blog />

      {/*Section - 7*/}
      <Faq />

      <Footer />
    </div>
  );
};

export default GenrativeAi;
