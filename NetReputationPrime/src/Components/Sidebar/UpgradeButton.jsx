import React from "react";
import { FaRocket } from "react-icons/fa"; // Importing the rocket icon

const UpgradeButton = ({ isOpen, buttonLabel }) => (
  <button
    className={`upgrade-button mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-white transition-all ease-in-out ${
      !isOpen && "hidden"
    }`}
  >
    {/* Icon and Label */}
    <FaRocket /> {/* Rocket icon */}
    {buttonLabel}
  </button>
);

export default UpgradeButton;
