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
    <section id="features" className="bg-blue-shade-5/70 py-20 lg:pb-32 lg:pt-20">
      <div className="container mx-auto text-center">
        <h2 className="font-bold text-3xl text-blue-shade-2 leading-[1.1] sm:text-3xl lg:text-[40px]">How We Can Help</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex-1 px-3">
              <div className="py-6 px-4 rounded-lg border border-solid border-blue-shade-1/50 bg-white shadow-md shadow-blue-shade-1/25 h-full flex flex-col items-center">
                <div className="rounded-full overflow-hidden w-16 h-16 mb-4">
                  <img
                    src={feature.image}
                    alt={`Feature ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-xl text-gray-800">
                  {feature.title}
                </p>
                <p className="mt-1 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
