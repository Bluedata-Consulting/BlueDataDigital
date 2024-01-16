import React from "react";

const CloudPartners = () => {
  return (
    <div className="bg-gray-100 my-8 px-4 py-16">
      <div className="container mx-auto pt-10 pb-16">
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-10">
          Our Cloud Partner Ecosystem
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AWS Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">AWS</h2>
            <p className="text-gray-700 text-normal">
              As strategic Amazon Web Services Partners, we provide a
              comprehensive suite of Cloud services and solutions to deliver the
              best-fit enterprise requirements. Our AWS experts enable
              businesses to move their legacy infrastructure and applications to
              the Cloud.
            </p>
          </div>
          {/* Azure Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Microsoft Azure
            </h2>
            <p className="text-gray-700 text-normal">
              Leveraging the Microsoft Azure partnership, we offer custom
              services and solutions to facilitate a seamless migration of
              applications and infrastructures over the Azure Cloud. With our
              Azure experts and agile approach, we simplify the challenges of
              Cloud adoption and migration.
            </p>
          </div>
          {/* Google Cloud Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Google Cloud
            </h2>
            <p className="text-gray-700 text-md">
              We deliver bespoke Google Cloud services to develop and optimize
              solutions as per the business maturity level and needs. Our proven
              expertise and Google Cloud competency with the DevOps approach
              create a comprehensive delivery cycle for easy deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudPartners;
