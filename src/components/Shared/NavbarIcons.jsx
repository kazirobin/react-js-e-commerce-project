import { CiHeart } from "react-icons/ci";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { PiRecycleThin, PiShoppingCartSimpleThin, PiUserThin } from "react-icons/pi";


const NavbarIcons = ({ handleSidebar }) => {
  return (
    <div className="ml-auto flex gap-3 items-center text-3xl  sm:text-2xl">
      <div className="cursor-pointer sm:text-emerald-700 sm:bg-emerald-100 p-1 rounded-full">
        <PiUserThin />
      </div>
      <div className="w-0.5 bg-gray-400 h-4 hidden sm:block"></div>

      <div className="cursor-pointer relative order-4 sm:order-1">
        <div className="absolute bottom-3 right-4 bg-amber-300 px-1 text-xs rounded-full">
          0
        </div>
        <PiRecycleThin />
      </div>
      <div className="cursor-pointer relative order-4 sm:order-1">
        <div className="absolute bottom-3 right-4 bg-amber-300 px-1 text-xs rounded-full">
          0
        </div>
        <span className="font-thin">

        <CiHeart />
        </span>
      </div>
      <div className="cursor-pointer relative order-1 sm:order-1">
        <div className="absolute bottom-3 right-4 bg-amber-300 px-1 text-xs rounded-full">
          0
        </div>
        <PiShoppingCartSimpleThin />
      </div>

      <div
        className="cursor-pointer transition-all order-4 sm:order-1"
        onClick={handleSidebar}
      >
        <HiBars3BottomLeft  />
      </div>
      {/* {sidebar && <Sidebar handleSidebar={handleSidebar}/>} */}
    </div>
  );
};
export default NavbarIcons;
