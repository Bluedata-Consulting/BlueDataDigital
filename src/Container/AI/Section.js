import React from "react";
import FeatureBox from "./FeatureBox";

const Section = () => {
  const features = [
    {
      gradient: "from-green-400 to-blue-500",
      title: "Digital Transformation",
      description:
        "Implemented AI/ML solutions for a multinational corporation, streamlining processes and boosting efficiency in their digital transformation journey.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 5.75a4.94 4.94 0 001.466-1.25M14.25 5.75a4.94 4.94 0 01-1.466-1.25M12 12.25c-3.333 0-6-2.58-6-5.75S8.667 0 12 0s6 2.58 6 5.75-2.667 5.75-6 5.75zM12 12.25a6 6 0 00-6 6.25c0 .69.316 1.325.817 1.75h9.366c.501-.425.817-1.06.817-1.75a6 6 0 00-6-6.25z"
          />
        </svg>
      ),
    },
    {
      gradient: "from-purple-400 via-pink-500 to-red-500",
      title: "Customized Analytics",
      description:
        "Provided tailored analytics solutions for tech startups, enabling them to gain actionable insights from their data and make informed decisions for sustainable growth.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.343A8.017 8.017 0 0119 12a8 8 0 11-16 0 8 8 0 019.657-7.657M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },

    {
      gradient: "from-red-400 to-yellow-500",
      title: "Data Security Consulting",
      description:
        "Offered expertise in data security consulting, implementing advanced AI-driven security measures to safeguard sensitive information for financial and technology clients.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-20 px-10">
      <div className=" ">
        <h1 className="text-[42px] font-bold text-center text-black">
          Our <span className="text-blue-shade-2">ARTIFICAL INTELLIGENCE </span>{" "}
          Services and Use Cases
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:mx-20 mt-12 text-center md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureBox
            key={index}
            gradient={feature.gradient}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
