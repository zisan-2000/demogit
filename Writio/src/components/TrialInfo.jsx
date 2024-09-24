import React from "react";

const TrialInfo = ({ trialPlan, trialDaysLeft }) => {
  return (
    <div>
      <p className="mb-4  text-center text-gray-500">
        Your <span className="font-bold">{trialPlan}</span> trial plan has{" "}
        <span className="font-bold text-orange-500">
          {trialDaysLeft} days left
        </span>
        <br />
        Purchase a{" "}
        <span className="cursor-pointer text-blue-500 underline">
          subscription
        </span>{" "}
        before your trial ends.
      </p>
      <h2 className="mb-4  text-center text-lg font-semibold">
        Choose a plan before your feeds expire. Only{" "}
        <span className="font-bold text-orange-500">
          {trialDaysLeft} days left.
        </span>
      </h2>
    </div>
  );
};

export default TrialInfo;
