import React from "react";

const Button = ({ text }) => {
  return (
    <button className="rounded-md bg-green-500 px-6 py-2 text-white">
      {text}
    </button>
  );
};

export default Button;
