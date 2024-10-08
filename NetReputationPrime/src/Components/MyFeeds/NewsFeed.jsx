// src/components/NewsFeed.js
import React from "react";
import { FaNewspaper } from "react-icons/fa"; // Import the desired icon
import { Link } from "react-router-dom";
import { newsFeedData } from "../../Data/newsFeedData"; // Import the data

const NewsFeed = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-4 text-center">
      <FaNewspaper className="mb-6 h-48 w-48 text-slate-500" />{" "}
      {/* Use icon instead of img */}
      <h2 className="mb-2 text-2xl font-bold text-blue-600">
        {newsFeedData.title}
      </h2>
      <p className="mb-6 text-gray-500">{newsFeedData.description}</p>
      <Link to="/createFeeds">
        <button className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600">
          {newsFeedData.buttonText}
        </button>
      </Link>
    </div>
  );
};

export default NewsFeed;
