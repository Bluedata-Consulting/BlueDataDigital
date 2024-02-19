import React from "react";

const features = [
  {
    heading: "Strategic Cloud Consulting",
    description:
      "We provide expert guidance for businesses in adopting best practices and selecting the optimal Cloud platform. Our consultancy includes creating a roadmap for migrating legacy infrastructures and applications, ensuring a smooth transition with minimal operational disruption.",
  },
  {
    heading: "Seamless Cloud Migration",
    description:
      "Partnering with Blue Data Digital ensures a frictionless migration of existing applications and platforms to the Cloud. We tailor the migration strategy to suit specific business requirements, whether it's a public, private, or hybrid Cloud environment.",
  },
  {
    heading: "Cloud-Native Application Development",
    description:
      "Leverage our Cloud-native capabilities to build, test, and deploy business-critical applications. We assist in choosing an optimal technology stack, designing strategic architecture, and implementing efficient CI/CD pipelines for continuous innovation.",
  },
  {
    heading: "Efficient Cloud Management",
    description:
      "Our Cloud specialists configure, manage, and optimize IT infrastructure with precision. Blue Data Digital helps establish a robust Cloud foundation, reducing heavy workflows to eliminate unnecessary resource consumption and enhance operational efficiency.",
  },
  {
    heading: "Robust Cloud Security",
    description:
      "Prepare your business for cybersecurity challenges with Blue Data Digital. We ensure compliance and audit needs are met by offering 360-degree security management, penetration testing, and advanced threat prevention for Cloud-based applications, containers, and infrastructures.",
  },
  {
    heading: "DevOps Excellence and Automation",
    description:
      "Embrace automation tools and DevOps practices with Blue Data Digital. Our Cloud practitioners guide enterprises through seamless adoption of standards like Agile, technology implementation for CI/CD, and deployment of container orchestration platforms for transformative outcomes.",
  },
];

const OfferingSection = () => {
  return (
    <section id="features" className="px-4 space-y-10 py-8 md:py-12 lg:py-20">
      <div className="mx-auto flex max-w-[65rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl text-blue-shade-2 leading-[1.1] sm:text-3xl lg:text-[40px]">
          Blue Data Digital's Cloud Offerings
        </h2>
        <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-7">
          Comprehensive Cloud Offerings for Disruptive Tech Solutions
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-10 sm:grid-cols-2 md:max-w-[90%] md:grid-cols-3">
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
