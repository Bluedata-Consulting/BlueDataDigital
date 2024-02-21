import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonal from "../../Container/Homepage/testimonal";

const AboutUs = () => {
  return (
    <div>
      <Header />

      {/* Section - 1*/}
      <div className="bg-slate-100/75 flex items-center justify-center overflow-hidden z-50 ">
        <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-24">
          <div className="flex flex-col items-center justify-between lg:flex-row py-16">
            <div className=" relative ">
              <div className="lg:max-w-xl lg:pr-5 relative z-40">
                <p className="flex text-2xl uppercase text-g1 text-blue-shade-1 font">
                  Our Story
                </p>
                <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug ">
                  We make you look
                  <span className="my-1 inline-block border-b-8 border-cyan-200/50 px-4 font-bold text-g4 animate__animated animate__flash text-blue-shade-2">
                    different
                  </span>
                </h2>
                <p className="text-base text-gray-700">
                  Discover the magic that happens when passion meets dentistry.
                </p>
                <div className="mt-10 flex flex-col items-center md:flex-row">
                  <Link
                    to="/contact"
                    aria-label=""
                    className="group inline-flex items-center font-semibold text-g1 text-blue-shade-1"
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    BE A PART IN OUR JOURNEY
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                ></path>
              </svg>
              <div className="abg-orange-400 mx-auto w-fit overflow-hidden scale-125 rounded-br-none rounded-tl-none">
                <img src="icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
          Our Story
        </div>
      </div>

      {/*Section - 2*/}
      <div className="mt-12 py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-1/3">
              <img src="about3.png" alt="" />
            </div>

            <div className="md:7/12 lg:w-3/4">
              <h2 className="text-3xl text-blue-shade-2 font-bold lg:text-[40px] lg:leading-tight">
                Empowering Businesses Through Technology
              </h2>
              <p className="mt-6 text-lg text-gray-700 lg:text-[18px]">
                At Blue Data Digital, we are on a mission to empower businesses
                through cutting-edge technology solutions. Our team of dedicated
                professionals is passionate about delivering results that exceed
                expectations.
              </p>
              <p className="mt-4 text-lg text-gray-700 lg:text-[18px]">
                {" "}
                With a focus on innovation and client satisfaction, we provide a
                range of services including cutting-edge Generative AI-based
                solutions, seamless automation through RPA or Python,
                comprehensive Data Auditing, and Advanced Analytics. Partner
                with us for a transformative journey towards success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section - 3*/}
      <section className=" bg-blue-shade-5/60 relative my-12 py-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-gray-400 shadow-lg  rounded-lg">
                <img
                  alt=""
                  src="about2.png"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative py-4 px-8 mb-1">
                  <h4 className="text-[26px] font-bold text-blue-shade-1">
                    Innovation with Technology
                  </h4>
                  <p className="text-[18px] font-normal mt-2 leading-7 text-slate-800">
                    Embark on a journey of innovation with Blue Data Digital. We
                    are passionate about leveraging cutting-edge technologies to
                    fuel creativity and drive transformative solutions. Let us
                    turn your ideas into reality.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-gray-400 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap text-xl text-blue-shade-2"></i>
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold text-blue-shade-1 leading-normal">
                        Tech-Driven Solutions
                      </h6>
                      <p className="mb-4 text-normal font-normal leading-6 text-gray-800">
                        Explore a realm of possibilities with our tech-driven
                        solutions. From advanced web technologies to emerging
                        trends, we harness the power of innovation to build
                        robust and scalable solutions for your business.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-gray-400 shadow-lg  rounded-full bg-white">
                        <i className="fas fa-drafting-compass text-xl text-blue-shade-2"></i>
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold text-blue-shade-1 leading-normal">
                        Collaborative Excellence
                      </h6>
                      <p className="mb-4 text-normal font-normal leading-6 text-gray-800">
                        Experience the power of collaborative excellence. Our
                        teams work seamlessly to bring together diverse skill
                        sets, fostering an environment where great ideas
                        flourish and technological innovations thrive.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-gray-400 shadow-lg  rounded-full bg-white">
                        <i className="fas fa-newspaper text-xl text-blue-shade-2"></i>
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold text-blue-shade-1 leading-normal">
                        Result-Driven Approach
                      </h6>
                      <p className="mb-4 text-normal font-normal leading-6 text-gray-800">
                        Our focus extends beyond technology; it's about
                        delivering tangible results. From conceptualization to
                        execution, we ensure our solutions align with your
                        business goals, driving success and fostering
                        innovation.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-gray-400 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt text-xl text-blue-shade-2"></i>
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold text-blue-shade-1 leading-normal">
                        User-Centered Innovation
                      </h6>
                      <p className="mb-4 text-normal font-normal leading-6 text-gray-800">
                        Your success is at the heart of what we do. We follow a
                        customer-centric approach, tailoring innovative
                        solutions to your unique requirements. Join us in the
                        pursuit of transformative and customer-focused
                        innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Testimonal /> */}
      <Testimonal />
      <Footer />
    </div>
  );
};

export default AboutUs;
