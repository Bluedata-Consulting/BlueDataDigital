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
      title: "Optimized Costs",
      description:
        "Businesses need not invest in maintaining on-premise IT infrastructure; they pay only for what they use.",
      icon: <AiOutlineDollar size={36} />,
    },
    {
      title: "Security",
      description:
        "Stringent security regulations keep business data safe from malware, hacks, and internal theft.",
      icon: <MdSecurity size={36} />,
    },
    {
      title: "Easy Scalability",
      description:
        "Seamless scalability and agility of Cloud platforms help address fluctuating workloads without a hitch.",
      icon: <AiOutlineLineChart size={36} />,
    },
    {
      title: "Business Continuity",
      description:
        "Automated back-up and DR solutions ensure minimal to no impact on operations in the event of a disaster.",
      icon: <AiOutlineSafetyCertificate size={36} />,
    },
  ];

  return (
    <div className="p-4 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2 mt-4 text-gray-100">
          <h2 className="my-2 text-4xl font-bold text-black md:text-6xl">
            Business Benefits
          </h2>
          <p className="text-black font-normal leading-normal text-muted-foreground sm:text-xl sm:leading-7">
            Harness the Power of the Cloud for an Unprecedented Experience
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
