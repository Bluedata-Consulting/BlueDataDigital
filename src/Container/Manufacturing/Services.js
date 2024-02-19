import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faChartBar,
  faClipboardCheck,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const cardsData = [
    {
      topic: "Technology Consulting",
      text: "Brainstorming sessions with our techno-functional experts to help you choose the right technology platform for your manufacturing unit. The output is futuristic recommendations of your technology needs.",
      icon: faBrain,
    },
    {
      topic: "Data Management",
      text: "Robust manufacturing data management and governance is the first step towards a data-first culture. We deliver custom-fit solutions to account for your immediate and future data storage requirements.",
      icon: faDatabase,
    },
    {
      topic: "Data Analytics",
      text: "In a manufacturing plant, data gets generated at every turn. However, it only stays in silos, thereby limiting its utility. Our experts help you unlock the true potential of your data with near-real-time insights.",
      icon: faChartBar,
    },
    {
      topic: "Business Planning",
      text: "At a time when consumers are spoilt for choices, agile scenario modelling and business planning have emerged as critical business enablers. We help you mitigate the risks involved with demand fluctuations.",
      icon: faClipboardCheck,
    },
  ];

  return (
    <section className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:pt-10 my-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-blue-shade-2 font-bold text-2xl leading-[1.1] sm:text-3xl md:text-[40px]">
          Our Services
        </h2>
      </div>

      <div className="mx-auto pt-4 grid justify-center gap-4 sm:grid-cols-2 md:max-w-full md:grid-cols-2">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border bg-blue-shade-5/60 select-none hover:shadow hover:shadow-blue-shade-4/60 p-4"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={card.icon}
                className="text-3xl text-blue-shade-2 mr-2"
              />
              <h3 className="text-lg text-blue-shade-2 font-bold">
                {card.topic}
              </h3>
            </div>
            <p className="text-md text-gray-700 ">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
