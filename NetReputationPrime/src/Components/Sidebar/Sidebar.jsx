import { useEffect, useState } from "react";
import { SidebarData, planInfo, upgradeData } from "../../Data/SidebarData";
import MenuItem from "./MenuItem";
import SearchBar from "./SearchBar";
import SidebarFeed from "./SidebarFeed";
import SidebarLogo from "./SidebarLogo";
import SidebarStarred from "./SidebarStarred";
import SidebarUpgrade from "./SidebarUpgrade";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  // Function to manually toggle the sidebar
  const toggleSidebar = () => {
    setOpen(!open);
  };

  // Automatically manage sidebar state based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Automatically open the sidebar for large devices (>= 1024px)
        setOpen(true);
      } else if (window.innerWidth <= 768) {
        // Automatically close the sidebar for medium and smaller devices (<= 768px)
        setOpen(false);
      }
    };

    // Set the sidebar state based on the initial window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={` min-h-screen bg-blue-900 ${
        open ? "w-80" : "w-16"
      }  sticky left-0 top-0 z-50 px-4 text-gray-100 duration-500`} // Dynamic width based on 'open' state
    >
      <div className="flex justify-end py-3">
        <button onClick={toggleSidebar} className="p-2 text-white">
          <i className={`fas fa-${open ? "angle-left" : "angle-right"}`}></i>
        </button>
      </div>
      <div className="flex items-center justify-between">
        <SidebarLogo isOpen={open} />
      </div>
      <SearchBar />
      <div className="relative mt-4 flex flex-col gap-4">
        {SidebarData.map((menu, i) => (
          <MenuItem key={i} menu={menu} open={open} index={i} />
        ))}
      </div>
      <SidebarFeed isOpen={open} /> {/* New Feed Button */}
      <SidebarStarred isOpen={open} /> {/* Starred Section */}
      <SidebarUpgrade
        isOpen={open}
        planInfo={planInfo}
        upgradeData={upgradeData}
      />
    </div>
  );
};

export default Sidebar;
