// CryptocurrencyDevelopment.js
import React from "react";

const featuresData = [
  {
    title: "Security Token Offering (STO)",
    description:
      "Being the leading service provider in Security Token Offering (STO), we have been helping professional investors invest securely, transparently while complying with the regulations. Our rich experience in STO can help you ride the next big wave of crypto-based investing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3V21M5 9H19M5 15H19"
        ></path>
      </svg>
    ),
  },
  {
    title: "Initial Exchange Offering",
    description:
      "IEO is the next-gen of Cryptocurrency crowdfunding enabling the investor to enter the crypto world through a safe passage while investing in projects. Our team of Cryptocurrency developers builds the most unique tokens for your IEO’s and helps you list them on various platforms",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM9 9h6m-3 3v6"
        ></path>
      </svg>
    ),
  },
  {
    title: "Wallet Development",
    description:
      "Cryptocurrency wallet is a software functionality that allows users to earn, monitor and transfer virtual currencies. Damco has implemented multiple wallets including multisig and multi-currency wallets for enabling secure cryptocurrency transactions and stores it with universal wallets that are highly immune to both hard and soft fork",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM12 6c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3-3-1.3431-3-3 1.3431-3 3-3zM6 14a7 7 0 1114 0 7 7 0 01-14 0z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Cryptocurrency Exchange",
    description:
      "We have developed white-labeled, highly secured, controlled, centralized and decentralized exchange with the fastest matching engine. To carry out transactions in a reliable and secure way, we have designed and implemented robust and scalable platforms integrated with advanced Blockchain functionality      ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 17l6-6m0 0l6-6m-6 6l6 6M9 7h9a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2z"
        ></path>
      </svg>
    ),
  },
];

const CryptocurrencyDevelopment = () => {
  return (
    <div className=" bg-blue-shade-5/70 space-y-10 py-8 lg:pt-20 lg:pb-10">
      <div className="mx-auto flex flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl text-blue-shade-2 leading-[1.1] sm:text-3xl lg:text-[40px]">
          Cryptocurrency Development
        </h2>
        <p className="leading-normal w-[75%] text-muted-foreground sm:text-xl sm:leading-7">
          With our pool of skillful Cryptocurrency developers, we deliver highly
          secure, innovative, and independent cryptocurrency development
          solutions leveraging time-driven technologies to assist clients in
          making a long-lasting business impression and customer growth.
        </p>
      </div>
      <div className="grid md:grid-cols-4 w-[90%] mx-auto gap-10 mt-16 px-5">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start flex-col">
            <span className="text-blue-shade-2 bg-blue-shade-3/10 p-2 rounded-full">
              {feature.icon}
            </span>
            <div>
              <h3 className="font-bold text-xl text-blue-shade-2">
                {feature.title}
              </h3>
              <p className="text-md text-muted-foreground text-gray-800">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptocurrencyDevelopment;
