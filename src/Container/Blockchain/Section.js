import React from "react";
import FeatureBox from "./FeatureBox";

const Section = () => {
  const features = [
    {
      gradient: "from-green-400 to-blue-500",
      title: "Banking & Finance",
      description:
        "Transform the loan process and settlement with smart contracts and DLT. Expedite syndicate loans and secure payments with a fully-functional blockchain solution.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 7l10 5 10-5" />
        </svg>
      ),
    },
    {
      gradient: "from-purple-400 via-pink-500 to-red-500",
      title: "Digital Verification",
      description:
        "Innovate digital verification with a blockchain solution. Participants can securely upload verifiable credentials, creating a digital folder for certification and details.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l2 2" />
          <path d="M12 16v.01" />
        </svg>
      ),
    },
    {
      gradient: "from-yellow-500 to-orange-400",
      title: "Healthcare",
      description:
        "Implement Ethereum smart contracts for clinical trials, offering BlockTrial functionality and metadata search to serve patients and researchers in healthcare companies.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-20 px-10">
      <div className=" ">
        <h1 className="text-[42px] font-bold text-center text-black">
          Our <span className="text-blue-shade-2">BLOCKCHAIN  </span>{" "}
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
