import React from "react";

const features = [
  {
    title: "Ethical",
    description:
      "We uphold ethical standards in generative AI development, ensuring our solutions respect user privacy and adhere to fairness and transparency. We actively work to prevent biases in AI algorithms, fostering equal treatment and inclusivity.",
  },
  {
    title: "Intuitive",
    description:
      "We strive to build AI systems that are user-friendly and intuitive in nature. Our teams emphasize designing interfaces and interactions that enable users to seamlessly engage with AI, ensuring an impeccable experience.",
  },
  {
    title: "Reliable",
    description:
      "We implement rigorous quality assurance during the development and training of our AI models. This includes thorough testing, validation, and monitoring to identify and address issues related to content quality, coherence, and relevance.",
  },
];

const OfferingSection = () => {
  return (
    <section id="features" className="px-4 space-y-10 py-8 md:py-12 lg:py-20">
      <div className="mx-auto flex max-w-[65rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl text-blue-shade-2 leading-[1.1] sm:text-3xl lg:text-[40px]">
          Our Generative AI Principles
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
