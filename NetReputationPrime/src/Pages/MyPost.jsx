// src/MyPost.jsx
import MainContent from "@/Components/MyPostComp/MainContent";
import Layout from "@/LayOut/Layout";
import { useState } from "react";

const MyPost = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [categoryActiveTab, setCategoryActiveTab] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeItemTab, setActiveItemTab] = useState(null);

  const handleItemSelect = (item) => {
    setActiveItemTab(item);
  };

  const handleAddItem = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems((prevItems) => [...prevItems, item]);
    }
    setActiveItemTab(null);
  };

  const handleItemDelete = (itemToDelete) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item !== itemToDelete),
    );
    if (activeItemTab === itemToDelete) {
      setActiveItemTab(null);
    }
  };

  return (
    <Layout
      title="Create New Post"
      showButton
      buttonLink="/post"
      buttonText="+ New Post"
    >
      <MainContent
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        categoryActiveTab={categoryActiveTab}
        setCategoryActiveTab={setCategoryActiveTab}
        selectedItems={selectedItems}
        activeItemTab={activeItemTab}
        handleItemSelect={handleItemSelect}
        handleAddItem={handleAddItem}
        handleItemDelete={handleItemDelete}
      />
    </Layout>
  );
};

export default MyPost;
