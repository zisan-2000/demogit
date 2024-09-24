import React from "react";
import { tasks } from "../Data/Data"; // Task ডেটা ইম্পোর্ট করা

const Dashboard = () => {
  return (
    <div className="all-content">
      <h1 className="welcome-text">Welcome, admin admin</h1>
      <p className="description-text">
        Once you're done, you'll unlock a whole array of awesome tools.
      </p>
      <h2 className="getting-started-title">Getting started</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className="task-item ">
            <span className="flex items-center gap-2">
              {item.icon} {/* Task-এর আগে আইকন */}
              {item.task}
            </span>
            <span className="task-status ">{item.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
