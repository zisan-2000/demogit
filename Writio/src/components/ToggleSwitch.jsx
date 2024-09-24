import React from "react";
import Switch from "react-switch";

const ToggleSwitch = ({ isYearly, toggleBilling }) => {
  return (
    <div className="flex items-center">
      {/* react-switch component */}
      <Switch
        onChange={toggleBilling} // Toggle the billing cycle
        checked={isYearly} // Checked state based on isYearly
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={48}
      />
    </div>
  );
};

export default ToggleSwitch;
