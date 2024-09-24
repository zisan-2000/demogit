// Data.jsx

export const menuItems = [
  { name: "Dashboard", icon: "fas fa-home", path: "/" }, // Link to the Dashboard
  { name: "Templates", icon: "fas fa-folder", path: "/templates" }, // Link to the Templates page
  { name: "Categories", icon: "fas fa-list", path: "/categories" },
  { name: "Plans", icon: "fas fa-briefcase", path: "/plans" },
  { name: "Users", icon: "fas fa-users", path: "/users" },
  { name: "Settings", icon: "fas fa-cog", path: "/settings" },
];

import { FaCheckCircle, FaClipboardList, FaCog, FaTasks } from "react-icons/fa"; // React-Icons থেকে ইমপোর্ট করা

export const tasks = [
  { task: "Connect your OpenAI Key", status: "Done", icon: <FaCheckCircle /> },
  { task: "Configure payment gateways", status: "Done", icon: <FaCog /> },
  { task: "Set business details", status: "Done", icon: <FaClipboardList /> },
  { task: "Setup membership plans", status: "Done", icon: <FaTasks /> },
];

//Plan Data.jsx

export const billingOptions = {
  trialPlan: "Basic",
  trialDaysLeft: 6,
  Discount: 17, // 17% discount
  subscriptionLink: "#", // replace with actual subscription link if needed
};

export const planOptions = [
  {
    title: "Basic",
    monthlyPrice: 10,
    get yearlyPrice() {
      return (this.monthlyPrice * 12).toFixed(2); // Calculate yearly price dynamically
    },
    get monthlySave() {
      return (this.monthlyPrice * (billingOptions.Discount / 100)).toFixed(2); // Calculate monthly save dynamically
    },
    get yearlySave() {
      return (this.yearlyPrice * (billingOptions.Discount / 100)).toFixed(2); // Calculate yearly save dynamically
    },
    switchMonthlyBilling: "Switch to monthly billing",
    switchYearlyBilling: "Switch to yearly billing",
    mostPopular: false,
  },
  {
    title: "Developer",
    monthlyPrice: 20,
    get yearlyPrice() {
      return (this.monthlyPrice * 12).toFixed(2); // Calculate yearly price dynamically
    },
    get monthlySave() {
      return (this.monthlyPrice * (billingOptions.Discount / 100)).toFixed(2); // Calculate monthly save dynamically
    },
    get yearlySave() {
      return (this.yearlyPrice * (billingOptions.Discount / 100)).toFixed(2); // Calculate yearly save dynamically
    },
    switchMonthlyBilling: "Switch to monthly billing",
    switchYearlyBilling: "Switch to yearly billing",
    mostPopular: true,
  },
  {
    title: "Pro",
    monthlyPrice: 100,
    get yearlyPrice() {
      return (this.monthlyPrice * 12).toFixed(2); // Calculate yearly price dynamically
    },
    get monthlySave() {
      return (this.monthlyPrice * (billingOptions.Discount / 100)).toFixed(2); // Calculate monthly save dynamically
    },
    get yearlySave() {
      return (this.yearlyPrice * (billingOptions.Discount / 100)).toFixed(2); // Calculate yearly save dynamically
    },
    switchMonthlyBilling: "Switch to monthly billing",
    switchYearlyBilling: "Switch to yearly billing",
    mostPopular: false,
  },
];
