import React from "react";

const Principle = () => {
  const principlesData = [
    {
      title: "Secure",
      content:
        "Blue Data Digital employs robust security measures to safeguard your data from unauthorized access, breaches, and cyber threats. Our generative AI solutions are designed with encryption, access controls, and continuous monitoring to mitigate risks and maintain the integrity of sensitive information.",
    },
    {
      title: "Ethical",
      content:
        "We uphold ethical standards in generative AI development, ensuring our solutions respect user privacy and adhere to fairness and transparency. We actively work to prevent biases in AI algorithms, fostering equal treatment and inclusivity.",
    },
    {
      title: "Intuitive",
      content:
        "We strive to build AI systems that are user-friendly and intuitive in nature. Our teams emphasize designing interfaces and interactions that enable users to seamlessly engage with AI, ensuring an impeccable experience.",
    },
    {
      title: "Reliable",
      content:
        "We implement rigorous quality assurance during the development and training of our AI models. This includes thorough testing, validation, and monitoring to identify and address issues related to content quality, coherence, and relevance.",
    },
  ];
  return (
    <section id="principles" className="mb-20">
      <div className="container mx-auto px-4">
        <p className="text-5xl font-bold text-center">
          Our Generative AI Principles
        </p>
        <div className="flex flex-col md:flex-row md:-mx-3 md:flex-wrap mt-6">
          {principlesData.map((principle, index) => (
            <div key={index} className="md:w-1/2 px-3 mt-6">
              <div className="px-6 py-6 rounded-lg border border-solid border-gray-200 bg-white h-full shadow-lg">
                <p className="text-xl font-bold">{principle.title}</p>
                <p className="mt-2 text-md md:text-md font-normal">
                  {principle.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principle;
