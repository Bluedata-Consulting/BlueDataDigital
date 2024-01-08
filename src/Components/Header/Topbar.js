import React, { useState, useEffect, useRef } from "react";

import {
  ChevronDownIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid"; // Make sure you have the correct import

const Topbar = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedLocation, setSelectedLocation] = useState("New York");
  const [selectedAddress, setSelectedAddress] = useState(
    "1010 New York, NY 10018 US."
  );
  const [selectedNumber, setSelectedNumber] = useState("212 386 5575");

  const languages = ["English", "French", "German"];
  const locations = ["New York", "London"];

  const languageContainerRef = useRef();
  const locationContainerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event, ref, setOpen) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", (event) => {
      handleClickOutside(event, languageContainerRef, setLanguageOpen);
      handleClickOutside(event, locationContainerRef, setLocationOpen);
    });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setLanguageOpen(false);
    updateDetails(lang, selectedLocation);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setLocationOpen(false);
    updateDetails(selectedLanguage, location);
  };

  const updateDetails = (language, location) => {
    // Example: Use a switch statement to determine details based on language and location
    let locationDetails = "";
    let phoneNumber = "";

    switch (location) {
      case "New York":
        locationDetails = "1010 New York, NY 10018 US.";
        phoneNumber = "212 386 5575";
        break;
      case "London":
        locationDetails = "123 London, UK";
        phoneNumber = "44 20 1234 5678";
        break;
      // Add more cases as needed
      default:
        locationDetails = "1010 New York, NY 10018 US.";
        phoneNumber = "212 386 5575";
    }
    setSelectedAddress(locationDetails);
    setSelectedNumber(phoneNumber);
  };

  return (
    <div>
      <nav className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Left side - Language selector */}
            <div className="relative" ref={languageContainerRef}>
              <button
                className="flex items-center space-x-2"
                onClick={() => setLanguageOpen(!languageOpen)}
              >
                <span>{selectedLanguage}</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              {languageOpen && (
                <ul className="absolute z-10 mt-1 w-32 bg-white text-black rounded shadow-lg">
                  {languages.map((lang, index) => (
                    <li
                      key={index}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => handleLanguageSelect(lang)}
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Center - Info */}
            <div className="hidden md:flex items-center space-x-6">
              <span className="flex items-center space-x-1">
                <LocationMarkerIcon className="h-4 w-4" />
                <span>{selectedAddress}</span>
              </span>
              <span className="flex items-center space-x-1">
                <PhoneIcon className="h-4 w-4" />
                <span>{selectedNumber}</span>
              </span>
            </div>

            {/* Right side - Contact/Location */}
            <div className="relative" ref={locationContainerRef}>
              <button
                className="flex items-center space-x-2"
                onClick={() => setLocationOpen(!locationOpen)}
              >
                <span>{selectedLocation}</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              {locationOpen && (
                <ul className="absolute z-10 mt-1 w-32 bg-white text-black rounded shadow-lg">
                  {locations.map((location, index) => (
                    <li
                      key={index}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => handleLocationSelect(location)}
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
