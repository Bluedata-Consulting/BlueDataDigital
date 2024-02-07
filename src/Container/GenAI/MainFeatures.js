import React from "react";
import feature1 from "../../Assets/1.png";
import feature2 from "../../Assets/2.png";
import feature3 from "../../Assets/3.png";
import feature4 from "../../Assets/4.png";

const MainFeatures = () => {
  const features = [
    {
      title: "Generative AI for Customer Experience",
      description:
        "Supercharge customer experience with intuitive chatbots and improve the performance of sales teams with product and offer knowledge assistants.",
      image: feature1,
    },
    {
      title: "Generative AI for Workplace Productivity",
      description:
        "Leverage AI-powered tools to automate mundane, routine tasks. Enable process optimization and efficiency with intelligent insights.",
      image: feature2,
    },
    {
      title: "Generative AI for Sales Acceleration",
      description:
        "Develop personalized content and presentations that resonate with individual clients, propelling the sales cycle forward.",
      image: feature3,
    },
    {
      title: "Generative AI for Scaling Enterprises",
      description:
        "Maximize business impact by building custom generative AI assistants trained with your proprietary data to address specific use cases.",
      image: feature4,
    },
  ];
  return (
    <section id="features" className="py-20 lg:pb-32 lg:pt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold">How We Can Help</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex-1 px-3">
              <div className="p-8 rounded-lg border border-solid border-gray-300 bg-white shadow-md h-full flex flex-col items-center">
                <div className="rounded-full overflow-hidden w-16 h-16 mb-4">
                  <img
                    src={feature.image}
                    alt={`Feature ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-xl flex-grow">
                  {feature.title}
                </p>
                <p className="mt-4">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
