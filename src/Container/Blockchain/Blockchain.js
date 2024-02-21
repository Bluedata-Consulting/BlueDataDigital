import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Faq from "./Faq";
import WorkSection from "./WorkSection";
import OfferingSection from "./OfferingSection";
import CryptocurrencyDevelopment from "./CryptocurrencyDevelopment";
import Blog from "./Blog";
import Section from "./Section";
import CtaSection from "./CtaSection";

const Blockchain = () => {
  return (
    <div>
      <Header />
      {/* Section - 1*/}

      <div
        className="py-64 relative bg-cover bg-clip-border backdrop-blur-sm bg-center"
        style={{ backgroundImage: 'url("bgblockchain.png")' }}
      >
        <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-gray-100 font-bold text-4xl lg:text-[55px] leading-tight mb-6">
            Blockchain Solutions by Blue Data Digital
          </h1>
          <p className="text-gray-100 text-lg md:text-2xl mb-12">
            Elevate Your Business with Cutting-Edge Blockchain Development.
          </p>
        </div>
      </div>

      {/* Section - 2*/}
      <CtaSection />

      {/*Section - 3*/}
      <OfferingSection />

      {/*Section - 4*/}
      <WorkSection />

      {/*Section - 5*/}
      <CryptocurrencyDevelopment />

      {/*Section - 6*/}
      <Section />
      {/* <IndustryUseCases /> */}

      {/*Section - 7*/}
      <Blog />

      {/*Section - 8*/}
      <Faq />

      <Footer />
    </div>
  );
};

export default Blockchain;
