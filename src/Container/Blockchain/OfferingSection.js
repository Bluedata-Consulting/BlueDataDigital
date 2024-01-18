// OfferingSection.js
import React from "react";

const features = [
  {
    heading: "Blockchain Solutions with Corda",
    description:
      "Corda is an open-source distributed ledger platform that removes costly friction in business transactions, allowing transparent and secure transactions. Seamlessly navigate the Corda Development journey with our team of certified blockchain development service providers at Blue Data Digital.",
  },
  {
    heading: "Innovative Solutions on Stellar",
    description:
      "Our team of experts at Blue Data Digital can help you build future-ready, robust, and secure solutions on the Stellar Blockchain app development platform. Connect banks, customers, and payment systems to facilitate quick, secure, and cost-effective money transactions. Benefit from our rich expertise in various Stellar Blockchain tools such as Stellar Core, Horizon, Federation Server, Bridge Server, etc.",
  },
  {
    heading: "Advanced Enterprise Ecosystem with Hyperledger",
    description:
      "Build an advanced enterprise ecosystem with transparent and secure transactions ensured by the Hyperledger framework. Blue Data Digital brings expertise in all Hyperledger platforms, including Hyperledger Burrow, Hyperledger Fabric, Hyperledger Sawtooth, Hyperledger Indy, and Hyperledger Iroha.",
  },
  {
    heading: "Quorum Development for Secure Blockchain",
    description:
      "Take advantage of Quorum Development Blockchain platform to facilitate faster transactions, interactions, and high throughput with privacy using different consensus algorithms. As a pioneering Blockchain development company, Blue Data Digital builds scalable applications over Quorum to help you create a new generation of highly secure blockchain solutions.",
  },
];

const OfferingSection = () => {
  return (
    <section
      id="features"
      className="container mx-auto px-4 my-8 space-y-10 py-8 dark:bg-transparent md:py-12 lg:py-20"
    >
      <div className="mx-auto flex flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-7xl">
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

      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[70rem] md:grid-cols-2">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.heading}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-gray-600 p-2">
    <div className="flex h-full flex-col justify-between rounded-md p-1">
      <div className="space-y-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-md text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

export default OfferingSection;
