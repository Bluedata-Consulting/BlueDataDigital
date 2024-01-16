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
      question: "How do Robotic Process Automation Services help a business?",
      answer:
        "Robotic Process Automation development services enable businesses to transfer their mundane and repetitive tasks from the workforce to bots trained for doing such tasks tirelessly. This results in generating more bandwidth for the workforce to focus on more critical tasks and improve process accuracy with the removal of human errors.",
    },
    {
      question: "Is RPA actually needed for my business?",
      answer:
        "Our Robotic Process Automation consulting services help assess if your business has repetitive tasks that can be automated through technology. Once that has been taken care of, our experts help you understand the scope of automation possible for the said process and how it will benefit your business and its efficiency.",
    },
    {
      question: "Is RPA the solution for a quick and secure KYC process?",
      answer:
        "KYC is an essential yet time-consuming process that banking and financial institutions are required to regularly perform. As an eminent RPA development company, Damco provides cutting-edge RPA tools that automate several KYC tasks from automated customer alerts to identification verification and document routing. This ensures faster turn-around time as well as higher process accuracy.",
    },
    {
      question:
        "How much does it cost to avail of RPA Implementation Services?",
      answer:
        "The actual cost of RPA implementation services depends on your business requirements, the engagement model you choose, total man-hours required, the technology stack used, and other related factors. As a leading Robotic Process Automation company, we offer premium quality solutions that fit the budget of every business.",
    },
  ];

  return (
    <section className="bg-gray-100 mx-auto px-2 my-10 py-16 md:px-0 ">
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
