import React from "react";
import FeedsInfo from "./FeedsInfo";
import NewBadge from "./NewBadge";
import PlanInfo from "./PlanInfo";
import UpgradeButton from "./UpgradeButton";

const SidebarUpgrade = ({ isOpen, planInfo, upgradeData }) => {
  return (
    <div className="upgrade-section mt-6">
      <div className={`${!isOpen && "hidden"}`}>
        <NewBadge />
        {/* Divider line under NEW */}
        <hr className="my-2 mb-6" style={{ opacity: 0.3 }} />

        <PlanInfo plan={planInfo.plan} daysLeft={planInfo.daysLeft} />
        <FeedsInfo feeds={planInfo.feeds} />
      </div>
      <UpgradeButton isOpen={isOpen} buttonLabel={upgradeData.buttonLabel} />
    </div>
  );
};

export default SidebarUpgrade;
