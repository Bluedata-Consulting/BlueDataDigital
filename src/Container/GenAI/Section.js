import React from "react";

const Section = () => {
  return (
    <section className="p-4 lg:px-8 py-20">
      <div className="mx-auto pb-8 flex max-w-[65rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl text-blue-shade-2 leading-[1.1] sm:text-3xl lg:text-[40px]">
          Tech Consulting Use Cases
        </h2>
      </div>

      <div className="container mx-auto">
        {/* First Row */}
        <div className="flex justify-center gap-8">
          {/* First Section */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm border border-blue-shade w-1/3">
            <img
              src="consulting.png"
              alt=""
              className="h-60 w-auto aspect-video"
            />
            <div className="flex flex-col flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                Generative AI Consulting
              </h3>
              <p className="my-2 text-gray-700">
                Identify opportunities for integrating AI, building custom
                generative AI solutions, or optimizing existing AI systems with
                our consulting services. Our teams help you tap the power of AI
                for unprecedented growth and innovation.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm border border-blue-shade w-1/3">
            <img src="prompt.png" alt="" className="h-60 w-auto aspect-video" />
            <div className="flex flex-col  flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                Prompt Engineering
              </h3>
              <p className="my-2 text-gray-700">
                Blue Data Digital generative AI development teams develop,
                refine, and optimize prompts to enhance the accuracy and
                performance of generative AI models, so that you get relevant,
                high-quality, and unbiased responses, every single time.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm border border-blue-shade w-1/3">
            <img src="llm.png" alt="" className="h-60 w-auto aspect-video" />
            <div className="flex flex-col  flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                LLM Configuration
              </h3>
              <p className="my-2 text-gray-700">
                We leverage advanced ML models to develop, configure, and train
                generative AI solutions tailored to your unique needs. We also
                validate the models with data sets and ensure they meet industry
                standards through security audits and testing.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-center gap-8 mt-8">
          {/* Third Section */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm border border-blue-shade w-1/3">
            <img
              src="chatbot.png"
              alt=""
              className="h-60 w-auto aspect-video"
            />
            <div className="flex flex-col  flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                Chatbot Development
              </h3>
              <p className="my-2 text-gray-700">
                Deliver personalized customer experiences through intuitive
                chatbots for sales, marketing, and customer support. These
                chatbots can be embedded directly into your application or
                deployed as a standalone application.
              </p>
            </div>
          </div>

          {/* Fourth Section */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm border border-blue-shade w-1/3">
            <img
              src="content.png"
              alt=""
              className="h-60 w-auto aspect-video"
            />
            <div className="flex flex-col  flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                Content Generation
              </h3>
              <p className="my-2 text-gray-700">
                Generate unique and engaging content formats, like poems, code,
                scripts, musical pieces, email, letters, etc., tailored to your
                specific needs and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
