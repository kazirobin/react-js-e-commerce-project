import SidebarIcons from "./SidebarIcons";
import SidebarLinks from "./SidebarLinks";

const Sidebar = ({ handleSidebar,sidebar }) => {
  return (
    <div className=" ">
      <div className="flex h-screen absolute sm:top-0"> 

        <div className="hidden sm:block w-20 text-xl">
          <SidebarIcons handleSidebar={handleSidebar} />
        </div>

        <div className={`w-screen sm:pt-13 ${sidebar ? "" : "hidden"} sm:mt-0 sm:w-95 bg-white`}>
     
          
          <SidebarLinks />
        </div>




      </div>
    </div>
  );
};
export default Sidebar;
