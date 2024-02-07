import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Blog from "./Blog";
import Faq from "./Faq";
import IndustryUseCases from "./IndustryUseCases";
import WorkSection from "./WorkSection";
import OfferingsSection from "./OfferingSection";
import CloudPartners from "./CloudPartners";
import { Link } from "react-router-dom";

const Cloud = () => {
  return (
    <div>
      <Header />

      {/* Section - 1*/}
      <section className="py-16 md:py-32 my-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-black font-bold text-4xl md:text-7xl leading-tight mb-6">
            Cloud Services for Tech Transformation
          </h1>
          <p className="text-black text-lg md:text-2xl mb-12">
            Powering Tech Transformation with Cloud Expertise at Blue Data
            Digital.
          </p>
        </div>
      </section>

      {/* Section - 2*/}
      <div className="mx-auto bg-gray-100">
        <div className="relative z-20 overflow-hidden lg:grid lg:grid-cols-2 lg:pl-48 lg:pt-6">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
            <div className="lg:self-center">
              <h2 className="text-4xl leading-9 font-bold text-gray-900 sm:text-5xl lg:leading-tight">
                <span className="">
                  Transforming Businesses with Cloud Consulting
                </span>
              </h2>
              <p className="mt-5 text-lg leading-6 text-gray-900">
                Legacy IT infrastructures often struggle to cope with the
                evolving demands of applications, data, and devices. Blue Data
                Digital guides businesses through a strategic Cloud adoption
                process, reducing operational costs, fostering innovation, and
                overcoming legacy challenges.
              </p>
              <p className="mt-4 text-lg leading-6 text-gray-900">
                As a leading tech consulting company, Blue Data Digital
                specializes in Cloud solutions. We assess your unique needs,
                challenges, and technology landscape to create personalized,
                sustainable Cloud solutions. Leveraging strategic partnerships
                with AWS, Azure, and Google Cloud, we help your business evolve
                its Cloud capabilities, define new revenue streams, develop
                Cloud-based applications, accelerate product releases, and
                reduce infrastructure costs significantly.
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
              className="relative w-2/3 h-4/5 transform translate-x-6 translate-y-6 rounded-md object-cover"
              src="cc1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/*Section - 3*/}
      <OfferingsSection />

      {/*Section - 4*/}
      <CloudPartners />

      {/*Section - 5*/}
      <WorkSection />

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
