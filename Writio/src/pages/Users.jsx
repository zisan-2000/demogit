import React from "react";

const Users = () => {
  return (
    <div className="all-content">
      <h1 className="welcome-text">User Management</h1>
      <p className="description-text">Manage your users here.</p>
      <h2 className="getting-started-title">Active Users</h2>
      <ul>
        {/* Hardcoded user names for now */}
        <li className="">
          <span className="flex items-center gap-2">👤 John Doe</span>
          <span className="user-status">Admin</span>
        </li>
        <li className="">
          <span className="flex items-center gap-2">👤 Jane Smith</span>
          <span className="user-status">Editor</span>
        </li>
      </ul>
    </div>
  );
};

export default Users;
