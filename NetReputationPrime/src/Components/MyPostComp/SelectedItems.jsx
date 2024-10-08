import React from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai"; // Importing delete and eye icons

const SelectedItems = ({
  selectedItems,
  activeItemTab,
  onItemSelect,
  onItemDelete,
  onItemView, // Assuming this is a new function to handle view action
}) => {
  return (
    <div className="selected-items sticky top-16 z-30 rounded-md bg-gray-200 p-4">
      <h3 className="text-lg font-bold">Selected Items:</h3>
      <div className="flex gap-2">
        {selectedItems.length === 0 ? (
          <p>No items selected</p>
        ) : (
          <div className="flex space-x-2">
            {selectedItems.map((item, index) => (
              <div
                key={index}
                className={`flex cursor-pointer items-center rounded-t-md px-4 py-2 ${
                  activeItemTab === item
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-blue-900"
                }`}
                onClick={() => onItemSelect(item)} // Set this item as active tab on click
              >
                {item}
                <AiOutlineEye
                  className="ml-2 cursor-pointer text-blue-600"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent tab click when viewing
                    onItemView(item); // Assuming you have an onItemView function to handle the view action
                  }} // View item on click
                />
                <AiOutlineDelete
                  className="ml-2 cursor-pointer text-red-600"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent tab click when deleting
                    onItemDelete(item); // Delete item on click
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedItems;
