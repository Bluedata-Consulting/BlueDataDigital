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
      title: "Accuracy",
      description:
        "AI-based bots trained to repeat a certain task without failure and errors directly add to process accuracy.",
      icon: <AiOutlineDollar size={36} />,
    },
    {
      title: "Efficiency",
      description:
        "A robotic workforce that never gets tired or takes a break, no redundancies or errors, with efficiency improvements up to 50%.",
      icon: <MdSecurity size={36} />,
    },
    {
      title: "Return on Investment",
      description:
        "Custom RPA development generates strong ROI in a short period and delivers business excellence throughout the value chain.",
      icon: <AiOutlineLineChart size={36} />,
    },
    {
      title: "Scalability",
      description:
        "Bots are quickly scaled to accommodate spikes in workload and handle large volumes of data.",
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
            Introduce speed and convenience with rules-based trained bots
            freeing the workforce to perform more everyday
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
