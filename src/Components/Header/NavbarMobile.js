// Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarLarge from "./NavbarLarge";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const toggleMenu = () => {
    closeDropdowns(); // Close other dropdowns when opening the menu
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleExpertiseDropdown = () => {
    closeDropdowns("expertise");
    setIsExpertiseOpen((prevState) => !prevState);
  };

  const toggleIndustriesDropdown = () => {
    closeDropdowns("industries");
    setIsIndustriesOpen((prevState) => !prevState);
  };

  const closeDropdowns = (except = "") => {
    setIsMenuOpen(false);
    if (except !== "expertise") setIsExpertiseOpen(false);
    if (except !== "industries") setIsIndustriesOpen(false);
  };

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
            <img src="logo35.png" alt="" className="" />
          </span>
          <span className="font-bold">BLUE DATA DIGITAL</span>
        </Link>

        {/* Include NavbarLarge for large screens */}
        <NavbarLarge />

        {/* Include NavbarMobile for mobile screens */}
        <NavbarMobile
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isExpertiseOpen={isExpertiseOpen}
          toggleExpertiseDropdown={toggleExpertiseDropdown}
          isIndustriesOpen={isIndustriesOpen}
          toggleIndustriesDropdown={toggleIndustriesDropdown}
        />
      </div>
    </header>
  );
};

export default Navbar;
