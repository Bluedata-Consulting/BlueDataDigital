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
              src="dt-min.jpg"
              alt=""
              className="h-60 w-auto aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                Digital Transformation
              </h3>
              <p className="my-2 text-gray-700">
                Assisted a multinational corporation in their digital
                transformation journey by implementing AI and ML solutions,
                optimizing business processes, and enhancing overall efficiency.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm border border-blue-shade w-1/3">
            <img
              src="ca.jpg"
              alt=""
              className="h-60 w-auto aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                Customized Analytics
              </h3>
              <p className="my-2 text-gray-700">
                Provided tailored analytics solutions for tech startups,
                enabling them to gain actionable insights from their data and
                make informed decisions for sustainable growth.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm border border-blue-shade w-1/3">
            <img
              src="ipd-min.jpg"
              alt=""
              className="h-60 w-auto aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                Innovative Product Development
              </h3>
              <p className="my-2 text-gray-700">
                Collaborated with emerging tech companies to develop innovative
                products powered by AI and ML, positioning them as industry
                leaders in their respective niches.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-center gap-8 mt-8">
          {/* Third Section */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm border border-blue-shade w-1/3">
            <img
              src="dsc-min.jpg"
              alt=""
              className="h-60 w-auto aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                Data Security Consulting
              </h3>
              <p className="my-2 text-gray-700">
                Offered expertise in data security consulting, implementing
                advanced AI-driven security measures to safeguard sensitive
                information for financial and technology clients.
              </p>
            </div>
          </div>

          {/* Fourth Section */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm border border-blue-shade w-1/3">
            <img
              src="cee.png"
              alt=""
              className="h-60 w-auto aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                Customer Experience Enhancement
              </h3>
              <p className="my-2 text-gray-700">
                Enhanced customer experience for e-commerce businesses by
                deploying AI-based chatbots, personalized recommendations, and
                predictive analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
