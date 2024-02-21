import React from "react";
import { FiSettings, FiMessageCircle, FiFileText } from "react-icons/fi"; // Import Feather icons
import FeatureBox from "./FeatureBox";

const Section = () => {
  const features = [
    {
      gradient: "from-green-400 via-cyan-400 to-blue-600",
      title: "Generative AI Consulting",
      description:
        "Explore AI integration, develop custom solutions, and optimize existing systems with our consulting for transformative growth and innovation.",
      icon: <FiSettings className="h-10 w-10 text-white" />, // Use FiSettings icon
    },
    {
      gradient: "from-pink-500 to-yellow-500",
      title: "Chatbot Development",
      description:
        "Provide tailored customer experiences using intuitive chatbots for sales, marketing, and support. Embed them directly into your app or deploy as standalone.",
      icon: <FiMessageCircle className="h-10 w-10 text-white" />, // Use FiMessageCircle icon
    },
    {
      gradient: "from-pink-400 to-indigo-400",
      title: "Content Generation",
      description:
        "Generate unique and engaging content formats, like poems, code, scripts, musical pieces, email, letters, etc., tailored to your specific needs and goals.",
      icon: <FiFileText className="h-10 w-10 text-white" />, // Use FiFileText icon
    },
  ];

  return (
    <div className="py-20 px-10">
      <div className=" ">
        <h1 className="text-[42px] font-bold text-center text-black">
          Our <span className="text-blue-shade-2">GENERATIVE AI </span> Services
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
