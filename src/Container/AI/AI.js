import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import OfferingsSection from "./OfferingSection";
import WorkSection from "./WorkSection";
import IndustryUseCases from "./IndustryUseCases";
import Blog from "./Blog";
import Faq from "./Faq";
const AI = () => {
  return (
    <div>
      <Header />

      {/* Section - 1*/}
      <section className="py-16 md:py-32 my-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-black font-bold text-4xl md:text-7xl leading-tight mb-6">
            Welcome to our Colorful World
          </h1>
          <p className="text-black text-lg md:text-2xl mb-12">
            Experience the magic of colors with our unique products and
            services.
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
              <h2 className="text-4xl leading-9 font-bold text-gray-900 sm:text-5xl sm:leading-10">
                <span className="">AI & ML Solutions for Automation</span>
              </h2>
              <p className="mt-5 text-lg leading-6 text-gray-900">
                Artificial Intelligence and Machine Learning are regarded as one
                of the most revolutionary technologies of the current times. The
                global market for AI & ML is predicted to reach a whopping $18
                trillion in 2030, up from $93 billion in 2021. Companies are
                steadily integrating AI into their operations, with 56% of the
                businesses reporting AI adoption in one or more functions.
                Artificial Intelligence and Machine Learning solutions are
                helping businesses succeed by identifying trends, enabling smart
                decision-making, and developing market-winning strategies.
              </p>
              <p className="mt-4 text-lg leading-6 text-gray-900">
                With Damco’s Artificial Intelligence & Machine Learning
                services, you can automate processes, strengthen customer
                relations, leverage enhanced analytics, and future-proof your
                business processes; ensuring you stay relevant to the evolving
                market and customer needs. Leveraging our AI & ML consulting and
                solutions, the possibilities become endless, where you can draw
                new insights and tap into new business revenue streams by making
                the best use of your data.
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
            className="relative inset-0 w-4/5 h-2/3 transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-10 lg:translate-y-20"
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxsYXB0b3B8ZW58MHwwfHx8MTY5NzQ0ODQ4M3ww&ixlib=rb-4.0.3&q=80&w=1080"
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
      <Faq />

      {/* Section - 7*/}
      <Blog />
      <Footer />
    </div>
  );
};

export default AI;
