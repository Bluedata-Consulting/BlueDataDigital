import React from "react";

const CloudPartners = () => {
  return (
    <div className="px-4 space-y-10 py-8 md:py-8 lg:py-12">
      <div className="mx-auto flex max-w-[75rem] flex-col items-center space-y-4 text-center">
        <h1 className="font-bold text-3xl text-blue-shade-2 leading-[1.1] sm:text-3xl lg:text-[40px] pb-6">
          Blue Data Digital's Cloud Partner Ecosystem
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AWS Section */}
          <div className="bg-blue-shade-5/70 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-shade-1 mb-2">AWS</h2>
            <p className="text-gray-800 text-normal">
              As strategic partners with Amazon Web Services (AWS), Blue Data
              Digital offers a comprehensive suite of Cloud services and
              solutions tailored to meet enterprise requirements. Our AWS
              experts specialize in migrating legacy infrastructure and
              applications to the Cloud, ensuring a seamless and efficient
              transition for businesses.
            </p>
          </div>
          {/* Azure Section */}
          <div className="bg-blue-shade-5/70 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-shade-1 mb-2">
              Microsoft Azure
            </h2>
            <p className="text-gray-800 text-normal">
              Blue Data Digital leverages its partnership with Microsoft Azure
              to provide custom services and solutions, simplifying the
              migration of applications and infrastructures to the Azure Cloud.
              With our Azure experts and agile approach, we address the
              challenges of Cloud adoption and migration, ensuring a smooth and
              successful transformation for our clients.
            </p>
          </div>
          {/* Google Cloud Section */}
          <div className="bg-blue-shade-5/70 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-shade-1 mb-2">
              Google Cloud
            </h2>
            <p className="text-gray-800 text-md">
              Blue Data Digital delivers tailored Google Cloud services to
              develop and optimize solutions based on the business's maturity
              level and specific needs. Our proven expertise and Google Cloud
              competency, coupled with a DevOps approach, create a comprehensive
              delivery cycle for easy deployment, ensuring our clients
              experience the full potential of Google Cloud for their
              technology-driven initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudPartners;
