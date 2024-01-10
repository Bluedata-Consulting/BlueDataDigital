import React from "react";
import SingleFeature from "./SingleFeature";

const FeatureCard = ({ number, title, description, features }) => {
  return (
    // <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
    //   <div className="rounded-md bg-white shadow-md p-8 h-full">
    //     {" "}
    //     {/* Set height to 'full' */}
    //     <div className="text-4xl font-bold text-purple-600 mb-4">{number}</div>
    //     <h3 className="text-2xl font-bold mb-4">{title}</h3>
    //     <p className="text-gray-600 mb-4">{description}</p>
    //     {features && features.length > 0 && (
    //       <SingleFeature featureList={features} />
    //     )}
    //   </div>
    // </div>
    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
      <div className="p-8 h-full bg-gray-100 border border-gray-200 rounded-md">
        {/* Set height to 'full' */}
        <div className="text-4xl font-bold text-purple-600 mb-4">{number}</div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {features && features.length > 0 && (
          <SingleFeature featureList={features} />
        )}
      </div>
    </div>
  );
};

const Features = () => {
  const sections = [
    {
      title: "Predictive Equipment Maintenance",
      description:
        "Machines are life and blood of a manufacturing plant, chasing a 100% of Overall Equipment Effectiveness (OEE) requires consistent monitoring.",
      features: [
        "Predicting the machinery down-time and avoid any disruptions",
        "Accumulating dollars in cost savings from avoiding extreme situations",
        "Guaranteeing the availability of necessary spare parts",
        "Time & efforts saving in scheduling and planning downtimes",
      ],
    },
    {
      title: "Warehouse & SKU Rationalization",
      description:
        "Running an excess reduces turnover and profitability, but stockouts result in lost sales, backorders, and dissatisfied consumers.",
      features: [
        "Demand forecasting for optimum inventory stocks",
        "Scenario planning for seasonal or trendy demands",
        "Vendor scorecarding and Collaboration for proactive fulfilments",
        "Monitoring key parameters like inventory turnover carry cost, returns, etc.",
      ],
    },
    {
      title: "Logistics & Supply Chain Optimization",
      description:
        "As the global and consumer demand becomes more volatile, supply chains get increasingly complex and hence require thorough analysis and planning.",
      features: [
        "Real-time visibility of goods or inventory in-stock or in-transit",
        "Align, engage and manage the network of third-party vendors",
        "Formulate robust procurement strategy to minimizing risk and volatility",
        "Scenario analysis to reduce deadhead and empty miles",
      ],
    },
    {
      title: "Production Planning & Process Efficiency",
      description:
        "Cost and process optimization extend far beyond the factory floors, a data-driven approach makes sure you spot and resolve inefficiencies quickly.",
      features: [
        "Analyse and manage IoT data to build predictive models",
        "Connect cross-functional data to spot inefficiencies and weak links",
        "Account for hidden expenditures like scrap and overhead",
        "Make optimal pricing and procurement decisions",
        "Measure call centers effectiveness and adherence to SLAs",
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">
            Embrace Industry 4.0 and revolutionize your operations with
            manufacturing analytics solutions
          </h2>
          <p className="text-gray-600 mb-12 text-md">
            The manufacturing industry is prone to volatility due to multiple
            drivers at play, making reliance on human intuition for planning &
            decision making unsustainable for businesses. With the arrival of
            industry 4.0, manufacturing setups are revolutionized with smart
            technologies and methods of capturing data at every touchpoint. But,
            is the captured data harnessed completely? Are you using the data to
            perform the following:
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 mt-12">
          {sections.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
