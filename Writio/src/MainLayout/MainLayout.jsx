import { useState } from "react";
import { Outlet } from "react-router-dom"; // Use Outlet to render child routes
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="main-content mt-24 ">
        <Outlet />{" "}
        {/* This will render the child components like Dashboard or Template */}
      </div>
    </div>
  );
};

export default MainLayout;
