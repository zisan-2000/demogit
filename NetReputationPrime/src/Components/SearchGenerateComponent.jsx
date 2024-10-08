// src/Components/SearchGenerateComponent.jsx

import React from "react";
import searchGenerateData from "../Data/SearchGenerateData"; // Import the data

const SearchGenerateComponent = () => {
  return (
    <div className="flex items-center justify-center space-x-4 rounded bg-white p-4 shadow-md">
      <div className="flex items-center overflow-hidden rounded-md border border-gray-300">
        <input
          type="text"
          placeholder={searchGenerateData.placeholder}
          className="w-full border-none p-4 outline-none"
        />
        <span className="px-2 text-gray-600">
          {searchGenerateData.globeIcon}
        </span>
        <span className="px-2 text-gray-600">
          {searchGenerateData.countryCode}
        </span>
      </div>
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-md hover:bg-black">
        {searchGenerateData.buttonText}
      </button>
    </div>
  );
};

export default SearchGenerateComponent;
