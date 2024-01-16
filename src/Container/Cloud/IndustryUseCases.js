import React from "react";

const IndustryUseCase = ({ useCases }) => {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-16 py-16">
      <h2 className="font-bold text-5xl text-center pb-2">
        Our Success Stories
      </h2>
      <p className="text-center font-normal leading-normal text-muted-foreground sm:text-xl sm:leading-7">
        Our Cloud consulting services are empowering businesses across industry.
      </p>
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
      heading: "Travel",
      content:
        "As an eminent Cloud solution provider, we helped an online travel company ease their Cloud journey by seamlessly migrating their infrastructure to AWS. We further developed a Cloud-based application to enable the client to deliver an enhanced user experience.",
    },
    {
      heading: "Healthcare",
      content:
        "Reduced the high capital expenditure of a leading healthcare company by strategically migrating their core IT assets to the Cloud. The economies of scale offered by the Cloud enabled them to convert their capital expenditure (CapEx) into operating expenses (OpEx).",
    },
    {
      heading: "Automobile",
      content:
        "Developed a Cloud-based network between the automotive suppliers and manufacturers to facilitate the sharing of data on parts and product availability; the solution streamlined their manufacturing process and significantly improved customer service.",
    },
    {
      heading: "Finance",
      content:
        "Re-architected and migrated the on-promise data center of a group holding company to the Cloud in a phased manner. Hundreds of servers were moved to an auto-scalable public Cloud, providing improved agility, automation, and business capabilities to the client.",
    },
    {
      heading: "Education",
      content:
        "Migrated an education institution’s data from their on-premise servers to a secure private Cloud and enabled authorized access across the network; the solution helped the client meet regulatory compliance with no disruption in their day-to-day operations.",
    },
    {
      heading: "Manufacturing",
      content:
        "Developed a Cloud-based inventory management application with interactive dashboards and real-time reporting for a global manufacturer of dispensing systems using the microservices architecture.",
    },
  ];

  return (
    <div className="bg-gray-100">
      <IndustryUseCase useCases={industryUseCases} />
    </div>
  );
};

export default IndustryUseCases;
