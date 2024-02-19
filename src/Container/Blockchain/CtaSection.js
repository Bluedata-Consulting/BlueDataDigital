import React from "react";
import { Link } from "react-router-dom";

function CtaSection() {
  return (
    <section className="bg-blue-shade-5/70">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-blue-shade-2 sm:text-[40px] leading-10">
            Revolutionize  Business with Blockchain Technology
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Blockchain transforms transparency, security, and traceability.
              Blue Data Digital maximizes its potential, redefining data
              integrity, security, and trust for businesses.We take a
              multidisciplinary approach, offering custom enterprise Blockchain
              development services. From strategy assessment, rapid prototyping,
              and solution design to complex implementation and entire ecosystem
              management, we guide enterprises through a transformative journey
              to maximize their potential.
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
              src="blockchain-bg.png"
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
