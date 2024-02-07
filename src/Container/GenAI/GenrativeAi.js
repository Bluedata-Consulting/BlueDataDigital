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
      <section className="py-16 md:py-32 my-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-black font-bold text-4xl md:text-7xl leading-tight mb-6">
            Empower Your Generative AI Journey
          </h1>
          <p className="text-black text-lg md:text-2xl mb-12">
            Revolutionize Your Business with Blue Data Digital's Generative AI
            Solutions.
          </p>
        </div>
      </section>

      {/* Section - 2*/}
      <div className="mx-auto bg-gray-100">
        <div className="relative z-20 overflow-hidden lg:grid lg:grid-cols-2 lg:pl-48 lg:pt-6">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
            <div className="lg:self-center">
              <h2 className="text-4xl leading-9 font-bold text-gray-900 sm:text-5xl sm:leading-10 lg:leading-tight">
                <span className="">
                  Elevate Your Business with Generative AI Technology
                </span>
              </h2>
              <p className="w-4/5 mt-5 text-xl text-gray-900">
                Blue Data Digital is your trusted partner in navigating the
                world of generative AI. Our skilled tech experts harness the
                potential of advanced AI algorithms to craft tailor-made
                solutions that align seamlessly with your unique requirements.
                Whether you're looking to optimize operations, generate
                innovative ideas, or deliver exceptional customer experiences,
                our expertise and experience will propel your business into the
                future.
              </p>
              <p className="w-4/5 mt-4 text-xl  text-gray-900">
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
                style={{ backgroundColor: "#000" }}
                className="mt-8 border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium text-white transition duration-150 ease-in-out"
              >
                Get started
              </Link>
            </div>
          </div>
          <div className="relative ml-24 mt-12">
            <img
              className="relative w-2/3 h-3/4 transform translate-x-6 translate-y-6 rounded-md object-contain"
              src="genai.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/*Section - 3*/}
      <MainFeatures />

      {/*Section - 4*/}
      <IndustryUseCases />

      {/*Section - 5*/}
      <Principle />

      {/*Section - 6*/}
      <Blog />

      {/*Section - 7*/}
      <Faq />

      <Footer />
    </div>
  );
};

export default GenrativeAi;
