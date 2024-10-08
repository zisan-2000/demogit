import React from "react";
import topics from "../../Data/TopicData"; // Assuming topics data is imported
import TopicList from "./TopicList"; // Importing the TopicList component

const Topic = ({ onItemSelect, selectedItems }) => {
  return (
    <div className="container mx-auto p-4">
      <TopicList
        topics={topics}
        onItemSelect={onItemSelect}
        selectedItems={selectedItems}
      />
    </div>
  );
};

export default Topic;
