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
      question: "How does outsourcing to a Blockchain development agency work?",
      answer:
        "Our Subject Matter Experts (SMEs) will reach out to understand your requirements and assess the project scope. Following this, we provide a detailed project proposal with various engagement models for you to choose from. Once the contract is signed, we commence the project immediately.",
    },
    {
      question: "Can I hire a Blockchain developer on a full-time basis?",
      answer:
        "Yes, you can. We offer ready-to-hire skilled resources with extensive experience in Blockchain and related technologies for full-time project development.",
    },
    {
      question:
        "How long does it take to go live with a Blockchain development project?",
      answer:
        "The project duration varies depending on the scope, ranging from a few weeks to a few months. We follow the Agile development approach to ensure timely delivery with the highest quality standards.",
    },
    {
      question:
        "Does a blockchain development firm offer post-development support?",
      answer:
        "Yes, we do. With our extended software protection plans, we take full ownership of post-development maintenance and updates. In other engagements, we provide support on a case-by-case basis.",
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
