import React from "react";
import BenefitImage from "../../Assets/benefit.png";

const ImageWithListSection = () => {
  const listItems = [
    "Improved network performance and capacity planning.",
    "Enhanced customer experience and retention strategies.",
    "Increased revenue through targeted marketing.",
    "Optimized resource allocation and utilization for greater cost savings.",
    "Reduced churn and improved customer retention.",
    "Streamlined inventory management and supply chain processes.",
    "Improved regulatory compliance and reporting capabilities.",
    "Proactive identification of network issues.",
  ];

  return (
    <section className="px-4 py-8 space-y-6 bg-blue-shade-5/70 md:py-12 lg:pt-10 my-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src={BenefitImage}
          alt="Business Benefits"
          className="w-full h-auto md:max-w-full md:h-auto rounded-3xl"
        />
      </div>
      <div className="md:w-1/2 ml-4 md:ml-12 flex flex-col justify-start h-full">
        <div className="flex flex-col justify-start h-full ml-8">
          <p className="text-3xl font-bold tracking-tight text-blue-shade-2 lg:text-[40px] mb-4">
            Business Benefits
          </p>
          <div className="w-full mt-4">
            <ul className="space-y-3">
              {listItems.map((item, index) => (
                <ListItem key={index} text={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ListItem = ({ text }) => {
  return (
    <li className="flex text-base text-body-color dark:text-dark-6">
      <span className="mr-2.5 mt-1.5 text-primary text-blue-shade-1">
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
              fill="currentColor"
            />
            <path
              d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width={20} height={20} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <p className="text-md md:text-xl text-gray-700">{text}</p>
    </li>
  );
};

export default ImageWithListSection;
