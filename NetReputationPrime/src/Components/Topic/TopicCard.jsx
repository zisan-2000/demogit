import React from "react";
import TopicItem from "./TopicItem";

const TopicCard = ({ topic, onItemSelect, selectedItems }) => {
  return (
    <div className="rounded-lg border border-gray-300 p-4 shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-blue-600">{topic.category}</h2>
      <ul className="space-y-2">
        {topic.items.map((item, idx) => (
          <TopicItem
            key={idx}
            item={item}
            onItemSelect={onItemSelect}
            selectedItems={selectedItems}
          />
        ))}
      </ul>
      {topic.link && (
        <a
          href={topic.link}
          className="mt-4 block text-blue-600 hover:underline"
        >
          {topic.link}
        </a>
      )}
    </div>
  );
};

export default TopicCard;
