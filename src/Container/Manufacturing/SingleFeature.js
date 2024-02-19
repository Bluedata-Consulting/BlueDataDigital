import React from "react";

const SingleFeature = ({ featureList }) => {
  return (
    <div className="lg:ml-6 lg:col-start-2 lg:max-w-2xl">
      <ul className="mt-2 space-y-2 font-medium">
        {featureList.map((item, index) => (
          <li key={index} className="flex items-start lg:col-span-2">
            <div className="flex-shrink-0 ">
              <svg
                className="w-5 h-5 text-blue-shade-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <p className="ml-3 leading-5 text-gray-600">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleFeature;
