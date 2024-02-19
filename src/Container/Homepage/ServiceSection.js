import React from "react";
import { Brain, Lock, Lightbulb } from "lucide-react";

function ServiceSection() {
  return (
    <div className=" px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-4 lg:py-12 lg:mt-12">
      <div className="mx-auto text-center mb-12">
        <h2 className="mt-6 text-4xl font-bold leading-tight text-blue-shade-4 sm:text-5xl lg:text-[50px]">
          <span className="text-black">Powering Innovation with</span> Blue Data
          Digital
        </h2>
        <p className="mt-4 text-[18px] leading-relaxed lg:ml-36 lg:w-[80%] text-gray-600">
          Explore our expertise in AI, Blockchain, and ML for cutting-edge
          solutions. Blue Data Digital is your partner in technology innovation
          across various industries.
        </p>
      </div>

      <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3 j">
        {/* Service 1: AI-Driven Strategies */}
        <div className="flex flex-col sm:flex-row ">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-my-blue">
              <Brain size={24} color="#0F41A9" /> {/* AI Logo */}
            </div>
          </div>
          <div>
            <h6 className="text-[22px] font-semibold text-blue-shade-2 leading-5">
              AI-Driven Strategies
            </h6>
            <p className="mt-2 text-normal text-gray-700">
              Craft AI-driven strategies for business success. Blue Data Digital
              specializes in strategic data consulting, leveraging artificial
              intelligence to optimize operations.
            </p>
          </div>
        </div>

        {/* Service 2: Blockchain for Security */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-my-blue">
              <Lock size={24} color="#0F41A9" /> {/* Blockchain Logo */}
            </div>
          </div>
          <div>
            <h6 className="text-[22px] font-semibold text-blue-shade-2 leading-5">
              RPA Solutions
            </h6>
            <p className="mb-3 mt-2 text-normal text-gray-700">
              Experience unmatched efficiency and precision in your business
              with Blue Data Digital's Robotic Process Automation (RPA)
              services. We leverage RPA to automate both simple and intricate
              tasks, allowing your team to concentrate on strategic work.
            </p>
          </div>
        </div>

        {/* Service 3: ML-Powered Solutions */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-my-blue">
              <Lightbulb size={24} color="#0F41A9" /> {/* ML Logo */}
            </div>
          </div>
          <div>
            <h6 className="text-[22px] font-semibold text-blue-shade-2 leading-5">
              ML-Powered Solutions
            </h6>
            <p className="mb-3 mt-2 text-normal text-gray-700">
              Harness the power of Machine Learning for intelligent solutions.
              Blue Data Digital creates data-powered solutions for industries
              like health tech, edtech, telecom, and manufacturing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
