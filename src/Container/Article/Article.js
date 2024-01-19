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
              "url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1')",
          }}
          title="Woman holding a mug"
        ></div>
        <div className="max-w-5xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-gray-900 font-bold text-6xl mb-8">
                Technology Consulting
              </h1>

              {/* <p className="flex text-gray-700 text-md mt-3">
                Written By:
                <div className="text-indigo-600 ml-1 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  Ahmad Sultani
                </div>{" "}
                <span className="ml-1 font-medium">In</span>
                <div className="text-md ml-1 text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  Election Politics
                </div>
              </p> */}

              <p className="text-xl my-5">
                <span>As</span> technologies such as Digital platforms, RPA,
                machine learning, and AI increasingly become key drivers of
                organizational performance, enterprises are realizing the need
                to shift from personal heroics to engineered performance to more
                efficiently move ML models from development through to
                production and management.
              </p>

              {/* <h3 className="text-2xl font-bold my-5">
                #1. What is Lorem Ipsum?
              </h3> */}

              <p className="text-xl  my-5">
                Once considered peripheral, ML technology is becoming a core
                part of many business strategies around the world.From health
                care to agriculture, fintech to media and entertainment, ML
                holds great promise for many industries. Driven by the wide
                availability of cloud-based computing power, storage capacity,
                and easy-to-use AI toolsets, the normalization of AI and ML
                continues at a rapid pace.
              </p>

              {/* <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </blockquote> */}

              <p className="text-xl my-5">
                However, before enterprises can scale from dozens to thousands
                of ML models and make machine learning an integral part of their
                strategy, they need to address the AI skills gap and integrate
                ML practices into individual lines of business.
              </p>

              <p className="text-xl my-5">
                A successful adaption of technology within the right timeline
                requires the right approach & strategy which comes from
                experience and expertise that some of the project teams may lag
                based on the type of technology they are utilizing.
              </p>
              <p className="text-xl my-5">
                This is where we come in by partnering with our clients we act
                as an extension to the internal team and help to develop the
                strategy & adopt the right approach.
              </p>
              <div className="flex space-x-2 my-5">
                <div className="text-md text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  #ML
                </div>

                <div className="text-md text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  #rpa
                </div>

                <div className="text-md text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  #digital
                </div>

                <div className="text-md text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  #trump
                </div>

                <div className="text-md text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  #artifical
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
