// src/components/SidebarData.jsx
import { FiFolder, FiMessageSquare } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

export const SidebarData = [
  { name: "My Plan", link: "/", icon: MdOutlineDashboard },
  { name: "My Posts", link: "/post", icon: FiMessageSquare },
  {
    name: "My Articles",
    link: "/article",
    icon: TbReportAnalytics,
  },
  { name: "Status", link: "/createFeeds", icon: FiFolder },
];

export const planInfo = {
  plan: "Basic Trial",
  daysLeft: 6,
  feeds: "0 / 15",
};

export const upgradeData = {
  buttonLabel: "Upgrade",
};
