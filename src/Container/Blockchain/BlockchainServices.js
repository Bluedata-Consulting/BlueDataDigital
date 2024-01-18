// BlockchainServices.js
import React from "react";

const BlockchainServices = () => {
  const servicesData = [
    {
      title: "Strategic Technology Consulting",
      description:
        "Opt for Blue Data Digital's consulting services to identify and assess business objectives, organizational readiness, forecast business impact, and analyze how Blockchain can drive enterprise-class transformation in your business. We bring the right blend of capabilities to your strategic vision, complexities, and infrastructure.",
    },
    {
      title: "Proof of Concept (POC)",
      description:
        "Our Blockchain development team collaborates with your experts to rapidly build proofs of concept, gauging the applicability of Blockchain technology. From identifying use-cases, analyzing the right platform to designing Blockchain architecture, we quantify the business impact to initiate the journey towards development and execution.",
    },
    {
      title: "Smart Contract Development",
      description:
        "Generate self-executable contracts tailored to fit and function precisely in your project. Our customized Blockchain Smart Contracts help you widen the scope of trust by creating an automated contract management system that is faster, tamper-proof, and decentralized.",
    },
    {
      title: "Decentralized App (DApp) Development",
      description:
        "Whether you’re envisioning a new cryptocurrency or need a new decentralized app, Blue Data Digital is a reliable blockchain app development services provider. We craft DApps to unlock tangible outcomes for your potential users. Our services include MVP application consulting, MVP development, custom and cloud DApp development, DApp porting, DApp upgrade services, and more.",
    },
    {
      title: "Ethereum Development",
      description:
        "Ethereum development involves direct interaction of the DApp with the decentralized Ethereum Blockchain. Blue Data Digital's team of Ethereum developers has experience in closely working with B2B development partners and delivering numerous smart contracts and DApps covering industries such as Fintech, AdTech, and EdTech.",
    },
    {
      title: "Cloud Blockchain Development",
      description:
        "As a professional Blockchain development company, Blue Data Digital has extensive experience in DApp development using Amazon Managed Blockchain, Azure Blockchain Workbench, IBM Blockchain Platform, and Google Cloud Platform. Whether it's creating customer-centric interfaces or Ethereum app porting, we have blockchain application development services providers to meet diverse business requirements.",
    },
  ];

  return (
    <div className="bg-gray-100 my-8 px-4 py-16">
      <div className="container mx-auto pt-10 pb-16">
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-2">
          Innovative Blockchain Solutions
        </h1>
        <p className="text-center mb-16 font-normal leading-normal text-muted-foreground sm:text-xl sm:leading-7">
          With our diverse domain experts, technology know-how, and
          commercialization capabilities, Blue Data Digital offers custom
          enterprise Blockchain development services. We create next-generation
          solutions tailored to your unique business needs, ensuring holistic
          development and success in the digital landscape.
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
