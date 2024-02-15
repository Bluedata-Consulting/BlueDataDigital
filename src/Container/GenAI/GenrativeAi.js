import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import MainFeatures from "./MainFeatures";
import Blog from "./Blog";
import Faq from "./Faq";
import Principle from "./Principle";
import IndustryUseCases from "./IndustryUseCases";

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
      <div className="mx-auto bg-blue-shade-5/70">
        <div className="relative z-20 overflow-hidden lg:grid lg:grid-cols-2 lg:pl-48 lg:pt-6">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
            <div className="lg:self-center">
              <h2 className="text-4xl leading-9 font-bold text-blue-shade-2 lg:text-[40px] sm:leading-10 lg:leading-tight">
                Elevate Your Business with Generative AI Technology
              </h2>
              <p className="w-4/5 mt-5 text-xl text-gray-800">
                Blue Data Digital is your trusted partner in navigating the
                world of generative AI. Our skilled tech experts harness the
                potential of advanced AI algorithms to craft tailor-made
                solutions that align seamlessly with your unique requirements.
                Whether you're looking to optimize operations, generate
                innovative ideas, or deliver exceptional customer experiences,
                our expertise and experience will propel your business into the
                future.
              </p>
              <p className="w-4/5 mt-5 text-xl text-gray-800">
                Our generative AI solutions are built with scalability in mind,
                adapting to your evolving needs seamlessly. And because we
                understand the importance of data security, we prioritize the
                highest standards of privacy and protection.
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
          <div className="relative ml-24 mt-12">
            <img
              className="relative w-2/3 h-3/4 transform translate-x-6 translate-y-6 rounded-md object-fill"
              src="genai.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/*Section - 3*/}
      <Principle />

      {/*Section - 4*/}
      <MainFeatures />

      {/*Section - 5*/}
      <IndustryUseCases />

      {/*Section - 6*/}
      <Blog />

      {/*Section - 7*/}
      <Faq />

      <Footer />
    </div>
  );
};

export default GenrativeAi;
