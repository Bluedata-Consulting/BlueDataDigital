import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Faq from "./Faq";
import IndustryUseCases from "./IndustryUseCases";
import WorkSection from "./WorkSection";
import BlockchainServices from "./BlockchainServices";
import OfferingSection from "./OfferingSection";
import CryptocurrencyDevelopment from "./CryptocurrencyDevelopment";
import Blog from "./Blog";
import { Link } from "react-router-dom";

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
      <div className="mx-auto bg-gray-100">
        <div className="relative z-20 overflow-hidden lg:grid lg:grid-cols-2 lg:pl-48 lg:pt-6">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
            <div className="lg:self-center">
              <h2 className="text-4xl leading-9 font-bold text-gray-900 sm:text-5xl lg:leading-tight">
                Revolutionize Your Business with Blockchain Technology
              </h2>
              <p className="mt-5 text-lg text-gray-900">
                Blockchain isn't just a technology; it's a game-changer that
                ensures unparalleled transparency, security, and traceability.
                Blue Data Digital specializes in harnessing the true potential
                of Blockchain. Our tailored Blockchain solutions redefine data
                integrity, security, and trust, unlocking limitless
                opportunities for businesses.
              </p>
              <p className="mt-4 text-lg text-gray-900">
                At Blue Data Digital, we take a multidisciplinary approach,
                offering custom enterprise Blockchain development services. From
                strategy assessment, rapid prototyping, and solution design to
                complex implementation and entire ecosystem management, we guide
                enterprises through a transformative journey to maximize their
                potential.
              </p>
              <Link
                to="/contact"
                style={{ backgroundColor: "#000" }}
                className="mt-8 border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium text-white transition duration-150 ease-in-out"
              >
                Get started
              </Link>
            </div>
          </div>
          <div className="relative ml-24 mt-12">
            <img
              className="relative w-2/3 h-3/4 transform translate-x-6 translate-y-6 rounded-md object-fill"
              src="bchain1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/*Section - 3*/}
      <WorkSection />

      {/*Section - 4*/}
      <BlockchainServices />

      {/*Section - 5*/}
      <OfferingSection />

      {/*Section - 6*/}
      <CryptocurrencyDevelopment />

      {/*Section - 7*/}
      <IndustryUseCases />

      {/*Section - 8*/}
      <Blog />

      {/*Section - 9*/}
      <Faq />

      <Footer />
    </div>
  );
};

export default Blockchain;
