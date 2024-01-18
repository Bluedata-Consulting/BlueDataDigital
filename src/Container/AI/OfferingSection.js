import React from "react";
import {
  AiOutlineCode,
  AiOutlineDatabase,
  AiOutlineCloud,
  AiOutlineUser,
  AiOutlineKey,
  AiOutlineApi,
} from "react-icons/ai";

const features = [
  {
    icon: <AiOutlineCode />,
    heading: "Tech Consulting Solutions",
    description:
      "Transform your business with our comprehensive tech consulting services. We analyze your current tech stack, recommend improvements, and provide tailored solutions to boost efficiency and innovation.",
  },
  {
    icon: <AiOutlineDatabase />,
    heading: "Data Science & Analytics",
    description:
      "Unlock the power of data with our Data Science and Analytics services. From data collection to advanced analytics, we help you derive valuable insights to drive strategic decision-making.",
  },
  {
    icon: <AiOutlineCloud />,
    heading: "Cloud Solutions Architecture",
    description:
      "Optimize your infrastructure with our Cloud Solutions Architecture expertise. We design and implement scalable, secure, and efficient cloud solutions to meet your business needs.",
  },
  {
    icon: <AiOutlineUser />,
    heading: "User-Centric Design",
    description:
      "Enhance user experience with our User-Centric Design approach. We create AI-powered applications that prioritize usability, accessibility, and an intuitive interface for your target audience.",
  },
  {
    icon: <AiOutlineKey />,
    heading: "Data Annotation Services",
    description:
      "Ensure quality data for your AI/ML models with our Data Annotation Services. Our experts annotate text, images, and videos with precision, confidentiality, and accuracy.",
  },
  {
    icon: <AiOutlineApi />,
    heading: "Continuous AI Solution Support",
    description:
      "Get round-the-clock support, monitoring, and optimization for your AI solutions. We adapt to evolving business needs, adding new data resources and enhancing models for improved accuracy.",
  },
];

const OfferingSection = () => {
  return (
    <section
      id="features"
      className="container mx-auto px-4 space-y-10 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-20"
    >
      <div className="mx-auto flex max-w-[65rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-7xl">
          Our Tech Consulting Offerings
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-7">
          Empowering Your Business with Innovative Tech Solutions.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[70rem] md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.heading}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => (
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
