import React from "react";

const FeedsInfo = ({ feeds }) => (
  <div>
    <div className="mb-1 text-sm text-white">
      <p>Feeds</p>
    </div>

    {/* Progress bar */}
    <div className="relative h-2 w-full rounded-full bg-gray-400">
      <div
        className="absolute left-0 top-0 h-full rounded-full bg-white"
        style={{ width: "0%" }} // You can update this based on progress
      ></div>
    </div>

    <div className="mt-1 text-sm text-gray-400">{feeds}</div>
  </div>
);

export default FeedsInfo;
