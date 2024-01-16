import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <header className="relative w-full border-b bg-white py-1">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
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
            <svg
              width="30"
              height="30"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                fill="black"
              />
            </svg>
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
                    AI
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
                    BLOCKCHAIN
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
                    CLOUD
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
                    GEN AI
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
                    RPA
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
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-base font-medium text-gray-900"
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
                {/* Dropdown for Expertise in Mobile */}
                <div>
                  <button
                    onClick={toggleExpertiseDropdown}
                    className="flex justify-between items-center w-full text-base font-medium text-gray-900"
                  >
                    Expertise
                    {isExpertiseOpen ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {isExpertiseOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link
                        to="/"
                        className="block text-md text-gray-700"
                        onClick={() => {
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        Item 1
                      </Link>
                      <Link
                        to="/"
                        className="block text-md text-gray-700"
                        onClick={() => {
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        Item 2
                      </Link>
                      {/* Add more dropdown items as needed */}
                    </div>
                  )}
                </div>
                {/* Dropdown for Industries in Mobile */}
                <div>
                  <button
                    onClick={toggleIndustriesDropdown}
                    className="flex justify-between items-center w-full text-base font-medium text-gray-900"
                  >
                    Industries
                    {isIndustriesOpen ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {isIndustriesOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link
                        to="/"
                        className="block text-md text-gray-700"
                        onClick={() => {
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        Item 1
                      </Link>
                      <Link
                        to="/"
                        className="block text-md text-gray-700"
                        onClick={() => {
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        Item 2
                      </Link>
                      {/* Add more dropdown items as needed */}
                    </div>
                  )}
                </div>
                <Link
                  to="/contact"
                  className="text-base font-medium text-gray-900"
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
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
