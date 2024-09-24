import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header themeChange sticky top-0 z-50 flex items-center justify-between p-4 shadow-md">
      {/* Toggle Button for Small and Medium Screens */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex space-x-3 md:hidden">
          <button onClick={toggleSidebar} className="textColor">
            <FaBars size={24} />
          </button>
        </div>

        <div className="logo textColor text-2xl font-bold md:flex">Amenul</div>
      </div>

      {/* Navigation Menu for Large Screens */}
      <nav className="hidden space-x-6 md:flex">
        <a href="#home" className="textColor">
          Home
        </a>
        <a href="#services" className="textColor">
          Services
        </a>
        <a href="#resume" className="textColor">
          Resume
        </a>
        <a href="#work" className="textColor">
          Work
        </a>
        <a href="#contact" className="textColor">
          Contact
        </a>
      </nav>

      {/* Theme Toggle and Hire Me Button */}
      <div className=" items-center md:flex">
        <ThemeToggle />
        <button className="ml-4 rounded-md bg-green-500 px-4 py-2 text-white">
          Hire me
        </button>
      </div>

      {/* Sidebar for Small and Medium Screens */}
      <div
        className={`fixed inset-y-0 left-0 w-64 transform bg-gray-800 text-white ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40 transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="mb-4 text-right text-white"
          >
            <FaTimes size={24} />
          </button>
          <nav className="space-y-4">
            <a href="#home" className="block">
              Home
            </a>
            <a href="#services" className="block">
              Services
            </a>
            <a href="#resume" className="block">
              Resume
            </a>
            <a href="#work" className="block">
              Work
            </a>
            <a href="#contact" className="block">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
