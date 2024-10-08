// src/Components/SelectRSSComponent.jsx

import selectRSSData from "../../Data/SelectRSSData"; // Import the data

const SelectRSSComponent = () => {
  return (
    <div className="flex items-center justify-between rounded bg-white px-4 py-2 shadow-md">
      <h2 className="text-lg font-medium text-gray-600">
        {selectRSSData.title}
      </h2>

      <button className="flex items-center space-x-2 rounded-md border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100">
        <span>{selectRSSData.searchIcon}</span>
        <span>{selectRSSData.searchButtonText}</span>
      </button>
    </div>
  );
};

export default SelectRSSComponent;
