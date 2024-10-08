// src/components/Website.jsx
import React from "react";
import feeds from "../../Data/Website";
import FeedCategory from "./FeedCategory";

const Website = ({ onItemSelect, selectedItems }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {feeds.map((feed, index) => (
          <FeedCategory
            key={index}
            category={feed.category}
            items={feed.items}
            onItemSelect={onItemSelect}
            selectedItems={selectedItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Website;
