import React from "react";
import "tailwindcss/tailwind.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import image from "../../Assets/image.png";
import feature1 from "../../Assets/1.png";
import feature2 from "../../Assets/2.png";
import feature3 from "../../Assets/3.png";
import feature4 from "../../Assets/4.png";
import consulting from "../../Assets/consulting.png";
import knowledge_bas_creation from "../../Assets/knowledge-base-creation.png";
import llm_config from "../../Assets/llm-config.png";
import prompt_engineering from "../../Assets/prompt-engineering.png";
import chatbot_development from "../../Assets/chatbot-development.png";

const Hero = () => {
  return (
    <section className="pt-10 md:pt-20">
      <div className="container mx-auto px-4 lg:flex lg:items-center">
        <div className="flex flex-col justify-center lg:text-center lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight md:text-4xl">
            Generative AI Services
          </h1>
          <p className="text-lg lg:text-xl mt-3 md:text-base">
            Innovate Responsibly with Our Generative AI Solutions
          </p>
          <p className="mt-6">
            <button
              type="button"
              className="py-2 px-5 text-lg bg-gray-900 hover:bg-gray-700 rounded text-white"
            >
              Contact Us
            </button>
          </p>
        </div>

        <div className="lg:w-1/2 mt-6 md:mt-0">
          <img
            src={image}
            alt="Kickstart your AI Journey"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

const Description = () => {
  return (
    <section className="mt-16 lg:pt-20 lg:pb-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold">
          Experience Power of Generative AI to Drive Fast-Paced Transformation
        </h2>
        <div className="flex flex-col md:flex-row justify-center mt-8">
          <p className="text-xl md:font-normal leading-relaxed w-2/3">
            When it comes to embracing generative AI, enterprises need
            assistance figuring out where to start and how to make the most of
            the technology. Damco, a trusted technology partner, can help your
            business cut through the noise by democratizing access to generative
            AI. Our seasoned tech experts employ advanced AI algorithms to craft
            bespoke, fit-for-purpose solutions that align perfectly with your
            unique needs. So, whether you are planning to optimize business
            operations, generate innovative ideas, or deliver exceptional
            customer experiences with next-gen AI, we have the expertise and
            experience to help you reach your desired future state.
          </p>
        </div>
      </div>
    </section>
  );
};

const MainFeatures = () => {
  return (
    <section id="features" className="py-20 lg:pb-40 lg:pt-40">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold">How We Can Help</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex-1 px-3">
              <div className="p-8 rounded-lg border border-solid border-gray-300 bg-white shadow-md h-full flex flex-col items-center">
                <div className="rounded-full overflow-hidden w-16 h-16 mb-4">
                  <img
                    src={feature.image}
                    alt={`Feature ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-xl flex-grow">
                  {feature.title}
                </p>
                <p className="mt-4">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Generative AI for Customer Experience",
    description:
      "Supercharge customer experience with intuitive chatbots and improve the performance of sales teams with product and offer knowledge assistants.",
    image: feature1,
  },
  {
    title: "Generative AI for Workplace Productivity",
    description:
      "Leverage AI-powered tools to automate mundane, routine tasks. Enable process optimization and efficiency with intelligent insights.",
    image: feature2,
  },
  {
    title: "Generative AI for Sales Acceleration",
    description:
      "Develop personalized content and presentations that resonate with individual clients, propelling the sales cycle forward.",
    image: feature3,
  },
  {
    title: "Generative AI for Scaling Enterprises",
    description:
      "Maximize business impact by building custom generative AI assistants trained with your proprietary data to address specific use cases.",
    image: feature4,
  },
];

const servicesData = [
  {
    title: "Generative AI Consulting",
    description:
      "Identify opportunities for integrating AI, building custom generative AI solutions, or optimizing existing AI systems with our consulting services. Our teams help you tap the power of AI for unprecedented growth and innovation.",
    image: consulting,
  },
  {
    title: "Knowledge Base Creation",
    description:
      "Ingest your unstructured organizational assets such as PDFs, internal websites, and images, and convert them into embeddings used to train and serve as the long-term memory for the generative AI model.",
    image: knowledge_bas_creation,
  },
  {
    title: "Large Language Model (LLM) Configuration",
    description:
      "We leverage advanced ML models to develop, configure, and train generative AI solutions tailored to your unique needs. We also validate the models with data sets and ensure they meet industry standards through security audits and testing.",
    image: llm_config,
  },
  {
    title: "Prompt Engineering",
    description:
      "Damco’s generative AI development teams develop, refine, and optimize prompts to enhance the accuracy and performance of generative AI models, so that you get relevant, high-quality, and unbiased responses, every single time.",
    image: prompt_engineering,
  },
  {
    title: "Chatbot Development",
    description:
      "Deliver personalized customer experiences through intuitive chatbots for sales, marketing, and customer support. These chatbots can be embedded directly into your application or deployed as a standalone application.",
    image: chatbot_development,
  },
];

const ServicesSection = () => {
  return (
    <div className=" px-10 pt-20 bg-gray-50">
      <p className="text-3xl lg:text-5xl font-bold text-center">
        Our Generative AI Services
      </p>
      {servicesData.map((service, index) => (
        <section id={`service${index + 1}`} key={index} className="py-10">
          <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
            {index % 2 === 0 ? (
              <>
                <div className="lg:w-1/2">
                  <div>
                    <h3 className="text-3xl font-bold leading-tight">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xl font-normal leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 w-full lg:w-1/2 flex justify-end">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-30 h-30"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="mt-10 lg:mt-0 w-full lg:w-1/2 flex justify-start">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-30 h-30"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div>
                    <h3 className="text-3xl font-bold leading-tight">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xl font-normal leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

const principlesData = [
  {
    title: "Secure",
    content:
      "Damco employs robust security measures to safeguard your data from unauthorized access, breaches, and cyber threats. Our generative AI solutions are designed with encryption, access controls, and continuous monitoring to mitigate risks and maintain the integrity of sensitive information.",
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

const PrinciplesSection = () => {
  return (
    <section id="principles" className="py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <p className="text-2xl lg:text-4xl font-bold text-center md:text-3xl">
          Our Generative AI Principles
        </p>
        <div className="flex flex-col md:flex-row md:-mx-3 md:flex-wrap mt-6">
          {principlesData.map((principle, index) => (
            <div key={index} className="md:w-1/2 px-3 mt-6">
              <div className="p-6 rounded-lg border border-solid border-gray-200 bg-white h-60 shadow-lg">
                <p className="text-xl font-semibold">{principle.title}</p>
                <p className="mt-2 text-sm md:text-base font-normal">
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

const App = () => (
  <div>
    <main className="text-gray-900">
      <Header />
      <Hero />
      <Description />
      <MainFeatures />
      <ServicesSection />
      <PrinciplesSection />
      <Footer />
    </main>
  </div>
);

export default App;
