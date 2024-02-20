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
        <span className="flex text-lg font-semibold text-blue-shade-1">
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
    <section className="mx-auto px-12 py-10 md:px-12">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-blue-shade-3 sm:text-4xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 lg:mx-auto">
            Discover more about our Blockchain development services through
            these commonly asked questions.
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
          Can't find what you're looking for?{" "}
          <Link
            href="/contact"
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
