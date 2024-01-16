import React from "react";

const IndustryUseCase = ({ useCases }) => {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-16 py-16">
      <h2 className="font-bold text-5xl text-center pb-2">
        Industry Use Cases
      </h2>
      <p className="text-center font-normal leading-normal text-muted-foreground sm:text-xl sm:leading-7">
        Blockchain technologies are driving disruption in multiple industries,
        here are some of the use cases.
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
      heading: "Insurance",
      content:
        "Developed Blockchain-backed Life Settlement solution that allows real time policy tracking, transparency and security in policy sale and purchase, automates the entire life settlement process thereby reducing operational cost and settlement time.",
    },
    {
      heading: "Banking & Finance",
      content:
        "Designed and deployed a fully-functional loan process and settlement solution leveraging smart contracts and DLT (Distributed Ledger Technology) that expedites the loan process and settlement of syndicate loans while enabling secure payment.",
    },
    {
      heading: "Proxy Voting",
      content:
        "Built a Blockchain-powered solution using private Ethereum and Quorum allowing decentralized trustless proxy voting by shareholders for an annual general meeting for a client organization.",
    },
    {
      heading: "Digital Verification",
      content:
        "Strategized an innovative solution that allows participants upload their verifiable credentials on Blockchain in a digital folder which can be used for digital verification of the participant’s certifications and details securely.",
    },
    {
      heading: "Healthcare",
      content:
        "Implemented a smart patient-facing and researcher-facing system to run clinical trials based on smart contracts on an Ethereum network that facilitated BlockTrial and metadata search functionality for a healthcare company.",
    },
    {
      heading: "Supply Chain",
      content:
        "Developed track and trace models based on Blockchain for various supply chain industry players to enable seamless transfer of goods without losing the track of shipment and keeping frauds like counterfeit at bay.",
    },
    {
      heading: "Retail & E-Commerce",
      content:
        "Developed a customer-centric e-commerce platform for a renowned retail & e-commerce company that featured Store performance analysis tool, crypto payment system, special prices for token holders and much more.",
    },
    {
      heading: "Gaming",
      content:
        "Developed a fully-functional Blockchain-powered gaming and loyalty program platform for an eminent gaming and entertainment company that could be seamlessly integrated with gaming services, CSM and CRM.",
    },
    {
      heading: "Cryptocurrency Trading",
      content:
        "Crafted an all-round B2B and B2C focused crypto-exchange solution allowing secure, transparent and traceable crypto-trading for an innovating cryptocurrency trading company.",
    },
  ];

  return (
    <div>
      <IndustryUseCase useCases={industryUseCases} />
    </div>
  );
};

export default IndustryUseCases;
