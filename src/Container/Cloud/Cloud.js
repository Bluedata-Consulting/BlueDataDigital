import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Blog from "./Blog";
import Faq from "./Faq";
import IndustryUseCases from "./IndustryUseCases";
import WorkSection from "./WorkSection";
import OfferingsSection from "./OfferingSection";
import CloudPartners from "./CloudPartners";
import CtaSection from "./CtaSection";

const Cloud = () => {
  return (
    <div>
      <Header />

      {/* Section - 1*/}

      <div
        className="py-64 relative bg-cover bg-clip-border backdrop-blur-sm bg-center"
        style={{ backgroundImage: 'url("bgcc2.png")' }}
      >
        <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-gray-100 font-bold text-4xl lg:text-[55px] leading-tight mb-6">
            Cloud Services for Tech Transformation
          </h1>
          <p className="text-gray-100 text-lg md:text-2xl mb-12">
            Powering Tech Transformation with Cloud Expertise at Blue Data
            Digital.
          </p>
        </div>
      </div>

      {/* Section - 2*/}
      <CtaSection />

      {/*Section - 3*/}
      <OfferingsSection />

      {/*Section - 4*/}
      <WorkSection />

      {/*Section - 5*/}
      <CloudPartners />

      {/* Section - 6*/}
      <IndustryUseCases />

      {/* Section - 6*/}
      <Blog />

      {/* Section - 7*/}
      <Faq />

      <Footer />
    </div>
  );
};

export default Cloud;
