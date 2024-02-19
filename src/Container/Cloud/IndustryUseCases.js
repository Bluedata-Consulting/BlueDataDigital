import React from "react";

const IndustryUseCase = ({ useCases }) => {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-16 py-16">
      <div className="mx-auto pb-8 flex max-w-[65rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl text-blue-shade-2 leading-[1.1] sm:text-3xl lg:text-[40px]">
          Tech Consulting Use Cases
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-blue-shade-5/40 p-6 rounded-lg shadow-md shadow-blue-shade-1/80">
            <h3 className="text-2xl font-semibold text-blue-shade-2 mb-2">{useCase.heading}</h3>
            <p className="text-[18px] text-gray-600">{useCase.content}</p>
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
    <div className="bg-gray-100/80">
      <IndustryUseCase useCases={industryUseCases} />
    </div>
  );
};

export default IndustryUseCases;
