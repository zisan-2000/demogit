// src/Home.js

import { useState } from "react";
import Topic from "../Components/Topics";
import Feed from "./Feed";
import CreateFeedsHeader from "./Header/CreateFeedsHeader";
import CategoryTabComponent from "./MyPostComp/CategoryTabComponent";
import CreateNewsFeed from "./OtherSources/OtherSources";
import SearchGenerateComponent from "./SearchGenerateComponent";
import Sidebar from "./Sidebar/Sidebar";
import TabComponent from "./TabComponent";

const CreateFeeds = () => {
  const [activeTab, setActiveTab] = useState(1); // Default to the first tab
  const [categoryActiveTab, setCategoryActiveTab] = useState(1); // Default to "Websites" tab

  return (
    <div className="flex min-h-screen flex-col">
      {/* Main Content */}
      <section className="flex flex-grow gap-6">
        <Sidebar />
        <div className="m-3 flex-grow text-xl font-semibold text-gray-900">
          {/* Header Section */}
          <CreateFeedsHeader />
          <div className="mb-10 mt-20 flex justify-center">
            {/* Pass setActiveTab to TabComponent */}
            <TabComponent setActiveTab={setActiveTab} />
          </div>

          {activeTab === 1 && (
            <>
              <SearchGenerateComponent />
              <div className="m-6 flex-grow text-xl font-semibold text-gray-900">
                {/* Pass setCategoryActiveTab to CategoryTabComponent */}
                <CategoryTabComponent
                  setCategoryActiveTab={setCategoryActiveTab}
                />
              </div>

              {/* Conditionally render content based on the selected category tab */}
              {categoryActiveTab === 1 && <Feed />}

              {categoryActiveTab === 2 && <Topic />}

              {categoryActiveTab === 3 && <CreateNewsFeed />}
            </>
          )}

          {activeTab === 2 && (
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold">RSS Builder</h2>
              <p className="text-lg">
                This is some dummy information for the RSS Builder tab.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CreateFeeds;
