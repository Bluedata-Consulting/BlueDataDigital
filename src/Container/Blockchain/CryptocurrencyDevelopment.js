import React from "react";

const CryptocurrencyDevelopment = () => {
  const featuresData = [
    {
      title: "Initial Coin Offering (ICO) Development",
      description:
        "With our extensive experience in building Blockchain and crypto technologies, we can help you build a fully compliant, secure and highly scalable ICO Management platform to facilitate investor reporting, crowdfunding and crowd sales, KPI tracking and community management",
    },
    {
      title: "Security Token Offering (STO)",
      description:
        "Being the leading service provider in Security Token Offering (STO), we have been helping professional investors invest securely, transparently while complying with the regulations. Our rich experience in STO can help you ride the next big wave of crypto-based investing",
    },
    {
      title: "Initial Exchange Offering",
      description:
        "IEO is the next-gen of Cryptocurrency crowdfunding enabling the investor to enter the crypto world through a safe passage while investing in projects. Our team of Cryptocurrency developers builds the most unique tokens for your IEO’s and helps you list them on various platforms",
    },
    {
      title: "Cryptocurrency Exchange Development",
      description:
        "We have developed white-labeled, highly secured, controlled, centralized and decentralized exchange with the fastest matching engine. To carry out transactions in a reliable and secure way, we have designed and implemented robust and scalable platforms integrated with advanced Blockchain functionality",
    },
    {
      title: "Wallet Development",
      description:
        "Cryptocurrency wallet is a software functionality that allows users to earn, monitor and transfer virtual currencies. Damco has implemented multiple wallets including multisig and multi-currency wallets for enabling secure cryptocurrency transactions and stores it with universal wallets that are highly immune to both hard and soft fork",
    },
  ];

  return (
    <div className="bg-gray-100 my-8 space-y-10 py-8 md:py-12 lg:py-20">
      <div className="mx-auto flex flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Cryptocurrency Development
        </h2>
        <p className="leading-normal w-3/4 text-muted-foreground sm:text-xl sm:leading-7">
          With our pool of skillful Cryptocurrency developers, we deliver highly
          secure, innovative, and independent cryptocurrency development
          solutions leveraging time-driven technologies to assist clients in
          making a long-lasting business impression and customer growth.
        </p>
      </div>
      <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-16 px-5">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start flex-col">
            <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908ZM2 4.80578L7 6.93078V12.9649L2 10.6316V4.80578ZM8 12.9649L13 10.6316V4.80578L8 6.93078V12.9649ZM7.5 6.05672L12.2719 4.02866L7.5 1.80176L2.72809 4.02866L7.5 6.05672Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-xl">{feature.title}</h3>
              <p className="mt-1 text-md text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptocurrencyDevelopment;
