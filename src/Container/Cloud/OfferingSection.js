import React from "react";

const features = [
  {
    heading: "Cloud Consulting Services",
    description:
      "We guide businesses to adopt the right practices and best-fit platform for the migration of legacy infrastructures and applications, along with the creation of a roadmap to enable transition with minimal operational disruption.",
  },
  {
    heading: "Cloud Migration Services",
    description:
      "Damco partners with businesses to transform their digital capabilities through a frictionless migration of their existing applications and platforms to the Cloud environment that best suits their requirements-public, private, or hybrid.",
  },
  {
    heading: "Cloud Application Development",
    description:
      "Our experts harness their Cloud-native capabilities to build, test, and deploy business-critical applications. We not only help you choose a suitable technology stack and design strategic architecture but also effectively implement CI/CD pipelines.",
  },
  {
    heading: "Cloud Management",
    description:
      "Our Cloud specialists configure, manage, and optimize your IT infrastructure through precise Cloud configuration and performance strategy. We help businesses establish a robust Cloud foundation and reduce heavy workflows to eliminate unnecessary resource consumption.",
  },
  {
    heading: "Cloud Security",
    description:
      "We prepare businesses for cybersecurity challenges while helping them meet their compliance and audit needs. 360-degree security management, penetration testing and advanced threat prevention for Cloud-based applications, containers and infrastructures offer you much-needed peace of mind.",
  },
  {
    heading: "DevOps and Automation",
    description:
      "Our Cloud practitioners help enterprises embrace automation tools and DevOps practices that deliver transformative outcomes. From seamless adoption of standards such as Agile to technology implementation for CI/CD and deployment of container orchestration platforms, we help you every step of the way.",
  },
];

const OfferingSection = () => {
  return (
    <section
      id="features"
      className="container mx-auto px-4 my-8 space-y-10 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-20"
    >
      <div className="mx-auto flex max-w-[65rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-7xl">
          Our Cloud Offerings
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-7">
          Comprehensive Cloud Offerings to Achieve Disruptive Outcomes
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[70rem] md:grid-cols-3">
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
