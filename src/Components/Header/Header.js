import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <Topbar />
      <Navbar />
    </div>
  );
};

export default Header;
