import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { DollarSign, Filter, Moon, Zap } from "lucide-react";
import Footer from "../../Components/Footer/Footer";
// import CarouselComponent from "./CarouselComponent";
import Faq from "./Faq";
import Blog from "../Article/Blog";
import Hero from "./Hero";

const Homepage = () => {
  return (
    <div className="relative">
      <Header />
      <Hero />

      <div className="relative z-10 bg-white">
        {/* Features Section */}
        <div className="mx-auto my-12 px-4 lg:max-w-[90rem] sm:px-6 md:my-24 lg:my-32 lg:px-8">
          <div className="mx-auto text-center">
            <h2 className="mt-6 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
              Powering Innovation with Blue Data Digital
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-gray-600">
              Explore our expertise in AI, Blockchain, and ML for cutting-edge
              solutions. Blue Data Digital is your partner in technology
              innovation across various industries.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <DollarSign className="h-9 w-9 text-gray-700" />
              </div>
              <h3 className="mt-8 text-2xl font-bold text-black">
                AI-Driven Strategies
              </h3>
              <p className="mt-2 text-lg text-gray-700">
                Craft AI-driven strategies for business success. Blue Data
                Digital specializes in strategic data consulting, leveraging
                artificial intelligence to optimize operations.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <Zap className="h-9 w-9 text-gray-700" />
              </div>
              <h3 className="mt-8 text-2xl font-bold text-black">
                Blockchain for Security
              </h3>
              <p className="mt-2 text-lg text-gray-700">
                Ensure security with Blockchain technology. Blue Data Digital
                offers technology-driven growth, securing transactions and
                fostering trust in industries like telecommunication and health
                tech.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <Moon className="h-9 w-9 text-gray-700" />
              </div>
              <h3 className="mt-8 text-2xl font-bold text-black">
                ML-Powered Solutions
              </h3>
              <p className="mt-2 text-lg text-gray-700">
                Harness the power of Machine Learning for intelligent solutions.
                Blue Data Digital creates data-powered solutions for industries
                like health tech, edtech, telecom, and manufacturing.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <Filter className="h-9 w-9 text-gray-700" />
              </div>
              <h3 className="mt-8 text-2xl font-bold text-black">
                Transformative Technologies
              </h3>
              <p className="mt-2 text-lg text-gray-700">
                Stay ahead with transformative technologies. Blue Data Digital
                serves diverse industries, offering expertise in blockchain,
                robotics process automation, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Section - 4 */}
        <section className="bg-gray-100 pb-16 pt-12 my-24">
          <div className="container mx-auto px-2 ">
            <div className="flex flex-wrap items-center ">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-gray-400 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-5xl mb-2 font-bold leading-normal">
                  Tech-Driven Collaboration
                </h3>
                <p className="text-xl font-normal leading-9 mt-4 mb-4 text-gray-600">
                  Join forces with our tech enthusiasts to bring your
                  revolutionary ideas to life. We specialize in innovative
                  technology solutions, ensuring your concepts are translated
                  into cutting-edge applications.
                </p>
                <p className="text-xl font-normal leading-9 mt-0 mb-4 text-gray-600">
                  Experience a collaborative journey into the world of
                  technology transformation. Let's build extraordinary solutions
                  together!
                </p>
                <Link
                  to="/contact"
                  className="font-bold text-xl text-gray-800 mt-8"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact Us
                </Link>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-gray-400 shadow-lg rounded-lg">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-my-orange fill-current"
                      ></polygon>
                    </svg>

                    <h4 className="text-2xl font-bold text-gray-900">
                      Cutting-Edge Tech Solutions
                    </h4>
                    <p className="text-lg font-normal mt-2 text-gray-700">
                      Dive into the world of unparalleled expertise and
                      cutting-edge tech solutions. We bring your ideas to life
                      with a blend of creativity and technology, delivering
                      results that set your business apart.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Blog />
        <Faq />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
