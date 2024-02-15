import React from "react";

const IndustryUseCase = ({ useCases }) => {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-16 py-16">
      <h2 className="font-bold text-5xl text-center pb-2">
        Industry Use Cases
      </h2>
      <p className="text-center font-normal leading-normal text-muted-foreground sm:text-xl sm:leading-7">
        Explore how blockchain technologies are transforming various industries
        with these real-world use cases.
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
      heading: "Banking & Finance",
      content:
        "Transform the loan process and settlement with smart contracts and DLT. Expedite syndicate loans and secure payments with a fully-functional blockchain solution.",
    },

    {
      heading: "Digital Verification",
      content:
        "Innovate digital verification with a blockchain solution. Participants can securely upload verifiable credentials, creating a digital folder for certification and details.",
    },
    {
      heading: "Healthcare",
      content:
        "Facilitate smart patient-facing and researcher-facing systems for clinical trials. Ethereum-based smart contracts provide BlockTrial functionality and metadata search for healthcare companies.",
    },
    {
      heading: "Cryptocurrency Trading",
      content:
        "Build a secure and transparent crypto-exchange solution. Cater to B2B and B2C crypto-trading needs, ensuring traceability for an innovative cryptocurrency trading company.",
    },
  ];

  return (
    <div>
      <IndustryUseCase useCases={industryUseCases} />
    </div>
  );
};

export default IndustryUseCases;
