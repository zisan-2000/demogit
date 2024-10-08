// src/Components/TabComponent.jsx

import React, { useState } from "react";
import tabData from "../Data/tabData"; // Import the tab data

const TabComponent = ({ setActiveTab }) => {
  const [activeTab, setActiveTabState] = useState(tabData[0].id); // Set initial active tab

  const handleTabClick = (id) => {
    setActiveTabState(id); // Update local active tab state
    setActiveTab(id); // Notify the parent component about the change
  };

  return (
    <div className="flex border-b-2">
      {tabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`px-4 py-2 font-medium ${
            activeTab === tab.id
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          } rounded-t-md transition-all duration-300`}
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabComponent;
