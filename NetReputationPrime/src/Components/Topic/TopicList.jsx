import React from "react";
import TopicCard from "./TopicCard";

const TopicList = ({ topics, onItemSelect, selectedItems }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {" "}
      {/* Grid layout applied */}
      {topics.map((topic, index) => (
        <TopicCard
          key={index}
          topic={topic}
          onItemSelect={onItemSelect}
          selectedItems={selectedItems}
        />
      ))}
    </div>
  );
};

export default TopicList;
