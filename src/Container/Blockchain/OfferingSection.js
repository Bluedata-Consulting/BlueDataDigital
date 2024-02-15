// OfferingSection.js
import React from "react";

const features = [
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

const OfferingSection = () => {
  return (
    <section id="features" className="px-4 space-y-10 py-8 md:py-12 lg:py-20">
      <div className="mx-auto flex max-w-[65rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl text-blue-shade-2 leading-[1.1] sm:text-3xl lg:text-[40px]">
          Transformative Blockchain Solutions
        </h2>
        <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-7">
          As a leading enterprise blockchain development company, Blue Data
          Digital leverages a broad array of Blockchain platforms to facilitate
          robust and secure Blockchain application development for various
          industries. Our expertise spans financial, insurance, healthcare,
          manufacturing, supply chain, logistics, and more.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-10 sm:grid-cols-2 md:max-w-[95%] md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="relative bg-blue-shade-5/70 overflow-hidden rounded-lg select-none  hover:shadow hover:shadow-blue-shade-3/75 p-2">
    <div className="flex h-full flex-col justify-between rounded-md p-1">
      <div className="space-y-2">
        <h3 className="font-bold text-xl text-blue-shade-2">{title}</h3>
        <p className="text-md text-muted-foreground text-gray-800">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default OfferingSection;
