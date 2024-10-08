// src/Components/CreateNewsFeed.jsx

import CreateFeedsData from "../../Data/CreateFeedsData";
import SelectRSSComponent from "./SelectRSSComponent";

const OtherSources = () => {
  return (
    <div className="rounded bg-white p-5 shadow-md">
      <div className="m-6 flex-grow text-xl font-semibold text-gray-900">
        <SelectRSSComponent /> {/* Render the SelectRSSComponent */}
      </div>
      <h2 className="mb-5 text-2xl font-bold">
        Select which RSS feed you would like to create
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CreateFeedsData.map((feed, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center rounded border p-4 hover:bg-gray-100"
          >
            <span className="mr-4 text-3xl">{feed.icon}</span>
            <span className="text-lg font-medium">{feed.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherSources;
