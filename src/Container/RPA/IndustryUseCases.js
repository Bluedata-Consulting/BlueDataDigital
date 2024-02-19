import React from "react";

const IndustryUseCase = ({ useCases }) => {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-8 py-16">
      <div className="mx-auto flex max-w-[65rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl text-blue-shade-2 leading-[1.1] sm:text-3xl lg:text-[40px]">
          Blue Data Digital's RPA Industry Use Cases
        </h2>
        <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-7">
          Explore how our Robotic Process Automation solutions bring
          transformative changes to various industries.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-blue-shade-5/60 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl text-blue-shade-2 font-bold mb-4">{useCase.heading}</h3>
            <p className="text-lg text-gray-700">{useCase.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const IndustryUseCases = () => {
  const industryUseCases = [
    {
      heading: "Banking",
      content:
        "Implementing OCR and cognitive automation to revolutionize customer onboarding processes, ensuring instant completion and enhancing overall customer experience.",
    },
    {
      heading: "IT",
      content:
        "Developing an RPA-based solution for the efficient installation of complex software with interdependent components, simplifying the process for users.",
    },
    {
      heading: "Finance",
      content:
        "Creating a semi-automated Financial Planning & Analysis (FP&A) system for a leading financial corporation, streamlining the processing of financial statements and report generation.",
    },
    {
      heading: "ERP",
      content:
        "Building a Virtual HR Assistant chatbot for authentication and personalized assistance to employees, freeing up workforce bandwidth for critical tasks.",
    },
    {
      heading: "EdTech",
      content:
        "Developing a dedicated KYC solution for a leading EdTech firm using OCR, facilitating the reading, processing, approval, and rejection of documents based on provided training.",
    },
    {
      heading: "Insurance",
      content:
        "Implementing an automation process for claims management, ensuring rule-based verification, data extraction, regulatory compliance, and preventing customer dissatisfaction and losses.",
    },
  ];

  return (
    <div>
      <IndustryUseCase useCases={industryUseCases} />
    </div>
  );
};

export default IndustryUseCases;
