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
    heading: "AI Consulting & Development",
    description:
      "Our Artificial Intelligence Consulting and Development Services help catalyze business growth, integrate AI into your existing tech stack, and develop advanced AI solutions for optimizing business processes.",
  },
  {
    icon: <AiOutlineDatabase />,
    heading: "Machine Learning Development",
    description:
      "Our Machine Learning development services help you automate business processes and perform advanced data analytics. We help you deploy ML models and algorithms that process large sets of data to enable faster and smarter decision-making.",
  },
  {
    icon: <AiOutlineCloud />,
    heading: "AI-Powered Applications",
    description:
      "Empowering you with our future-ready AI-based mobile and web applications to offer improved and intuitive user experience. Leveraging the functionalities offered by AI, we help you better understand user behavior and provide a personalized touch to their browsing time.",
  },
  {
    icon: <AiOutlineUser />,
    heading: "Natural Language Processing",
    description:
      "Leverage NLP to derive meaning from large sets of data. We help you build a next-gen digital assistant that holds better understanding of multiple parts of speech, contextual nuances, sentiments, and different languages for personalized customer service.",
  },
  {
    icon: <AiOutlineKey />,
    heading: "Data Support for AI/ML",
    description:
      "Accurately annotate data, including text, images, or videos to train AI/ML models for maximizing your business operations’ efficiency. Our certified experts backed by the AI & ML centres of excellence deliver superior data support with the promise of confidentiality, precision, and accuracy.",
  },
  {
    icon: <AiOutlineApi />,
    heading: "AI Solution Support and Optimization",
    description:
      "Providing around-the-clock support, monitoring, and optimization for existing and newly developed AI solutions. It includes the addition of new data resources for improving AI insights and accuracy and developing ML-based models to match the newer business needs.",
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
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-7">
          The product can personalize user experiences by understanding
          individual preferences and tailoring recommendations or content based
          on user behavior and historical data.
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
