import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-blue-shade-5/50 relative overflow-hidden border-t border-blue-shade-1/40 py-10">
      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <img src="logo35.png" alt="" />
                <span className="ml-4 text-lg font-bold text-blue-shade-2 hover:text-blue-shade-4">
                  BDD
                </span>
              </div>
              <div>
                <p className="mb-2  text-lg font-medium text-blue-shade-2">
                  BLUE DATA DIGITAL
                </p>
                <p className="text-md text-blue-shade-1/80">
                  &copy; Copyright 2024. All Rights Reserved by BDD.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-5  text-sm font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-shade-2 hover:text-blue-shade-4"
                    to="/"
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
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-shade-2 hover:text-blue-shade-4"
                    to="/about"
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
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-shade-2 hover:text-blue-shade-4"
                    to="/team"
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
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-shade-2 hover:text-blue-shade-4"
                    to="/contact"
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
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-4/12">
            <div className="h-full">
              <h3 className="tracking-px mb-5  text-sm font-semibold uppercase text-gray-500">
                Expertise
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-shade-2 hover:text-blue-shade-4"
                    to="/ai"
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Artificial Intelligence
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-shade-2 hover:text-blue-shade-4"
                    to="/blockchain"
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
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-shade-2 hover:text-blue-shade-4"
                    to="/cloud"
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
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-shade-2 hover:text-blue-shade-4"
                    to="/genai"
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
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-blue-shade-2 hover:text-blue-shade-4"
                    to="/rpa"
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
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-1/12">
            <div className="h-full">
              <h3 className="tracking-px mb-5 text-sm font-semibold uppercase text-gray-500">
                Industries
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-shade-2 hover:text-blue-shade-4"
                    to="/telecom"
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
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-shade-2 hover:text-blue-shade-4"
                    to="/manufacturing "
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
