import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Article = () => {
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden"
          style={{
            minHeight: "500px",
            backgroundImage:
              "url('https://www.bluedataconsulting.in/wp-content/uploads/2021/11/analytics_consulting_data_ai_it_services_career-768x313.jpg')",
          }}
          title="Woman holding a mug"
        ></div>
        <div className="max-w-5xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-gray-900 font-bold text-6xl mb-8">
                Analytics & AI Solution
              </h1>

              {/* <p className="flex text-gray-700 text-xs mt-2">
                Written By:
                <div className="text-indigo-600 ml-1 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  Ahmad Sultani
                </div>{" "}
                <span className="ml-1 font-medium">In</span>
                <div className="text-xs ml-1 text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  Election
                </div>
                <div
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Politics
                </div>
              </p> */}

              <p className="text-xl my-5">
                Digital experience, analytics, and cloud are enabling
                technologies that have proven their value already to many
                digital companies across the world.They are the basis of
                numerous successful corporate strategies and new business
                models. This decade’s disruptors are a digital reality,
                cognitive technologies, and blockchain. Adoption is on the
                uptake, with business cases multiplying across industries.
              </p>

              <p className="text-xl my-5">
                Analytics includes foundational capabilities and tools that
                generate powerful insights. Data management, data governance,
                and supporting architecture are age old problems that not only
                are critical building blocks for AI programs but are tactical
                concerns as organizations work in a dynamic and complex
                regulatory environment with mandates on data residency, privacy,
                and usage.
              </p>

              <p className="text-xl my-5">
                We at Blue Data Consulting are a team of experts, have been
                helping organizations in building AI & Data products. Our
                consultants have experience of 10+ years while working with
                multiple organizations and building the new age AI & analytics
                products.
              </p>

              <h3 className="text-3xl font-bold mt-5 mb-2">
                Cognitive Technologies
              </h3>

              <p className="text-xl mb-5">
                Cognitive technologies, such as machine learning, neural
                networks, robotic process automation, bots, natural language
                processing, neural nets, and the broader domain of AI, have the
                potential to transform nearly every industry. <br />
                These technologies personalize and contextualize the
                human-technology interaction, allowing businesses to provide
                tailored language- and image-based information and services,
                with minimal or no human involvement.
              </p>

              <blockquote className="border-l-4 text-xl italic leading-8 my-5 p-5 text-indigo-600">
                Demand for cognitive technologies is skyrocketing—IDC forecasts
                spending to reach US$77.6 billion in 2022.
              </blockquote>

              <p className="text-xl my-5">
                We at Blue Data Consulting are a team of experts, have been
                helping organizations in building AI & Data products. Our
                consultants have experience of 10+ years while working with
                multiple organizations and building the new age AI & analytics
                products.
              </p>
              <h3 className="text-3xl font-bold mt-5 mb-2">Computer Vision</h3>
              <p className="text-xl mb-5">
                Computer vision is a field where we deal with data in the form
                of images and videos. The common applications of computer vision
                include image classification, object localization, object
                detection, tag generation from images, semantic and instance
                segmentation. We at Blue Data Consulting have the right set of
                experts to deliver computer vision-based applications and
                products.
              </p>

              <h3 className="text-3xl font-bold mt-5 mb-2">
                Natural Language Processing
              </h3>
              <p className="text-xl mb-5">
                Natural Language Processing is a field of AI which deals with
                data in the form of text and speech. Commonly used NLP
                applications are sentiment analysis, social media analysis,
                chatbots, conversational engines, operational bots, topic
                modeling, content filtering, language modeling, language
                translation, speech processing, speech to text, and text to
                speech conversion.
              </p>

              <div className="flex space-x-2 my-5">
                <div className="text-md text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  #Cognitive
                </div>

                <div className="text-md text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  #Computer Vision
                </div>

                <div className="text-md text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  #NLP
                </div>

                <div className="text-md text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  #Analytics
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
