import React from "react";

const Settings = () => {
  return (
    <div className="all-content">
      <h1 className="welcome-text">Settings</h1>
      <p className="description-text">Manage your application settings here.</p>
      <h2 className="getting-started-title">Application Settings</h2>
      <ul>
        {/* Hardcoded settings options */}
        <li className="">
          <span className="flex items-center gap-2">🔧 Theme</span>
          <span className="settings-status">Dark</span>
        </li>
        <li className="">
          <span className="flex items-center gap-2">🔧 Language</span>
          <span className="settings-status">English</span>
        </li>
      </ul>
    </div>
  );
};

export default Settings;
