import React from "react";

const PlanInfo = ({ plan, daysLeft }) => (
  <div className="mb-2 flex justify-between text-white">
    <div>
      <p className="font-semibold">{plan}</p>
      <p className="text-sm">{daysLeft} days left</p>
    </div>
    <a href="#" className="text-sm text-gray-400 underline">
      Manage
    </a>
  </div>
);

export default PlanInfo;
