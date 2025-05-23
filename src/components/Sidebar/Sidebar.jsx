import SidebarIcons from "./SidebarIcons";
import SidebarLinks from "./SidebarLinks";

const Sidebar = ({ handleSidebar }) => {
  return (
    <div className="absolute bottom-0">
      <div className="flex">
        <div className="bg-green-800 hidden sm:block w-20 text-xl">
          <SidebarIcons handleSidebar={handleSidebar} />
        </div>
        <div className="w-100 bg-white">
          <SidebarLinks />
        </div>
        <div className="flex-1 opacity-50"></div>
      </div>
    </div>
  );
};
export default Sidebar;
