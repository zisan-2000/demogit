// src/Layout.js

import Header from "@/Components/Header/Header";
import Sidebar from "@/Components/Sidebar/Sidebar";

const Layout = ({ title, showButton, buttonLink, buttonText, children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-grow flex-col">
        {/* Header */}
        <Header
          title={title}
          showButton={showButton}
          buttonLink={buttonLink}
          buttonText={buttonText}
        />

        {/* Main Content */}
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
