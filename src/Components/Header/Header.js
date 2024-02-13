import React, { useState, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isInsightOpen, setIsInsightOpen] = useState(false);

  const toggleMenu = () => {
    closeDropdowns();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownHover = (dropdownType) => {
    closeDropdowns(); // Close other dropdowns
    switch (dropdownType) {
      case "expertise":
        setIsExpertiseOpen(true);
        break;
      case "industries":
        setIsIndustriesOpen(true);
        break;
      case "insight":
        setIsInsightOpen(true);
        break;
      default:
        break;
    }
  };

  const handleDropdownLeave = (dropdownContainerRef, setDropdownOpen) => {
    const dropdownContainer = dropdownContainerRef.current;

    if (dropdownContainer) {
      // Delay closing the dropdown to check if the pointer is still inside
      setTimeout(() => {
        const isPointerInside =
          dropdownContainer.matches(":hover") ||
          Array.from(dropdownContainer.querySelectorAll(":hover")).some(
            (el) => el === dropdownContainer
          );

        if (!isPointerInside) {
          setDropdownOpen(false);
        }
      }, 100); // Adjust the delay as needed
    } else {
      setDropdownOpen(false);
    }
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
    <div className="relative top-0 z-50">
      <header className="absolute w-full bg-blue-shade-5/85 px-4 py-1">
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
            <span className="font-bold text-blue-shade-1">
              BLUE DATA DIGITAL
            </span>
          </Link>

          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-md font-semibold text-md text-blue-shade-1 hover:text-blue-shade-4"
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

              <li
                onMouseEnter={() => handleDropdownHover("expertise")}
                onMouseLeave={() =>
                  handleDropdownLeave(
                    expertiseDropdownContainerRef,
                    setIsExpertiseOpen
                  )
                }
                ref={expertiseDropdownContainerRef}
                className="relative"
              >
                <div className="text-md cursor-pointer font-semibold text-md text-blue-shade-1 hover:text-blue-shade-4 flex items-center">
                  Expertise
                  {isExpertiseOpen ? (
                    <ChevronUp className="ml-2" />
                  ) : (
                    <ChevronDown className="ml-2" />
                  )}
                </div>
                {isExpertiseOpen && (
                  <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-blue-shade-5">
                    <Link
                      to="/ai"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-1 hover:text-blue-shade-4 hover:text-lg hover:rounded-md"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          expertiseDropdownContainerRef,
                          setIsExpertiseOpen
                        );
                      }}
                    >
                      Artificial Intelligence
                    </Link>
                    <Link
                      to="/blockchain"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-1 hover:text-blue-shade-4 hover:text-lg hover:rounded-md"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          expertiseDropdownContainerRef,
                          setIsExpertiseOpen
                        );
                      }}
                    >
                      Blockchain
                    </Link>
                    <Link
                      to="/cloud"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-1 hover:text-blue-shade-4 hover:text-lg hover:rounded-md"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          expertiseDropdownContainerRef,
                          setIsExpertiseOpen
                        );
                      }}
                    >
                      Cloud Computing
                    </Link>
                    <Link
                      to="/genai"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-1 hover:text-blue-shade-4 hover:text-lg hover:rounded-md"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          expertiseDropdownContainerRef,
                          setIsExpertiseOpen
                        );
                      }}
                    >
                      Generative AI
                    </Link>
                    <Link
                      to="/rpa"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-1 hover:text-blue-shade-4 hover:text-lg hover:rounded-md"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          expertiseDropdownContainerRef,
                          setIsExpertiseOpen
                        );
                      }}
                    >
                      Robotics Process Automation
                    </Link>
                  </div>
                )}
              </li>

              <li
                onMouseEnter={() => handleDropdownHover("industries")}
                onMouseLeave={() =>
                  handleDropdownLeave(
                    industriesDropdownContainerRef,
                    setIsIndustriesOpen
                  )
                }
                ref={industriesDropdownContainerRef}
                className="relative"
              >
                <div className="text-md cursor-pointer font-semibold text-md text-blue-shade-1 hover:text-blue-shade-4 flex items-center">
                  Industries
                  {isIndustriesOpen ? (
                    <ChevronUp className="ml-2" />
                  ) : (
                    <ChevronDown className="ml-2" />
                  )}
                </div>
                {isIndustriesOpen && (
                  <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-blue-shade-5">
                    <Link
                      to="/telecom"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-1 hover:text-blue-shade-4 hover:text-lg hover:rounded-md"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          industriesDropdownContainerRef,
                          setIsIndustriesOpen
                        );
                      }}
                    >
                      Telecom
                    </Link>
                    <Link
                      to="/manufacturing"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-1 hover:text-blue-shade-4 hover:text-lg hover:rounded-md"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          industriesDropdownContainerRef,
                          setIsIndustriesOpen
                        );
                      }}
                    >
                      Manufacturing
                    </Link>
                  </div>
                )}
              </li>

              <li
                onMouseEnter={() => handleDropdownHover("insight")}
                onMouseLeave={() =>
                  handleDropdownLeave(
                    insightDropdownContainerRef,
                    setIsInsightOpen
                  )
                }
                ref={insightDropdownContainerRef}
                className="relative"
              >
                <div className="text-md cursor-pointer font-semibold text-md text-blue-shade-1 hover:text-blue-shade-4 flex items-center">
                  Insight
                  {isInsightOpen ? (
                    <ChevronUp className="ml-2" />
                  ) : (
                    <ChevronDown className="ml-2" />
                  )}
                </div>
                {isInsightOpen && (
                  <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-blue-shade-5">
                    <Link
                      to="/about"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-1 hover:text-blue-shade-4 hover:text-lg hover:rounded-md"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          insightDropdownContainerRef,
                          setIsInsightOpen
                        );
                      }}
                    >
                      About
                    </Link>

                    <Link
                      to="/team"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-1 hover:text-blue-shade-4 hover:text-lg hover:rounded-md"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          insightDropdownContainerRef,
                          setIsInsightOpen
                        );
                      }}
                    >
                      Team
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-1 hover:text-blue-shade-4 hover:text-lg hover:rounded-md"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          insightDropdownContainerRef,
                          setIsInsightOpen
                        );
                      }}
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <Menu
              onClick={toggleMenu}
              className="h-6 w-6 cursor-pointer text-blue-shade-1"
            />
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden bg-blue-shade-5 shadow-lg ring-1 ring-blue-shade-3 ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between pb-2">
                  <span className="font-bold text-xl text-blue-shade-1 ">
                    Blue Data Digital
                  </span>
                  <div className="-mr-2">
                    <button
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-blue-shade-1 hover:text-gray-500"
                    >
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <nav className="grid gap-y-4">
                  <Link
                    to="/"
                    className="text-lg font-medium text-blue-shade-1"
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
                    <div
                      onClick={() => {
                        toggleExpertiseDropdown();
                      }}
                      className="flex justify-between items-center w-full text-lg font-medium text-blue-shade-1"
                    >
                      Expertise
                      {isExpertiseOpen ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {isExpertiseOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        <Link
                          to="/ai"
                          className="block text-lg text-blue-shade-1"
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
                          className="block text-lg text-blue-shade-1"
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
                        <Link
                          to="/cloud"
                          className="block text-lg text-blue-shade-1"
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                            closeDropdowns();
                          }}
                        >
                          Cloud Computing
                        </Link>
                        <Link
                          to="/genai"
                          className="block text-lg text-blue-shade-1"
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                            closeDropdowns();
                          }}
                        >
                          Generative AI
                        </Link>
                        <Link
                          to="/rpa"
                          className="block text-lg text-blue-shade-1"
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                            closeDropdowns();
                          }}
                        >
                          Robotic Process Automation  
                        </Link>
                        {/* Add more dropdown items as needed */}
                      </div>
                    )}
                  </div>
                  {/* Industries Dropdown in Mobile */}
                  <div>
                    <div
                      onClick={() => {
                        toggleIndustriesDropdown();
                      }}
                      className="flex justify-between items-center w-full text-lg font-medium text-blue-shade-1"
                    >
                      Industries
                      {isIndustriesOpen ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {isIndustriesOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        <Link
                          to="/telecom"
                          className="block text-lg text-blue-shade-1"
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
                          className="block text-lg text-blue-shade-1"
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
                    <div
                      onClick={() => {
                        toggleInsightDropdown();
                      }}
                      className="flex justify-between items-center w-full text-lg font-medium text-blue-shade-1"
                    >
                      Insight
                      {isInsightOpen ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {isInsightOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        <Link
                          to="/about"
                          className="block text-lg text-blue-shade-1"
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
                          className="block text-lg text-blue-shade-1"
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
                          className="block text-lg text-blue-shade-1"
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
    </div>
  );
};

export default Header;
