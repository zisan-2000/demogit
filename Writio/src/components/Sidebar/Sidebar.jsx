import { useState } from "react";
import { menuItems } from "../../Data/Data"; // Import menu items
import SidebarAdmin from "./SidebarAdmin";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";
import SidebarUpgrade from "./SidebarUpgrade";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar open/close state

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "w-64" : "w-20"} `}>
      <div className="flex items-center justify-between">
        <SidebarLogo isOpen={isOpen} />
        <button onClick={toggleSidebar} className="p-2">
          <i className={`fas fa-${isOpen ? "angle-left" : "angle-right"}`}></i>
        </button>
      </div>
      <SidebarMenu menuItems={menuItems} isOpen={isOpen} />
      <SidebarUpgrade isOpen={isOpen} />
      <SidebarAdmin isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;
