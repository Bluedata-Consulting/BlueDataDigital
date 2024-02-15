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
      title: "Bespoke Blockchain Services",
      description: "Step into the future with Blockchain-backed applications.",
      icon: <AiOutlineDollar size={36} />,
    },
    {
      title: "Enterprise Blockchain Development",
      description:
        "Unparalleled expertise across a range of Blockchain frameworks.",
      icon: <MdSecurity size={36} />,
    },
    {
      title: "Cryptocurrency Development",
      description: "Industry experience to navigate your crypto journey.",
      icon: <AiOutlineLineChart size={36} />,
    },
    {
      title: "NFT Development Services",
      description:
        "Tokenize your digital collectibles with secure NFT marketplace development.",
      icon: <AiOutlineSafetyCertificate size={36} />,
    },
  ];

  return (
    <div className="bg-gray-200/70 p-4 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className=" mt-4 text-gray-100">
          <h2 className="my-2 pb-4 text-4xl font-bold text-center text-black lg:text-[40px]">
            Tech <span className="text-blue-shade-2">Consulting Benefits</span>{" "}
            with <span className="text-blue-shade-2">Blockchain</span> Solutions
          </h2>
        </div>
        <div className="mt-6 grid overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {workCards.map((card, index) => (
            <WorkCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkCard = ({ title, description, icon }) => (
  <div className="group relative bg-blue-shade-2 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 flex items-center justify-center">
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
