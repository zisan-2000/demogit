const SidebarAdmin = ({ isOpen }) => {
  return (
    <div className="admin-section">
      <div className="avatar">AA</div> {/* Admin initials */}
      <div className={`${!isOpen && "hidden"}`}>
        <p className="font-semibold">admin admin</p>
        <p className="text-sm text-gray-500">Free</p>
      </div>
    </div>
  );
};

export default SidebarAdmin;
