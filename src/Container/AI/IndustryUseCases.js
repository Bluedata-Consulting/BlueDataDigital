import React from "react";

const IndustryUseCase = ({ useCases }) => {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-16 py-16">
      <h2 className="font-bold text-5xl text-center">Industry Use Cases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">{useCase.heading}</h3>
            <p className="text-lg text-gray-600">{useCase.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const IndustryUseCases = () => {
  const industryUseCases = [
    {
      heading: "Insurance",
      content:
        "Developed AI-based Intelligent Loss Report Validation Tool to validate data by performing QA checks in the Loss report, predict errors and notify the errors to Adjusters & QA Reviewers.",
    },
    {
      heading: "Healthcare",
      content:
        "Trained a chatbot for a leading healthcare institution for booking appointments and tests directly via the website and app, along with responding to the general user queries.",
    },
    {
      heading: "Retail",
      content:
        "Created an ML-based tool for an e-commerce giant to help them analyze the browsing history of users on the website to retarget and cross-sell, along with tracking loyalty rewards.",
    },
    {
      heading: "Fintech",
      content:
        "Developed a predictive scoring model to assess the risk of small consumer loans, providing a weighted predictor of loan performance and the lifetime value of the customer.",
    },
    {
      heading: "Banking",
      content:
        "Developed an AI and ML-based bot to help the workforce complete the KYC effortlessly, minimizing the error percentage for a leading national banking chain.",
    },
    {
      heading: "OTT",
      content:
        "Trained a recommendation engine to analyze user behavior and preferences, recommending shows and films based on the previously watched list.",
    },
  ];

  return (
    <div>
      <IndustryUseCase useCases={industryUseCases} />
    </div>
  );
};

export default IndustryUseCases;
