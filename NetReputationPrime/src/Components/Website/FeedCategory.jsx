// src/components/FeedCategory.jsx
import React from "react";
import FeedItem from "./FeedItem";

const FeedCategory = ({ category, items, onItemSelect, selectedItems }) => {
  return (
    <div className="relative w-full rounded-lg border border-gray-300 p-6 shadow-lg">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-sky-600">
        {category}
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item, idx) => (
          <FeedItem
            key={idx}
            item={item}
            isSelected={selectedItems.includes(item.name)}
            onItemSelect={onItemSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedCategory;
