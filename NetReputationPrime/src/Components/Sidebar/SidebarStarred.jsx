import SettingsIcon from "@mui/icons-material/Settings"; // Importing Settings Icon
import { Switch } from "@mui/material"; // Importing the Switch component from Material UI
import React from "react";

const SidebarStarred = ({ isOpen }) => {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        {/* Starred Text */}
        <span className={`text-white ${!isOpen && "hidden"}`}>Starred</span>

        {/* Switch and Settings Icon */}
        <div className={`flex items-center ${!isOpen ? "flex-col" : "gap-2"}`}>
          <Switch size="small" defaultChecked /> {/* The toggle switch */}
          <SettingsIcon className="ml-2 mt-2 text-white" />{" "}
          {/* The settings icon */}
        </div>
      </div>
    </div>
  );
};

export default SidebarStarred;
