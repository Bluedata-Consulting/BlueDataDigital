import React from "react";

const IndustryUseCase = ({ useCases }) => {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-16 py-16">
      <h2 className="font-bold text-5xl text-center pb-2">
        Success Stories with Blue Data Digital
      </h2>
      <p className="text-center font-normal leading-normal text-muted-foreground sm:text-xl sm:leading-7">
        Explore how Blue Data Digital's Cloud consulting services are empowering
        businesses across various industries.
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
        "Blue Data Digital, as a Cloud solution provider, facilitated the seamless migration of an online travel company's infrastructure to AWS. Additionally, we developed a Cloud-based application to enhance the user experience.",
    },
    {
      heading: "Healthcare",
      content:
        "Blue Data Digital strategically reduced the high capital expenditure of a leading healthcare company by migrating their core IT assets to the Cloud. The Cloud's economies of scale transformed capital expenditure (CapEx) into operating expenses (OpEx).",
    },
    {
      heading: "Automobile",
      content:
        "Blue Data Digital created a Cloud-based network connecting automotive suppliers and manufacturers. This streamlined the manufacturing process and significantly improved customer service by facilitating data sharing on parts and product availability.",
    },
    {
      heading: "Finance",
      content:
        "In a phased manner, Blue Data Digital re-architected and migrated the on-premise data center of a group holding company to the Cloud. This move to an auto-scalable public Cloud enhanced agility, automation, and overall business capabilities.",
    },
    {
      heading: "Education",
      content:
        "Blue Data Digital migrated an educational institution's data from on-premise servers to a secure private Cloud. This ensured authorized access across the network, helping the client achieve regulatory compliance without disruption.",
    },
    {
      heading: "Manufacturing",
      content:
        "Blue Data Digital developed a Cloud-based inventory management application with interactive dashboards and real-time reporting for a global manufacturer of dispensing systems, utilizing microservices architecture.",
    },
  ];

  return (
    <div className="bg-gray-100">
      <IndustryUseCase useCases={industryUseCases} />
    </div>
  );
};

export default IndustryUseCases;
