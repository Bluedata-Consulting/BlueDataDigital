import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const FaqSection = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
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
      question: "What kind of services do Cloud consulting firms offer?",
      answer:
        "Cloud consulting companies guide businesses in planning and implementing Cloud migration and developing Cloud-native applications and solutions. Their teams help you with the technical aspects of the Cloud, so you can innovate at speed and scale.",
    },
    {
      question: "How can Cloud strategy consulting benefit my business?",
      answer:
        "Cloud strategy consulting helps you realize several key benefits, some of which include cost optimization, hassle-free migration, continuous monitoring, enhanced security and risk management, speedy resolution of issues, and round-the-clock support.",
    },
    {
      question:
        "When should I partner with a Cloud solutions consulting company?",
      answer:
        "You can partner with a Cloud solutions consulting company at any stage of your Cloud journey. Whether you have already moved to the Cloud, are in the process of migrating or just planning to switch to the Cloud, we can help boost your Cloud capabilitie.",
    },
    {
      question:
        "I need Cloud Consulting partners for my project. Can you help?",
      answer:
        "Yes, we can. our certified Cloud consultants sit with you to closely assess your business requirements, state of maturity, workloads, and come up with a comprehensive roadmap for your Cloud transformation journey.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0 ">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
            assumenda
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
          Can&apos;t find what you&apos;re looking for?{" "}
          <a
            href="/"
            title=""
            className="font-semibold text-black hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};

export default Faq;
