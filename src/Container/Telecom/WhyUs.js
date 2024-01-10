import React from "react";

const WhyUs = () => {
  const reasonsData = [
    {
      heading: "Real-time Analysis",
      text: "We aggregate and organize data from various sources, such as networks, servers, and devices, to perform real-time data analysis for better decision-making.",
    },
    {
      heading: "Comprehensive Data Analytics Platform",
      text: "Our experts help you integrate telecom data from different sources into a unified platform and analyze them for insights and trends in real-time.",
    },
    {
      heading: "Advanced Analytics Techniques",
      text: "We use advanced data analytics tools and techniques to analyze complex telecom data patterns and extract critical insights.",
    },
    {
      heading: "Experienced Team",
      text: "Our team consists of expert data analysts, data scientists, and network engineers with vast knowledge and skills in the telecom industry.",
    },
    {
      heading: "Reduced Downtime",
      text: "We help you monitor data on network performance, detect anomalies and respond in real-time to minimize disruption and downtime.",
    },
    {
      heading: "Improved Data Quality",
      text: "Our experts assist you in improving telecom data quality using data validation, cleansing, enrichment, and integration techniques.",
    },
  ];

  return (
    <section className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:pt-10 my-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Why Choose Us?
        </h2>
      </div>

      <div className="mx-auto pt-4 grid justify-center gap-4 sm:grid-cols-2 md:max-w-full md:grid-cols-2">
        {reasonsData.map((reason, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border border-gray-3 00 bg-gray-50/95 select-none p-4"
          >
            <div className="mb-4">
              <h3 className="text-lg font-bold">{reason.heading}</h3>
            </div>
            <p className="text-md text-muted-foreground">{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
