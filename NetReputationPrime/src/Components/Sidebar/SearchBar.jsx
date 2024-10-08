import React from "react";
import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons

const SearchBar = ({ open }) => {
  return (
    <div className="mb-6 mt-4 ">
      <div className="searchbar flex items-center rounded-md bg-gray-800 p-2">
        <input
          type="text"
          placeholder="Search or go to..."
          className="ml-3 w-full bg-transparent text-white outline-none"
        />

        {!open && ( // Show input only when isOpen is false
          <FaSearch />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
