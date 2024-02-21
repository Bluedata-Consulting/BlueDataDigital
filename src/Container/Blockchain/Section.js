import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faUserCheck,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";
import FeatureBox from "./FeatureBox";

const Section = () => {
  const features = [
    {
      gradient: "from-red-600 to-blue-shade-4",
      title: "Banking & Finance",
      description:
        "Transform the loan process and settlement with smart contracts and DLT. Expedite syndicate loans and secure payments with a fully-functional blockchain solution.",
      icon: (
        <FontAwesomeIcon icon={faPiggyBank} className="h-12 w-12 text-white" />
      ),
    },
    {
      gradient: "from-pink-400 to-purple-700",
      title: "Digital Verification",
      description:
        "Innovate digital verification with a blockchain solution. Participants can securely upload verifiable credentials, creating a digital folder for certification and details.",
      icon: (
        <FontAwesomeIcon icon={faUserCheck} className="h-12 w-12 text-white" />
      ),
    },
    {
      gradient: "from-green-400 to-orange-500",
      title: "Healthcare",
      description:
        "Implement Ethereum smart contracts for clinical trials, offering BlockTrial functionality and metadata search to serve patients and researchers in healthcare companies.",
      icon: (
        <FontAwesomeIcon icon={faHospital} className="h-12 w-12 text-white" />
      ),
    },
  ];

  return (
    <div className="py-20 px-10">
      <div className=" ">
        <h1 className="text-[42px] font-bold text-center text-black">
          Our <span className="text-blue-shade-2">BLOCKCHAIN </span> Services
          and Use Cases
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
