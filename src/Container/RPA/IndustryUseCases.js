import React from "react";

const IndustryUseCase = ({ useCases }) => {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-16 py-16">
      <h2 className="font-bold text-5xl text-center pb-2">
        RPA Industry Use Cases
      </h2>
      <p className="text-center font-normal leading-normal text-muted-foreground sm:text-xl sm:leading-7">
        Our Robotic Process Automation development serves the purpose of
        delivering best-fit solutions and trained bots.
      </p>
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
      heading: "Banking",
      content:
        "Incorporating OCR and cognitive automation, transforming the customer onboarding process of a leading banking chain to complete the process instantaneously, adding to the customer experience.",
    },
    {
      heading: "IT",
      content:
        "Developed an RPA-based solution for enabling the installation of very complex software with interdependent components via a single click, making it time efficient and user-friendly.",
    },
    {
      heading: "Finance",
      content:
        "Created a semi-automated Financial Planning & Analysis (FP&A) system for a leading financial corporation that processed financial statements from numerous departments and merged them to churn reports.",
    },
    {
      heading: "ERP",
      content:
        "Developed a Virtual HR Assistant chatbot that authenticated employees and served as per their requirements, freeing up workforce bandwidth to work on critical tasks.",
    },
    {
      heading: "EdTech",
      content:
        "Made a dedicated KYC solution against a leading EdTech firm’s requirement using OCR to read, process, approve and reject formats basis the training provided.",
    },
    {
      heading: "Insurance",
      content:
        "Developed an automation process for claims management for rule-based claim verification, extraction of relevant data, regulatory compliance, and preventing customer dissatisfaction and losses.",
    },
  ];

  return (
    <div >
      <IndustryUseCase useCases={industryUseCases} />
    </div>
  );
};

export default IndustryUseCases;
