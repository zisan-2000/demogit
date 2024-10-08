import TableSection from "../Table/TableSection";
import CategoryContent from "./CategoryContent";
import CategoryTabComponent from "./CategoryTabComponent";
import SelectedItems from "./SelectedItems";

const MainContent = ({
  categoryActiveTab,
  setCategoryActiveTab,
  selectedItems,
  activeItemTab,
  handleItemSelect,
  handleAddItem,
  handleItemDelete,
  onItemView,
}) => {
  return (
    <section className="m-3 flex-grow text-xl font-semibold text-gray-900">
      <SelectedItems
        selectedItems={selectedItems}
        activeItemTab={activeItemTab}
        onItemSelect={handleItemSelect}
        onItemDelete={handleItemDelete}
      />

      <TableSection activeItemTab={activeItemTab} onItemView={onItemView} />

      <div className="m-6 flex-grow text-xl font-semibold text-gray-900">
        <CategoryTabComponent setCategoryActiveTab={setCategoryActiveTab} />
      </div>

      <CategoryContent
        categoryActiveTab={categoryActiveTab}
        handleAddItem={handleAddItem}
        selectedItems={selectedItems}
      />
    </section>
  );
};

export default MainContent;
