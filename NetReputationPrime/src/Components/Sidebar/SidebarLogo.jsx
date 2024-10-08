import React from "react";
import Logo from "../../assets/Reputation_Prime_Logo.png"; // Full Logo
import LogoIcon from "../../assets/logo.jpeg"; // Small Icon

const SidebarLogo = ({ isOpen }) => {
  return (
    <div className="mb-6 flex items-center text-2xl font-bold text-white">
      {/* Conditionally show either the full logo or the icon based on isOpen */}
      {isOpen ? (
        <img
          src={Logo}
          alt="ReputationPrime.AI"
          className="h-12 rounded-md bg-white"
        />
      ) : (
        <img
          src={LogoIcon}
          alt="ReputationPrime Icon"
          className="h-8 rounded-md bg-white"
        />
      )}
    </div>
  );
};

export default SidebarLogo;
