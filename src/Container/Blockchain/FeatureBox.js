// FeatureBox.js
import React from "react";

const FeatureBox = ({ gradient, icon, title, description }) => {
  return (
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor border border-blue-shade-2/15">
      <div
        className={`relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:rotate-12 bg-gradient-to-r ${gradient} p-8`}
      >
        <div
          className="absolute inset-0 transform -rotate-12 opacity-30 rounded-lg"
          style={{ zIndex: "-10", background: "rgba(115, 115, 115, 0.6)" }}
        ></div>
        <span>{icon}</span>
      </div>
      <div className="text-black text-box">
        <h1 className="mt-1 text-2xl font-bold text-blue-shade-2">{title}</h1>
        <p className="w-full mx-auto mt-2 text-gray-800 text-md md:w-3/4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureBox;
