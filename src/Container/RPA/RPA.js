import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Blog from "./Blog";
import Faq from "./Faq";
import IndustryUseCases from "./IndustryUseCases";
import WorkSection from "./WorkSection";
import OfferingsSection from "./OfferingSection";

const RPA = () => {
  return (
    <div>
      <Header />
      {/* Section - 1*/}
      <section className="py-16 md:py-32 my-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-black font-bold text-4xl md:text-7xl leading-tight mb-6">
            RPA Development Services
          </h1>
          <p className="text-black text-lg md:text-2xl mb-12">
            Automate Business Process, Increase Employee Productivity, and
            Improve User Experience.
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
                <span className="">RPA Solutions for Smarter Operations</span>
              </h2>
              <p className="mt-5 text-lg leading-6 text-gray-900">
                Mundane and repetitive business tasks and processes not only
                take a lot of time to complete but also hamper the productivity
                of the workforce, taking a toll on efficiency. RPA bots
                streamline and automate such repetitive, mundane, and
                time-consuming tasks, ranging from reading files, copying and
                pasting data, accessing folders, extracting, and processing
                structured content. It makes operational processes smarter,
                giving businesses a new competitive edge by elevating workforce
                productivity and overcoming operational vulnerabilities.
              </p>
              <p className="mt-4 text-lg leading-6 text-gray-900">
                Damco’s RPA development services enable businesses to transfer
                repetitive business tasks from the workforce to trained bots,
                making the process quick, precise and free from human error. Our
                RPA consulting services help in expanding the automation horizon
                with intelligent Robotic Process Automation solutions,
                empowering enterprises to transform their ecosystem by
                integrating RPA with cognitive technologies, Machine Learning,
                and Artificial Intelligence. Leveraging the expertise of RPA
                Tools including, Automation Anywhere, UiPath, BluePrism, Azure
                Logic Apps, Azure Automation Services, we instill intelligent
                automation into processes leading to measurable business impact.
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GMWmP0731udNIQ2_gFzVnJaL1thiJos--Q&usqp=CAU"
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

export default RPA;
