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
    <div className="bg-gray-100 p-4 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className=" mt-4 text-gray-100">
          <h2 className="my-2 text-4xl font-bold text-black md:text-6xl">
            Business Benefits of RPA
          </h2>
          <p className="text-black font-normal leading-normal text-muted-foreground sm:text-xl sm:leading-7">
            Introduce speed and convenience with rules-based trained bots,
            freeing the workforce to perform more strategic tasks.
          </p>
        </div>
        <div className="mt-6 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {workCards.map((card, index) => (
            <WorkCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkCard = ({ title, description, icon }) => (
  <div className="group relative bg-gray-700 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
    <div className="relative space-y-5 py-6 p-8">
      <div className="text-white">{icon}</div>
      <div className="space-y-2">
        <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
          {title}
        </h5>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  </div>
);

export default WorkSection;
