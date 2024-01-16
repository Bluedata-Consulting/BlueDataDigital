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
            Cloud Services
          </h1>
          <p className="text-black text-lg md:text-2xl mb-12">
            Drive Business Agility and Resilience With Cloud Advisory, Roadmap,
            and Solutions.
          </p>
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
              <h2 className="text-4xl leading-9 font-bold text-gray-900 sm:text-5xl">
                <span className="">
                  Cloud Consulting Solutions to Optimize Performance and Costs
                </span>
              </h2>
              <p className="mt-5 text-lg leading-6 text-gray-900">
                Legacy IT infrastructures often fail to manage the growing load
                of applications, data, and devices, pushing businesses to
                embrace the Cloud. Implemented the right way, the Cloud can help
                organizations cut down operational costs, drive innovation, and
                address legacy challenges.
              </p>
              <p className="mt-4 text-lg leading-6 text-gray-900">
                A recognized leader in Cloud solutions consulting, Damco helps
                you unlock the true potential of the Cloud through its
                end-to-end suite of Cloud services. We closely assess your
                needs, challenges, and technology landscape to devise
                personalized, sustainable Cloud solutions that enable a
                connected and transformed future for your business. By
                leveraging our strategic partnerships with AWS, Azure, and
                Google Cloud, we help your business evolve its Cloud
                capabilities, define new revenue streams, develop Cloud-based
                applications, accelerate product release, and slash
                infrastructure costs by up to 50%.
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
          {/* <div className="relative ml-16"> */}
          <img
            className="relative inset-0 w-4/5 h-2/3 transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-10 lg:translate-y-20"
            src="https://cdn.dribbble.com/userupload/4486972/file/original-a34a27600efa88409ac5497a70976e5a.jpeg?resize=1024x768"
            alt=""
          />
          {/* </div> */}
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
      <Faq />

      {/* Section - 7*/}
      <Blog />

      <Footer />
    </div>
  );
};

export default Cloud;
