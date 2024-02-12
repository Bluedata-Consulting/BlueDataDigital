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
      title: "Strategic Consulting",
      description:
        "Provide strategic tech consulting to align AI & ML solutions with your business objectives and enhance overall efficiency.",
      icon: <AiOutlineCode size={60} />,
    },
    {
      title: "Decision-Making",
      description:
        "Enable informed decision-making through rapid data analysis, leveraging AI and Machine Learning capabilities.",
      icon: <AiOutlineDatabase size={60} />,
    },
    {
      title: "Tech Forecasting",
      description:
        "Forecast and anticipate future technology trends, ensuring your business stays ahead in the fast-evolving tech landscape.",
      icon: <AiOutlineCloud size={60} />,
    },
    {
      title: "Process Optimization",
      description:
        "Optimize business processes by leveraging Machine Learning to identify inefficiencies and streamline operations.",
      icon: <AiOutlineUser size={60} />,
    },
  ];

  return (
    <div className="bg-gray-100 p-4 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mt-4 text-gray-100">
          <h2 className="my-2 pb-4 text-4xl font-bold text-center text-black md:text-5xl">
            Tech Consulting Benefits with AI & ML Solutions
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
  <div className="group relative bg-gray-700 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 flex items-center justify-center">
  <div className="relative space-y-1 p-8 text-center flex flex-col items-center">
    <div className="text-white pb-4">{icon}</div>
    <div className="space-y-2">
      <h5 className="text-2xl font-semibold text-white transition group-hover:text-secondary">
        {title}
      </h5>
      <p className="text-gray-200">{description}</p>
    </div>
  </div>
</div>

);

export default WorkSection;
