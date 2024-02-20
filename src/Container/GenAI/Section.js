import React from "react";
import FeatureBox from "./FeatureBox";

const Section = () => {
  const features = [
    {
      gradient: "from-green-400 via-blue-500 to-indigo-600",
      title: "Generative AI Consulting",
      description:
        "Explore AI integration, develop custom solutions, and optimize existing systems with our consulting for transformative growth and innovation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ verticalAlign: "middle" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      ),
    },
    {
      gradient: "from-yellow-500 to-red-500",
      title: "Chatbot Development",
      description:
        "Provide tailored customer experiences using intuitive chatbots for sales, marketing, and support. Embed them directly into your app or deploy as standalone.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ verticalAlign: "middle" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
    },
    {
      gradient: "from-purple-600 to-pink-700",
      title: "Content Generation",
      description:
        "Generate unique and engaging content formats, like poems, code, scripts, musical pieces, email, letters, etc., tailored to your specific needs and goals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ verticalAlign: "middle" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
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
