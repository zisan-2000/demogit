import React from "react";

const Template = () => {
  return (
    <div className="all-content">
      <h1 className="welcome-text">Template Management</h1>
      <p className="description-text">Manage your document templates here.</p>
      <h2 className="getting-started-title">Available Templates</h2>
      <ul className="">
        {/* For now, we'll just hardcode some template names. You can later make this dynamic */}
        <li className="">
          <span className="flex items-center gap-2">
            📄 Business Proposal Template
          </span>
          <span className="task-status">Active</span>
        </li>
        <li className="template-item">
          <span className="flex items-center gap-2">📄 Resume Template</span>
          <span className="template-status">Draft</span>
        </li>
      </ul>
    </div>
  );
};

export default Template;
