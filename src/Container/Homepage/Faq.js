import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const FaqSection = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cursor-pointer bg-blue-shade-5/50 rounded-md border border-blue-shade-1/35 shadow-lg shadow-blue-shade-1/25 transition-all duration-200">
      <div
        type="button"
        className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex text-xl font-semibold text-blue-shade-1">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-shade-1" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-shade-1" />
        )}
      </div>
      {isOpen && (
        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
          <p className="text-gray-700 text-lg">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqItems = [
    {
      question: "How does Blue Data Digital leverage AI in consulting?",
      answer:
        "Blue Data Digital specializes in leveraging Artificial Intelligence (AI) to provide transformative consulting solutions. We harness AI to optimize business processes, gain actionable insights, and drive innovation across various industries.",
    },
    {
      question: "What industries does Blue Data Digital cater to?",
      answer:
        "Blue Data Digital caters to a diverse range of industries, including telecommunication, health tech, edtech, manufacturing, and more. Our consulting expertise is tailored to meet the specific needs and challenges of each industry, driving intelligent solutions.",
    },
    {
      question:
        "Can Blue Data Digital assist in implementing blockchain solutions?",
      answer:
        "Yes, Blue Data Digital offers expertise in implementing blockchain solutions. Whether you are looking to enhance security, transparency, or streamline processes through blockchain, our team can guide you through the integration and optimization of blockchain technology.",
    },
    {
      question:
        "How can businesses benefit from Cloud Computing services by Blue Data Digital?",
      answer:
        "Blue Data Digital's Cloud Computing services empower businesses to cut operational costs, drive innovation, and address legacy challenges. We help businesses evolve their cloud capabilities, develop cloud-based applications, and accelerate product release.",
    },
  ];
  return (
    <section className="mx-auto px-12 py-10 md:px-12">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-blue-shade-3 sm:text-4xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 lg:mx-auto">
            Have questions? Find answers to commonly asked questions about Blue
            Data Digital and our services
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-4xl space-y-4 md:mt-16">
          {faqItems.map((faq, index) => (
            <FaqSection
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        <p className="textbase mt-6 text-center text-gray-700">
          Can&apos;t find what you&apos;re looking for?{" "}
          <Link
            to="/contact"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            className="font-semibold text-blue-shade-3 hover:underline"
          >
            Contact our support
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Faq;
