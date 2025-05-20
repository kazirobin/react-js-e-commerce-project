import SidebarIcons from "../Shared/SidebarIcons";
import SidebarLinks from "../Shared/SidebarLinks";

const Sidebar = ({handleSidebar}) => {
  return (
    <div className="absolute top-0 left-0 flex transition-all">
      <div className="bg-green-800 h-screen w-16 block">
        <SidebarIcons handleSidebar={handleSidebar}/>
      </div>
      <div className="bg-white w-130"> 
        <SidebarLinks/>
      </div>
    </div>
  );
};
export default Sidebar;
