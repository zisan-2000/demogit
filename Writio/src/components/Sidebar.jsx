// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { menuItems } from "../Data/Data"; // Import menu items

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true); // Sidebar open/close state

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`sidebar ${isOpen ? "w-64" : "w-20"}  overflow-y-auto`}>
//       <div className="flex items-center justify-between">
//         <div className={`logo mb-6 text-2xl font-bold ${!isOpen && "hidden"}`}>
//           Writio
//         </div>
//         <button onClick={toggleSidebar} className="p-2">
//           <i className={`fas fa-${isOpen ? "angle-left" : "angle-right"}`}></i>{" "}
//         </button>
//       </div>
//       <ul>
//         {menuItems.map((item, index) => (
//           <li key={index} className="menu-item ">
//             <Link to={item.path} className="flex items-center gap-4">
//               {/* Add Link to wrap around the menu item */}
//               <i className={item.icon}></i>
//               <span
//                 className={`${!isOpen && "hidden"} transition-all ease-in-out`}
//               >
//                 {item.name}
//               </span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <div className="upgrade-section">
//         <button className={`upgrade-button  ${!isOpen && "hidden"}`}>
//           Upgrade Plan
//         </button>
//       </div>
//       <div className="admin-section ">
//         <div className={`avatar `}>AA</div> {/* Admin initials */}
//         <div className={`${!isOpen && "hidden"}`}>
//           <p className="font-semibold">admin admin</p>
//           <p className="text-sm text-gray-500">Free</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
