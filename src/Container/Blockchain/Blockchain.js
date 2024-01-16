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

const Blockchain = () => {
  return (
    <div>
      <Header />
      {/* Section - 1*/}
      <section className="py-16 md:py-32 my-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-black font-bold text-4xl md:text-7xl leading-tight mb-6">
            Blockchain Development Services
          </h1>
          <p className="text-black text-lg md:text-2xl mb-12">
            Power Up Business Operations with Blockchain.
          </p>
          <a
            href="/"
            className="bg-gray-900 text-white text-normal font-semibold py-2 px-4 rounded-md hover:bg-gray-00 hover:text-white transition duration-200"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Section - 2*/}
      <div className="mx-auto bg-gray-100">
        <div
          className="relative z-20 overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 px-10"
          // style={{
          //   backgroundImage:
          //     "linear-gradient(to left bottom, #f87171, #f55979, #ee4085, #e12896, #cb18a9, #bd12b5, #aa16c1, #921fce, #881ed5, #7d1fdc, #6e21e3, #5c24eb)",
          // }}
        >
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
            <div className="lg:self-center">
              <h2 className="text-4xl leading-9 font-bold text-gray-900 sm:text-5xl ">
                <span className="">
                  Blockchain for Enhanced Transparency, Security, and
                  Traceability
                </span>
              </h2>
              <p className="mt-5 text-lg leading-6 text-gray-900">
                Blockchain is not just another disruptive solution, it’s a
                next-gen technological advancement that is poised to challenge
                conventions, transcend boundaries, and unlock limitless
                opportunities. At its core, Blockchain development is about
                rewriting the rules of data integrity, security, trust, and
                efficiency. Embark on a transformative journey with Blockchain
                web development to transform businesses across industries,
                empower individuals, and redefine the true essence of the
                digital revolution.
              </p>
              <p className="mt-4 text-lg leading-6 text-gray-900">
                Understanding the business and requirements, we follow a
                multidisciplinary approach to provide custom enterprise
                Blockchain development services- starting with strategy
                assessment, rapid prototyping, solution design, complex
                implementation to third-party integration, add-ons and entire
                ecosystem management to help enterprises stay focused and
                maximize transformation.
              </p>
              <a
                href="/"
                target="_blank"
                style={{ backgroundColor: "#000" }}
                className="mt-8 border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium text-white transition duration-150 ease-in-out"
              >
                Get started
              </a>
            </div>
          </div>
          {/* <div className="relative ml-16"> */}
          <img
            className="relative inset-0 w-4/5 h-2/3 transform translate-x-6 translate-y-6 rounded-md object-fill object-left-top sm:translate-x-10 lg:translate-y-20"
            src="https://cdn.dribbble.com/userupload/3248213/file/original-5d429eb2c795419666fddabde548bc4b.png?resize=1024x768"
            alt=""
          />
          {/* </div> */}
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
      <Faq />

      {/*Section - 9*/}
      <Blog />

      <Footer />
    </div>
  );
};

export default Blockchain;
