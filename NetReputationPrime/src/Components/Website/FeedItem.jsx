import { Button } from "../ui/button";

const FeedItem = ({ item, isSelected, onItemSelect }) => {
  return (
    <div
      className={`transform cursor-pointer rounded-lg border border-gray-300 p-4 shadow-md transition-transform hover:scale-105 ${
        isSelected ? "bg-sky-400 text-white" : "bg-white"
      }`} // Conditional class for selected item background and hover effect
      onClick={() => onItemSelect(item.name)}
    >
      <h3 className="text-md mb-3 text-center font-semibold">{item.name}</h3>
      <div className="flex justify-center">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onItemSelect(item.name)}
        >
          {item.feedCount} feeds
        </Button>
      </div>
    </div>
  );
};

export default FeedItem;
