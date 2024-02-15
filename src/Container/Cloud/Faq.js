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
      question:
        "What services does Blue Data Digital offer in Cloud consulting?",
      answer:
        "Blue Data Digital provides guidance on Cloud migration, Cloud-native application development, and strategic Cloud solutions. Our team ensures you leverage the Cloud for innovation, scalability, and operational efficiency.",
    },
    {
      question:
        "How can Cloud strategy consulting from Blue Data Digital benefit my business?",
      answer:
        "Cloud strategy consulting with Blue Data Digital yields benefits such as cost optimization, seamless migration, continuous monitoring, enhanced security, and round-the-clock support. We tailor our strategies to align with your business goals.",
    },
    {
      question:
        "When should I partner with Blue Data Digital for Cloud solutions consulting?",
      answer:
        "You can partner with Blue Data Digital at any stage of your Cloud journey. Whether you're already on the Cloud, in the migration process, or planning the switch, our certified consultants help boost your Cloud capabilities.",
    },
    {
      question:
        "I need Cloud Consulting partners for my project. Can Blue Data Digital help?",
      answer:
        "Absolutely! Our certified Cloud consultants collaborate with you to assess your business requirements, workload, and maturity. We develop a comprehensive roadmap for your Cloud transformation journey to ensure success.",
    },
  ];

  return (
    <section className="mx-auto px-2 py-10 md:px-0 ">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-blue-shade-3 sm:text-4xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 lg:mx-auto">
            Explore common questions about Cloud consulting with Blue Data
            Digital.
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
