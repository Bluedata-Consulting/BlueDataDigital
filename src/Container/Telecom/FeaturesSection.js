import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faNetworkWired,
  faBullhorn,
  faShieldAlt,
  faTachometerAlt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const FeaturesSection = () => {
  const cardsData = [
    {
      topic: "Customer Experience Analytics",
      text: "Collate and analyze customer interaction, behavior, preferences, and feedback to assess customer satisfaction levels and identify areas of customer service improvement.",
      icon: faUser,
    },
    {
      topic: "Network Performance Analytics",
      text: "Analyze and monitor network performance data such as network speed, reliability, and data usage, and rectify potential glitches to improve network performance.",
      icon: faNetworkWired,
    },
    {
      topic: "Marketing Analytics",
      text: "Assess detailed call records and network data to gain insights into customer behavior and marketing plans with a customer-centric approach.",
      icon: faBullhorn,
    },
    {
      topic: "Fraud Detection and Prevention",
      text: "Use data analytics tools to spot trends that can help you identify fraudulent activities, misuse of networks, and other illegal activities.",
      icon: faShieldAlt,
    },
    {
      topic: "Network Optimization",
      text: "Use data-driven insights to evaluate the performance of a telecommunications network and get insights to optimize the network.",
      icon: faTachometerAlt,
    },
    {
      topic: "Customer Churn Prediction",
      text: "Implement churn prediction models to identify and analyze at-risk customers and take necessary steps for customer retention.",
      icon: faChartLine,
    },
  ];

  return (
    <section className=" px-4 space-y-6 py-8 lg:pt-16 lg:pb-20 lg:px-12">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-4xl text-blue-shade-2">
          Telecom Analytics Services
        </h2>
        <p className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-gray-600">
          We assist you optimize your business performance with the following
          Telecom Analytics services:
        </p>
      </div>

      <div className="mx-auto pt-4 grid justify-center gap-4 sm:grid-cols-2 md:max-w-full md:grid-cols-3">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border bg-blue-shade-5/70 select-none hover:shadow hover:shadow-blue-shade-3/70 p-4"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={card.icon}
                className="text-3xl mr-2 text-blue-shade-1"
              />
              <h3 className="text-lg font-bold text-blue-shade-1">{card.topic}</h3>
            </div>
            <p className="text-md text-muted-foreground text-gray-700">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
