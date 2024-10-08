// CategoryContent.js
import OtherSources from "../OtherSources/OtherSources";
import Topic from "../Topic/Topics";
import Website from "../Website/Website";

const CategoryContent = ({
  categoryActiveTab,
  handleAddItem,
  selectedItems,
}) => {
  switch (categoryActiveTab) {
    case 1:
      return (
        <Website onItemSelect={handleAddItem} selectedItems={selectedItems} />
      );
    case 2:
      return (
        <Topic onItemSelect={handleAddItem} selectedItems={selectedItems} />
      );
    case 3:
      return <OtherSources />;
    default:
      return null;
  }
};

export default CategoryContent;
