// Importing React, Calendar icon, and DatePicker
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Importing date-picker CSS
import { AiOutlineCalendar } from "react-icons/ai"; // Importing calendar icon from react-icons
import feeds from "../Data/Website";

const Feed = () => {
  // State to control the visibility of the calendar for each category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to toggle calendar visibility
  const toggleCalendar = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Close the calendar if already opened
    } else {
      setSelectedCategory(category); // Open the calendar for the clicked category
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between gap-4">
        {feeds.map((feed, index) => (
          <div
            key={index}
            className="relative w-2/4 rounded-lg border border-gray-300 p-4 shadow-lg"
          >
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
              {feed.category}
              <AiOutlineCalendar
                className="cursor-pointer text-gray-500"
                onClick={() => toggleCalendar(feed.category)} // Toggle calendar on click
              />
            </h2>
            {/* Conditionally render the calendar if the category is selected */}
            {selectedCategory === feed.category && (
              <div className="absolute top-8 z-10 bg-white p-4 shadow-lg">
                <DatePicker
                  selected={new Date()}
                  onChange={(date) => console.log(date)}
                  inline
                />
              </div>
            )}
            <div className="grid grid-cols-1 gap-4">
              {feed.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-gray-300 bg-white p-4 shadow-md"
                >
                  <h3 className="text-md text-center font-semibold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
