import React from "react";

const Categories = () => {
  return (
    <div className="all-content">
      <h1 className="welcome-text">Category Management</h1>
      <p className="description-text">Manage your categories here.</p>
      <h2 className="getting-started-title">Available Categories</h2>
      <ul>
        {/* Hardcoded category names, you can make this dynamic later */}
        <li className="">
          <span className="flex items-center gap-2">📁 Technology</span>
          <span className="task-status">Active</span>
        </li>
        <li className="">
          <span className="flex items-center gap-2">📁 Marketing</span>
          <span className="task-status">Inactive</span>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
