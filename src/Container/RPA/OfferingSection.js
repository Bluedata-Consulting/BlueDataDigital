import React from "react";

const features = [
  {
    heading: "RPA Consulting Services",
    description:
      "RPA consulting services are backed by our time-tested Centre of Excellence to help businesses validate use cases and chalk-out strategies for successful adoption of RPA-based solutions and extract maximum benefits from the technology.",
  },
  {
    heading: "RPA Implementation Services",
    description:
      "Delivering bots in phases (pilot and full-scale trained) with testing for Artificial Intelligence, and other cognitive technologies integration, along with Robotic Process Automation Platform Implementation, Design Automation, Workflow Automation, and more.",
  },
  {
    heading: "RPA Software Development",
    description:
      "Strategic development of solutions for Intelligent Document Recognition Development, Document Capture Software, Extraction Technology Development, Image Processing Development, Desktop and GUI Automation, Web Scraping Automation, and Analytics Automation.",
  },
  {
    heading: "RPA Integration Services",
    description:
      "Integration of RPA solutions and platforms into custom business workflows, processes, or applications— Enterprise Resource Planning (ERP) systems, Customer Relationship Management (CRM) platforms, Content Management Systems (CMS), etc.",
  },
  {
    heading: "RPA Maintenance & Support",
    description:
      "Time-proven accelerators for custom development of RPA software or RPA-enabled products, on-demand RPA/IPA solution architects and developers skilled in Automation Anywhere, UiPath, Blue Prism, Keras, Caffe, Tensor Flow, etc.",
  },
  {
    heading: "RPA Managed Services",
    description:
      "SLA-based arrangements for RPA solution maintenance, including, administration, help desk, and on-demand enhancements. SLA-based and ad-hoc arrangements on hourly/weekly/monthly/project-basis with on and off-site support across all major geographies.",
  },
];

const OfferingSection = () => {
  return (
    <section
      id="features"
      className="container mx-auto px-4 my-8 space-y-10 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-20"
    >
      <div className="mx-auto flex max-w-[65rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-7xl">
          Our RPA Services
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-7">
          RPA Solutions From a Leading RPA Services Company to Evolve Beyond
          Conventional Processes and Streamline Productivity
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[70rem] md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.heading}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-gray-600 p-2">
    <div className="flex h-full flex-col justify-between rounded-md p-1">
      <div className="space-y-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-md text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

export default OfferingSection;
