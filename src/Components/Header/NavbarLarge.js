import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarLarge = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const toggleMenu = () => {
    closeDropdowns(); // Close other dropdowns when opening the menu
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleExpertiseDropdown = () => {
    closeDropdowns("expertise");
    setIsExpertiseOpen(!isExpertiseOpen);
  };

  const toggleIndustriesDropdown = () => {
    closeDropdowns("industries");
    setIsIndustriesOpen(!isIndustriesOpen);
  };

  const closeDropdowns = (except = "") => {
    setIsMenuOpen(false);
    if (except !== "expertise") setIsExpertiseOpen(false);
    if (except !== "industries") setIsIndustriesOpen(false);
  };

  // UseRef for the dropdown containers
  const expertiseDropdownContainerRef = useRef();
  const industriesDropdownContainerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        expertiseDropdownContainerRef.current &&
        !expertiseDropdownContainerRef.current.contains(event.target) &&
        !event.target.closest(".dropdown-item-expertise") &&
        industriesDropdownContainerRef.current &&
        !industriesDropdownContainerRef.current.contains(event.target) &&
        !event.target.closest(".dropdown-item-industries")
      ) {
        closeDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <Link
        to="/"
        className="inline-flex items-center space-x-2"
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <span>
          <img src="logo35.png" alt="" className="" />
        </span>
        <span className="font-bold">BLUE DATA DIGITAL</span>
      </Link>

      {/* Navigation Menu for large screens */}
      <div className="hidden lg:block">
        <ul className="inline-flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-md font-semibold text-gray-800 hover:text-gray-900"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-md font-semibold text-gray-800 hover:text-gray-900"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              About
            </Link>
          </li>

          {/* Expertise Dropdown */}
          <li ref={expertiseDropdownContainerRef} className="relative">
            <div
              onClick={toggleExpertiseDropdown}
              className="text-md cursor-pointer font-semibold text-gray-800 hover:text-gray-900 flex items-center"
            >
              Expertise
              {isExpertiseOpen ? (
                <ChevronUp className="ml-2" />
              ) : (
                <ChevronDown className="ml-2" />
              )}
            </div>
            {isExpertiseOpen && (
              <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white">
                {/* Dropdown items */}
                <Link
                  to="/ai"
                  className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                  onClick={(event) => {
                    toggleExpertiseDropdown(event);
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Artificial Intelligence
                </Link>
                <Link
                  to="/blockchain"
                  className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Blockchain
                </Link>
                <Link
                  to="/cloud"
                  className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Cloud Computing
                </Link>
                <Link
                  to="/genai"
                  className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Generative AI
                </Link>
                <Link
                  to="/rpa"
                  className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Robotics Process Automation
                </Link>
                {/* Add more items as needed */}
              </div>
            )}
          </li>
          {/* Industries Dropdown */}

          <li ref={industriesDropdownContainerRef} className="relative">
            <div
              onClick={toggleIndustriesDropdown}
              className="text-md cursor-pointer font-semibold text-gray-800 hover:text-gray-900 flex items-center"
            >
              Industries
              {isIndustriesOpen ? (
                <ChevronUp className="ml-2" />
              ) : (
                <ChevronDown className="ml-2" />
              )}
            </div>
            {isIndustriesOpen && (
              <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white">
                <Link
                  to="/telecom"
                  className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Telecom
                </Link>
                <Link
                  to="/manufacturing"
                  className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Manufacturing
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/contact"
              className="text-md font-semibold text-gray-800 hover:text-gray-900"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className="text-md font-semibold text-gray-800 hover:text-gray-900"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              Team
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarLarge;
