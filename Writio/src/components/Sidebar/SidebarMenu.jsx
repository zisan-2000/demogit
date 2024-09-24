import { Link } from "react-router-dom";

const SidebarMenu = ({ menuItems, isOpen }) => {
  return (
    <ul>
      {menuItems.map((item, index) => (
        <li key={index} className="menu-item  ">
          <Link to={item.path} className="flex items-center gap-4">
            <i className={item.icon}></i>
            <span
              className={`${!isOpen && "hidden"} transition-all ease-in-out`}
            >
              {item.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarMenu;
