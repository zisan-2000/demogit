import React from "react";

const LinkComponent = ({ link }) => {
  return (
    <a href={link} className="mt-4 block text-blue-600 hover:underline">
      {link}
    </a>
  );
};

export default LinkComponent;
