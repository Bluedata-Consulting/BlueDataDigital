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
              src="banking.png"
              alt=""
              className="h-60 w-auto aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                Banking & Finance
              </h3>
              <p className="my-2 text-gray-700">
                Transform the loan process and settlement with smart contracts
                and DLT. Expedite syndicate loans and secure payments with a
                fully-functional blockchain solution. .
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm border border-blue-shade w-1/3">
            <img
              src="security.png"
              alt=""
              className="h-60 w-auto aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                Digital Verification
              </h3>
              <p className="my-2 text-gray-700">
                Innovate digital verification with a blockchain solution.
                Participants can securely upload verifiable credentials,
                creating a digital folder for certification and details.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm border border-blue-shade w-1/3">
            <img src="health.png" alt="" className="h-60 w-auto aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                Healthcare
              </h3>
              <p className="my-2 text-gray-700">
                Facilitate smart patient-facing and researcher-facing systems
                for clinical trials. Ethereum-based smart contracts provide
                BlockTrial functionality and metadata search for healthcare
                companies.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-center gap-8 mt-8">
          {/* Third Section */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm border border-blue-shade w-1/3">
            <img
              src="trading.png"
              alt=""
              className="h-60 w-auto aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                Cryptocurrency Trading
              </h3>
              <p className="my-2 text-gray-700">
                Build a secure and transparent crypto-exchange solution. Cater
                to B2B and B2C crypto-trading needs, ensuring traceability for
                an innovative cryptocurrency trading company.
              </p>
            </div>
          </div>

          {/* Fourth Section */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm border border-blue-shade w-1/3">
            <img src="voting.png" alt="" className="h-60 w-auto aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 bg-blue-shade-5/70">
              <h3 className="text-3xl font-bold text-blue-shade-1">
                Proxy Voting
              </h3>
              <p className="my-2 text-gray-700">
                Enable decentralized trustless proxy voting with a
                blockchain-powered solution. Utilize private Ethereum and Quorum
                for secure shareholder voting in annual general meetings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
