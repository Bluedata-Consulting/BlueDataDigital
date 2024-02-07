import React from "react";

const IndustryUseCase = ({ useCases }) => {
  return (
    <div className="bg-gray-100 px-24 mb-24 py-24">
      <h2 className="font-bold text-5xl text-center">
        Tech Consulting Use Cases
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
            <p className="text-lg text-gray-600">{useCase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const IndustryUseCases = () => {
  const industryUseCases = [
    {
      title: "Generative AI Consulting",
      description:
        "Identify opportunities for integrating AI, building custom generative AI solutions, or optimizing existing AI systems with our consulting services. Our teams help you tap the power of AI for unprecedented growth and innovation.",
    },
    {
      title: "Knowledge Base Creation",
      description:
        "Ingest your unstructured organizational assets such as PDFs, internal websites, and images, and convert them into embeddings used to train and serve as the long-term memory for the generative AI model.",
    },
    {
      title: "Large Language Model (LLM) Configuration",
      description:
        "We leverage advanced ML models to develop, configure, and train generative AI solutions tailored to your unique needs. We also validate the models with data sets and ensure they meet industry standards through security audits and testing.",
    },
    {
      title: "Prompt Engineering",
      description:
        "Blue Data Digital generative AI development teams develop, refine, and optimize prompts to enhance the accuracy and performance of generative AI models, so that you get relevant, high-quality, and unbiased responses, every single time.",
    },
    {
      title: "Chatbot Development",
      description:
        "Deliver personalized customer experiences through intuitive chatbots for sales, marketing, and customer support. These chatbots can be embedded directly into your application or deployed as a standalone application.",
    },
    {
      title: "Content Generation",
      description:
        "Generate unique and engaging content formats, like poems, code, scripts, musical pieces, email, letters, etc., tailored to your specific needs and goals.",
    },
  ];

  return (
    <div>
      <IndustryUseCase  useCases={industryUseCases} />
    </div>
  );
};

export default IndustryUseCases;
