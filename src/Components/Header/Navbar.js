import React, { useState, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isInsightOpen, setIsInsightOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggle menu clicked");
    closeDropdowns(); // Close other dropdowns when opening the menu
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleExpertiseDropdown = () => {
    setIsExpertiseOpen(!isExpertiseOpen);
    closeOtherDropdowns("expertise");
  };

  const toggleIndustriesDropdown = () => {
    setIsIndustriesOpen(!isIndustriesOpen);
    closeOtherDropdowns("industries");
  };

  const toggleInsightDropdown = () => {
    setIsInsightOpen(!isInsightOpen);
    closeOtherDropdowns("insight");
  };

  const closeDropdowns = () => {
    setIsMenuOpen(false);
    setIsExpertiseOpen(false);
    setIsIndustriesOpen(false);
    setIsInsightOpen(false);
  };

  const closeOtherDropdowns = (currentDropdown) => {
    if (currentDropdown !== "expertise") setIsExpertiseOpen(false);
    if (currentDropdown !== "industries") setIsIndustriesOpen(false);
    if (currentDropdown !== "insight") setIsInsightOpen(false);
  };

  // UseRef for the dropdown containers
  const expertiseDropdownContainerRef = useRef();
  const industriesDropdownContainerRef = useRef();
  const insightDropdownContainerRef = useRef();

  return (
    <header className="relative w-full border-b bg-white px-4 py-1">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-1">
        {/* Logo and brand name */}
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
            <li ref={insightDropdownContainerRef} className="relative">
              <div
                onClick={toggleInsightDropdown}
                className="text-md cursor-pointer font-semibold text-gray-800 hover:text-gray-900 flex items-center"
              >
                Insight
                {isInsightOpen ? (
                  <ChevronUp className="ml-2" />
                ) : (
                  <ChevronDown className="ml-2" />
                )}
              </div>
              {isInsightOpen && (
                <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white">
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
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
                  <Link
                    to="/contact"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
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
                  <Link
                    to="/team"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
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
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <span className="font-bold">BDD</span>
                <div className="-mr-2">
                  <button
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <nav className="grid gap-y-4">
                <Link
                  to="/"
                  className="text-base font-medium text-gray-900"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                    closeDropdowns();
                  }}
                >
                  Home
                </Link>
                {/* Expertise Dropdown in Mobile */}
                <div>
                  <button
                    onClick={() => {
                      toggleExpertiseDropdown();
                    }}
                    className="flex justify-between items-center w-full text-base font-medium text-gray-900"
                  >
                    Expertise
                    {isExpertiseOpen ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {isExpertiseOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link
                        to="/ai"
                        className="block text-md text-gray-700"
                        onClick={() => {
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                          closeDropdowns();
                        }}
                      >
                        Artificial Intelligence
                      </Link>
                      <Link
                        to="/blockchain"
                        className="block text-md text-gray-700"
                        onClick={() => {
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                          closeDropdowns();
                        }}
                      >
                        Blockchain
                      </Link>
                      {/* Add more dropdown items as needed */}
                    </div>
                  )}
                </div>
                {/* Industries Dropdown in Mobile */}
                <div>
                  <button
                    onClick={() => {
                      toggleIndustriesDropdown();
                    }}
                    className="flex justify-between items-center w-full text-base font-medium text-gray-900"
                  >
                    Industries
                    {isIndustriesOpen ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {isIndustriesOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link
                        to="/telecom"
                        className="block text-md text-gray-700"
                        onClick={() => {
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                          closeDropdowns();
                        }}
                      >
                        Telecom
                      </Link>
                      <Link
                        to="/manufacturing"
                        className="block text-md text-gray-700"
                        onClick={() => {
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                          closeDropdowns();
                        }}
                      >
                        Manufacturing
                      </Link>
                      {/* Add more dropdown items as needed */}
                    </div>
                  )}
                </div>
                {/* Insight Dropdown in Mobile */}
                <div>
                  <button
                    onClick={() => {
                      toggleInsightDropdown();
                    }}
                    className="flex justify-between items-center w-full text-base font-medium text-gray-900"
                  >
                    Insight
                    {isInsightOpen ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {isInsightOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link
                        to="/about"
                        className="block text-md text-gray-700"
                        onClick={() => {
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                          closeDropdowns();
                        }}
                      >
                        About
                      </Link>
                      <Link
                        to="/contact"
                        className="block text-md text-gray-700"
                        onClick={() => {
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                          closeDropdowns();
                        }}
                      >
                        Contact
                      </Link>
                      <Link
                        to="/team"
                        className="block text-md text-gray-700"
                        onClick={() => {
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                          closeDropdowns();
                        }}
                      >
                        Team
                      </Link>
                      {/* Add more dropdown items as needed */}
                    </div>
                  )}
                </div>
                {/* ... (existing code) */}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
