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
        "How can Blue Data Digital leverage generative AI in consulting services?",
      answer:
        "At Blue Data Digital, we harness the power of generative AI in our consulting services to provide innovative solutions. Generative AI enables us to automate repetitive tasks, generate creative content, and optimize processes, ultimately delivering enhanced value to our clients.",
    },
    {
      question:
        "What benefits does generative AI bring to consulting projects at Blue Data Digital?",
      answer:
        "Generative AI offers numerous benefits to consulting projects at Blue Data Digital. It enables us to generate personalized insights, predict trends, and streamline decision-making processes. By leveraging generative AI, we empower our clients to make data-driven decisions and achieve their business objectives more efficiently.",
    },
    {
      question:
        "How does Blue Data Digital ensure ethical and responsible use of generative AI in consulting?",
      answer:
        "Ethical and responsible use of generative AI is paramount at Blue Data Digital. We adhere to strict guidelines and best practices to ensure fairness, transparency, and accountability in our AI solutions. Our team undergoes continuous training and stays updated on the latest developments in AI ethics to uphold the highest standards of integrity and trustworthiness.",
    },
    {
      question:
        "Can Blue Data Digital customize generative AI solutions to meet specific consulting needs?",
      answer:
        "Absolutely! At Blue Data Digital, we understand that every consulting project is unique. That's why we offer customizable generative AI solutions tailored to meet the specific needs and objectives of our clients. Whether you require natural language generation, image synthesis, or predictive modeling, our team will work closely with you to develop bespoke AI solutions that drive tangible business outcomes.",
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
            Discover more about our Cloud computing services through
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
