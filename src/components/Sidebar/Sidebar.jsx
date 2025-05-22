import SidebarIcons from "./SidebarIcons";
import SidebarLinks from "./SidebarLinks";

const Sidebar = ({ handleSidebar }) => {
  return (
    <div className="">
      <div className="flex">
        <div className="bg-green-800 hidden sm:block h-157 w-20 -mt-38 text-xl">
          <SidebarIcons handleSidebar={handleSidebar} />
        </div>
        <div className="sm:-mt-38 w-100 bg-white">
          <SidebarLinks />
        </div>
        <div className="flex-1 opacity-50"></div>
      </div>
    </div>
  );
};
export default Sidebar;
