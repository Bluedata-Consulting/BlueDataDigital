import React from "react";

const IndustryUseCase = ({ useCases }) => {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-16 py-16">
      <h2 className="font-bold text-5xl text-center">
        Tech Consulting Use Cases
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">{useCase.heading}</h3>
            <p className="text-lg text-gray-600">{useCase.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const IndustryUseCases = () => {
  const industryUseCases = [
    {
      heading: "Digital Transformation",
      content:
        "Assisted a multinational corporation in their digital transformation journey by implementing AI and ML solutions, optimizing business processes, and enhancing overall efficiency.",
    },
    {
      heading: "Customized Analytics",
      content:
        "Provided tailored analytics solutions for tech startups, enabling them to gain actionable insights from their data and make informed decisions for sustainable growth.",
    },
    {
      heading: "Innovative Product Development",
      content:
        "Collaborated with emerging tech companies to develop innovative products powered by AI and ML, positioning them as industry leaders in their respective niches.",
    },
    {
      heading: "Data Security Consulting",
      content:
        "Offered expertise in data security consulting, implementing advanced AI-driven security measures to safeguard sensitive information for financial and technology clients.",
    },
    {
      heading: "Smart Automation Solutions",
      content:
        "Implemented smart automation solutions for manufacturing and logistics clients, streamlining operations and reducing operational costs through AI and ML applications.",
    },
    {
      heading: "Customer Experience Enhancement",
      content:
        "Enhanced customer experience for e-commerce businesses by deploying AI-based chatbots, personalized recommendations, and predictive analytics.",
    },
  ];

  return (
    <div>
      <IndustryUseCase useCases={industryUseCases} />
    </div>
  );
};

export default IndustryUseCases;
