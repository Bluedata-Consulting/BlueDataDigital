import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const FaqSection = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cursor-pointer bg-white rounded-md border border-gray-400 shadow-lg transition-all duration-200">
      <div
        type="button"
        className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex text-lg font-semibold text-black">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </div>
      {isOpen && (
        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
          <p className="text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqItems = [
    {
      question: "How can Blue Data Digital's RPA Services benefit my business?",
      answer:
        "Blue Data Digital's RPA services can enhance your business by automating mundane tasks, improving efficiency, reducing errors, and allowing your workforce to focus on more strategic initiatives. Our tailored RPA solutions bring transformative changes to various industries.",
    },
    {
      question: "Do I really need RPA for my business processes?",
      answer:
        "Our RPA consulting services assess your business processes to identify repetitive tasks suitable for automation. We guide you in understanding the potential benefits, scope, and efficiency improvements that RPA can bring to your business.",
    },
    {
      question: "Can RPA streamline KYC processes for better efficiency?",
      answer:
        "Yes, Blue Data Digital's RPA tools are designed to automate various KYC tasks, including automated customer alerts, identification verification, and document routing. This ensures faster turn-around time and higher accuracy in the KYC process.",
    },
    {
      question: "What is the cost of availing RPA Implementation Services?",
      answer:
        "The cost of RPA implementation services varies based on your business requirements, engagement model, man-hours, technology stack, and other factors. Blue Data Digital offers premium RPA solutions tailored to fit the budget of every business.",
    },
  ];

  return (
    <section className="bg-gray-100 mx-auto px-2  py-16 md:px-0 ">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Explore common questions about Blue Data Digital's RPA services.
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
        <p className="textbase mt-6 text-center text-gray-600">
          Can't find what you're looking for?{" "}
          <Link
            to="/contact"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            className="font-semibold text-black hover:underline"
          >
            Contact our support
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Faq;
