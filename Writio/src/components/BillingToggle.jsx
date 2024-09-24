import React from "react";
import { billingOptions } from "../Data/Data";
import ToggleSwitch from "./ToggleSwitch"; // Import the ToggleSwitch component

const BillingToggle = ({ isYearly, setIsYearly }) => {
  const toggleBilling = () => {
    setIsYearly(!isYearly); // Toggle between yearly and monthly billing
  };

  return (
    <div className="mb-8 flex justify-center space-x-4">
      <span className={`text-sm ${!isYearly ? "font-bold" : ""}`}>Monthly</span>

      {/* Use the ToggleSwitch component */}
      <ToggleSwitch isYearly={isYearly} toggleBilling={toggleBilling} />

      <span className={`text-sm ${isYearly ? "font-bold" : ""}`}>Yearly</span>
      <span className="ml-2 text-sm text-orange-500">
        Save up to {billingOptions.Discount}%
      </span>
    </div>
  );
};

export default BillingToggle;
