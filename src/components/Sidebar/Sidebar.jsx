import SidebarIcons from "../Shared/SidebarIcons";

const Sidebar = ({handleSidebar}) => {
  return (
    <div className="absolute top-0 left-0 flex">
      <div className="bg-green-500 h-screen w-12 block">
        <SidebarIcons handleSidebar={handleSidebar}/>
      </div>
      <div className="bg-white w-70"> Elements</div>
    </div>
  );
};
export default Sidebar;
