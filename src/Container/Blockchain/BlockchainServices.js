import React from "react";

const BlockchainServices = () => {
  const servicesData = [
    {
      title: "Blockchain Consulting",
      description:
        "Opt for our blockchain consulting services to identify and assess business objectives, organizational readiness, forecast business impact, and analyze how Blockchain can drive enterprise-class transformation in your business. We bring the right blend of capabilities to your strategic vision, complexities and infrastructure.",
    },
    {
      title: "Proof of Concept (POC)",
      description:
        "Our Blockchain development service providers work alongside your team to rapidly build proofs of concept for gauging the applicability of Blockchain development technology on an idea. From identifying use-cases, analyzing the right platform to designing Blockchain architecture, we quantify the business impact to initiate the journey towards development and execution.",
    },
    {
      title: "Smart Contracts",
      description:
        "Generating self-executable contracts to fit and function precisely in the clockwork of the project. Our customized Blockchain Smart Contract can help you widen the scope of trust by creating an automated contract management system which is faster, tamper-proof, and decentralized.",
    },
    {
      title: "DApp Development",
      description:
        "Whether you’re envisioning a new cryptocurrency or want a new decentralized app, we are a reliable blockchain app development services provider that crafts DApps to unlock tangible outcomes for your potential users. We offer MVP application consulting, MVP development, custom and cloud DApp development, DApp porting, DApp upgrade services, and more.",
    },
    {
      title: "Ethereum Development",
      description:
        "Ethereum development involves direct interaction of the dApp with the decentralized Ethereum Blockchain. Our team of Ethereum developers is experienced in closely working with B2B development partners and has delivered numerous smart contracts and dApps covering Fintech, AdTech, and EdTech industries.",
    },
    {
      title: "Cloud Blockchain Development",
      description:
        "We are a professional Blockchain development company with extensive experience in dApp development using Amazon Managed Blockchain, Azure Blockchain Workbench, IBM Blockchain Platform and Google Cloud Platform. Be it creating customer-centric interfaces or Ethereum app porting, we have blockchain application development services providers to meet diverse business requirements.",
    },
  ];

  return (
    <div className="bg-gray-100 my-8 px-4 py-16">
      <div className="container mx-auto pt-10 pb-16">
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-2">
          Bespoke Blockchain Services
        </h1>
        <p className="text-center mb-16 font-normal leading-normal text-muted-foreground sm:text-xl sm:leading-7">
          With our multi-disciplined domain experts, technology know-how, and
          commercialization capabilities, we offer custom enterprise Blockchain
          development services for creating next-generation solutions for your
          unique business needs and holistic development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-700 text-normal">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainServices;
