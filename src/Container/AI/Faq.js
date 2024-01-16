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
      question: "How do I choose an AI & ML company for my requirements?",
      answer:
        "There are a number of factors you must consider while choosing an AI & ML company for their development and maintenance requirements, including their exposure to different industries and specific to your industry, the types of solutions they build, and the support they provide post-implementation. Damco is one of the leading and renowned AI & ML services providers with cross-industry experience and a 99.8% client satisfaction rate.",
    },
    {
      question:
        "Can I hire developers under Machine Learning and AI services as per my requirements?",
      answer:
        "Yes, you certainly can hire developers under our Build Your Team model under our Machine Learning and AI services. These expert developers will be working with your team to deliver the requirements and can be hired individually or as managed teams.",
    },
    {
      question:
        "Will I have control over such hired resources taken from an AI & ML solutions company?",
      answer:
        "When you hire resources from an AI & Machine Learning Services company such as Damco, you get the assurance of clear communication with transparent policies. A convenient communication platform is provided to keep the channel open and the hired resources work as your own integral team.",
    },
    {
      question: "What is the general cost of developing AI & ML solutions?",
      answer:
        "Well, it completely depends on a number of factors, including the scope of the project, the number of solutions developed, man-hours invested and more. Damco provides time-tested AI & ML consulting to its clientele and assesses the project before initiating to give a ballpark figure to go ahead with.",
    },
  ];

  return (
    <section className="mx-auto bg-gray-100 px-2 py-10 md:px-0 ">
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
