import React from "react";

const TopicItem = ({ item, onItemSelect, selectedItems }) => {
  const isSelected = selectedItems.includes(item);

  return (
    <li
      className={`cursor-pointer p-2 ${
        isSelected ? "bg-green-200" : "bg-white"
      }`}
      onClick={() => onItemSelect(item)}
    >
      {item}
    </li>
  );
};

export default TopicItem;
