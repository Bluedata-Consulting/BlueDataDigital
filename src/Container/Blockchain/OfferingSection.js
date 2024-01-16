import React from "react";

const features = [
  {
    heading: "Corda Development",
    description:
      "Corda is an open-source distributed ledger platform that helps in removing costly friction in business transactions to allow businesses to transact transparently by making use of Consensus Time, Hashgraphs and Stamping. Navigate the Corda Development journey seamlessly with our team of certified blockchain development service providers.",
  },
  {
    heading: "Stellar Development",
    description:
      "Our team of experts can help you build future-ready, robust, and secure solutions on Stellar Blockchain app development platform that connect banks, customers and payment systems to make money move quickly, securely, and cost-effectively. We are an established Blockchain development company with rich expertise in various Stellar Blockchain tools such as Stellar Core, Horizon, Federation Server, Bridge Server, etc.",
  },
  {
    heading: "Hyperledger Development",
    description:
      "Build an advanced enterprise ecosystem with transparent and secure transactions ensured by Hyperledger framework to foster your Blockchain business ahead. We have expertise in all the Hyperledger platforms- Hyperledger Burrow, Hyperledger Fabric, Hyperledger Sawtooth, Hyperledger Indy, and Hyperledger Iroha.",
  },
  {
    heading: "Quorum Development",
    description:
      "Take advantage of Quorum Development Blockchain platform to facilitate a faster transaction, interaction, processing, high throughput, and privacy- by using different consensus algorithms. Being a pioneering Blockchain development company, we build scalable applications over Quorum to help you create a new generation of highly secure blockchain.",
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
          Enterprise Blockchain Development
        </h2>
        <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-7">
          As a leading enterprise blockchain development company, we leverage a
          broad array of Blockchain platforms to facilitate robust and secure
          Blockchain application development for various industries, including
          financial, insurance, healthcare, manufacturing, supply chain,
          logistics, and more
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
