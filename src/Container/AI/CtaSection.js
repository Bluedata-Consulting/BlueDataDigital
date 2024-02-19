import React from "react";
import { Link } from "react-router-dom";

function CtaSection() {
  return (
    <section className="bg-blue-shade-5/70">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-blue-shade-2 sm:text-[40px] leading-10">
              AI & ML Solutions for Automation
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Blue Data Digital is a top tech consultancy, providing advanced AI
              and ML solutions to help businesses innovate, automate, and stay
              competitive in a rapidly evolving tech landscape. With us you can
              harness the power of AI to automate operations, enhance analytics,
              and future-proof your business. Our services allow you to derive
              valuable insights and tap into new revenue streams by leveraging
              the full potential of your data.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className="text-blue-shade-2 hover:text-blue-shade-4 font-medium"
              >
                Get started
                <span className="ml-2">&#8594;</span>
              </Link>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="ai-icon.png"
              alt="About"
              className="object-cover scale-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
