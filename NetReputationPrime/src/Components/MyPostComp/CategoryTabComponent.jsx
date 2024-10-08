// src/Components/CategoryTabComponent.jsx

import { useState } from "react";
import categoryTabData from "../../Data/CategoryTabData"; // Import the category tab data

const CategoryTabComponent = ({ setCategoryActiveTab }) => {
  const [activeTab, setActiveTab] = useState(categoryTabData[0].id); // Default to the first tab being active

  const handleTabClick = (id) => {
    setActiveTab(id); // Update the active tab on click
    setCategoryActiveTab(id); // Notify the parent about the active tab
  };

  return (
    <div className="flex space-x-4">
      {categoryTabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`flex items-center space-x-2 rounded-md border px-4 py-2 ${
            activeTab === tab.id
              ? "border-blue-500 text-blue-600"
              : "border-gray-300 text-gray-500"
          }`}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryTabComponent;
