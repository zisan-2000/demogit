const SidebarUpgrade = ({ isOpen }) => {
  return (
    <div className="upgrade-section h-40 overflow-y-auto">
      <button className={`upgrade-button ${!isOpen && "hidden"}`}>
        Upgrade Plan
      </button>
    </div>
  );
};

export default SidebarUpgrade;
