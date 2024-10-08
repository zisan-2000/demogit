// src/components/MenuItem.js
import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ menu, open, index }) => {
  return (
    <Link
      to={menu?.link}
      className={`${
        menu?.margin && "mt-5"
      } group flex items-center gap-4 rounded-md p-2 text-xl font-medium hover:bg-gray-800`}
    >
      <div>{React.createElement(menu?.icon, { size: "20" })}</div>
      <h2
        style={{
          transitionDelay: `${index + 3}00ms`,
        }}
        className={`whitespace-pre duration-500 ${
          !open && "translate-x-28 overflow-hidden opacity-0"
        }`}
      >
        {menu?.name}
      </h2>
      <h2
        className={`${
          open && "hidden"
        } absolute left-48 w-0 overflow-hidden whitespace-pre rounded-md bg-white px-0 py-0 font-semibold text-gray-900 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
      >
        {menu?.name}
      </h2>
    </Link>
  );
};

export default MenuItem;
