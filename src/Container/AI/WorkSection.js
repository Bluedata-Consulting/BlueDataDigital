import React from "react";
import {
  AiOutlineCode,
  AiOutlineDatabase,
  AiOutlineCloud,
  AiOutlineUser,
} from "react-icons/ai";

const WorkSection = () => {
  const workCards = [
    {
      title: "Accuracy",
      description:
        "Prevent human errors and ensure accurate results with the help of Artificial Intelligence in your processes.",
      icon: <AiOutlineCode size={36} />,
    },
    {
      title: "Decision-Making",
      description:
        "With quicker data analysis and programming, Artificial Intelligence and Machine Learning aid in making informed decisions.",
      icon: <AiOutlineDatabase size={36} />,
    },
    {
      title: "Forecasting",
      description:
        "Accurate forecasting and predictions by processing volumes of data to assist in planning the next steps and business goals.",
      icon: <AiOutlineCloud size={36} />,
    },
    {
      title: "Process Optimization",
      description:
        "Machine Learning to aid in identifying anomalies in business processes and to optimize them to increase efficiency.",
      icon: <AiOutlineUser size={36} />,
    },
  ];

  return (
    <div className="bg-gray-100 p-4 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2 mt-4 text-gray-100">
          <h2 className="my-2 text-4xl font-bold text-black md:text-6xl">
            Our Work
          </h2>
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
