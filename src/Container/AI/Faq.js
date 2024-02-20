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
          <p className="text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqItems = [
    {
      question: "What services does Blue Data Digital offer?",
      answer:
        "Blue Data Digital is a tech consulting company specializing in cutting-edge Artificial Intelligence and Machine Learning services. We provide a range of solutions to help businesses leverage AI for enhanced decision-making, automation, and business intelligence. Explore our services to discover how we can elevate your business.",
    },
    {
      question: "How can I benefit from Blue Data Digital's AI & ML expertise?",
      answer:
        "Blue Data Digital offers AI & ML consulting and development services tailored to your business needs. Whether you're looking to automate processes, implement predictive analytics, or develop AI-powered applications, our team of experts is dedicated to delivering solutions that drive business growth and efficiency.",
    },
    {
      question: "Can I hire AI & ML developers from Blue Data Digital?",
      answer:
        "Absolutely! Blue Data Digital provides flexible hiring models for AI & ML developers. You can hire skilled professionals to work on your specific projects. Our developers, experienced in AI and Machine Learning, can be hired individually or as part of a managed team, ensuring your project's success.",
    },
    {
      question:
        "How transparent is the communication with Blue Data Digital's hired resources?",
      answer:
        "When you hire resources from Blue Data Digital, you gain full control and transparency. We prioritize clear communication with transparent policies. You'll have access to a convenient communication platform, fostering an open channel between your team and our hired resources. Consider them as an integral part of your team.",
    },
    {
      question:
        "What factors determine the cost of developing AI & ML solutions with Blue Data Digital?",
      answer:
        "The cost of developing AI & ML solutions with Blue Data Digital depends on various factors, including the project scope, complexity, and man-hours invested. Our experienced team assesses each project individually to provide accurate estimates. Trust Blue Data Digital for time-tested AI & ML consulting and cost-effective solutions.",
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
            Data Digital and our services.
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
