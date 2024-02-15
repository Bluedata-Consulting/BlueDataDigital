import React from "react";
import {
  AiOutlineDollar,
  AiOutlineLineChart,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";
import { MdSecurity } from "react-icons/md";

const WorkSection = () => {
  const workCards = [
    {
      title: "Enhanced Accuracy",
      description:
        "AI-powered bots ensure precise and error-free execution of tasks, contributing to enhanced process accuracy.",
      icon: <AiOutlineDollar size={36} />,
    },
    {
      title: "Operational Efficiency",
      description:
        "A robotic workforce operates tirelessly without breaks, minimizing redundancies and errors, leading to efficiency improvements of up to 50%.",
      icon: <MdSecurity size={36} />,
    },
    {
      title: "Maximized Return on Investment",
      description:
        "Custom RPA development delivers a strong return on investment in a short period, fostering business excellence across the value chain.",
      icon: <AiOutlineLineChart size={36} />,
    },
    {
      title: "Scalability Advantage",
      description:
        "Bots can be rapidly scaled to handle fluctuations in workload and manage large volumes of data efficiently.",
      icon: <AiOutlineSafetyCertificate size={36} />,
    },
  ];

  return (
    <div className="bg-gray-200/70 p-4 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className=" mt-4 text-gray-100">
          <h2 className="my-2 pb-4 text-4xl font-bold text-center text-black lg:text-[40px]">
            Tech <span className="text-blue-shade-2">Consulting Benefits</span>{" "}
            with <span className="text-blue-shade-2">RPA</span> Solutions
          </h2>
        </div>
        <div className="mt-6 grid overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {workCards.map((card, index) => (
            <WorkCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkCard = ({ title, description, icon }) => (
  <div className="group relative bg-blue-shade-2 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 flex items-center justify-center">
    <div className="relative space-y-1 p-8 text-center flex flex-col items-center">
      <div className="text-white pb-4">{icon}</div>
      <div className="space-y-2">
        <h5 className="text-2xl font-semibold text-white transition group-hover:text-secondary">
          {title}
        </h5>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  </div>
);

export default WorkSection;
