import React from "react";

const features = [
  {
    heading: "Strategic RPA Consultation",
    description:
      "Our RPA consulting services are backed by a dedicated Centre of Excellence. We help businesses strategize and validate RPA use cases, ensuring a successful adoption of RPA-based solutions to maximize benefits.",
  },
  {
    heading: "Comprehensive RPA Implementation",
    description:
      "We deliver RPA bots in phases, including pilot and full-scale trained bots. Our services encompass testing for Artificial Intelligence, integration with cognitive technologies, Robotic Process Automation Platform Implementation, Design Automation, Workflow Automation, and more.",
  },
  {
    heading: "Custom RPA Software Development",
    description:
      "Experience strategic development of solutions, including Intelligent Document Recognition Development, Document Capture Software, Extraction Technology Development, Image Processing Development, Desktop and GUI Automation, Web Scraping Automation, and Analytics Automation.",
  },
  {
    heading: "Efficient RPA Integration Services",
    description:
      "Benefit from seamless integration of RPA solutions and platforms into your custom business workflows, processes, or applications. We specialize in integrating with Enterprise Resource Planning (ERP) systems, Customer Relationship Management (CRM) platforms, Content Management Systems (CMS), and more.",
  },
  {
    heading: "Proactive RPA Maintenance & Support",
    description:
      "Ensure the longevity of your RPA solutions with our time-proven accelerators. Our services include custom development of RPA software, on-demand RPA/IPA solution architects, and skilled developers proficient in Automation Anywhere, UiPath, Blue Prism, Keras, Caffe, Tensor Flow, and more.",
  },
  {
    heading: "Reliable RPA Managed Services",
    description:
      "Opt for SLA-based arrangements for RPA solution maintenance, administration, help desk, and on-demand enhancements. We offer SLA-based and ad-hoc arrangements on hourly/weekly/monthly/project-basis with on and off-site support across major geographies.",
  },
];

const OfferingSection = () => {
  return (
    <section id="features" className="px-4 space-y-10 py-8 md:py-12 lg:py-20">
      <div className="mx-auto flex max-w-[65rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl text-blue-shade-2 leading-[1.1] sm:text-3xl lg:text-[40px]">
          Blue Data Digital's RPA Services
        </h2>
        <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-7">
          Elevate your business processes with our advanced Robotic Process
          Automation (RPA) services. Our expertise goes beyond traditional
          methods, bringing efficiency and innovation to your operations.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-10 sm:grid-cols-2 md:max-w-[95%] md:grid-cols-3">
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
  <div className="relative bg-blue-shade-5/70 overflow-hidden rounded-lg select-none  hover:shadow hover:shadow-blue-shade-3/75 p-2">
    <div className="flex h-full flex-col justify-between rounded-md p-1">
      <div className="space-y-2">
        <h3 className="font-bold text-xl text-blue-shade-2">{title}</h3>
        <p className="text-md text-muted-foreground text-gray-800">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default OfferingSection;
