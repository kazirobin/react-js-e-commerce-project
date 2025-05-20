import { FaRegHeart } from "react-icons/fa";
import { HiBars3CenterLeft, HiOutlineArrowPath } from "react-icons/hi2";
import { RiShoppingBasket2Line, RiUser6Line } from "react-icons/ri";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const NavbarIcons = () => {
  const  [sidebar,setSidebar] =useState(true)
  const handleSidebar = () => { setSidebar(!sidebar) }
  return (
    <div className="ml-auto flex gap-3 items-center text-2xl">
      <div className="cursor-pointer text-emerald-700 bg-emerald-100 p-1 rounded-full">
        <RiUser6Line />
      </div>
      <div className="w-0.5 bg-gray-400 h-4"></div>

      <div className="cursor-pointer relative hidden md:block">
        <div className="absolute bottom-3 right-4 bg-amber-300 px-1 text-xs rounded-full">
          0
        </div>
        <HiOutlineArrowPath />
      </div>
      <div className="cursor-pointer relative hidden md:block">
        <div className="absolute bottom-3 right-4 bg-amber-300 px-1 text-xs rounded-full">
          0
        </div>
        <FaRegHeart />
      </div>
      <div className="cursor-pointer relative hidden md:block">
        <div className="absolute bottom-3 right-4 bg-amber-300 px-1 text-xs rounded-full">
          0
        </div>
        <RiShoppingBasket2Line />
      </div>

      <div className="cursor-pointer transition-all" onClick={handleSidebar}>
        <HiBars3CenterLeft />
      </div>
        {sidebar && <Sidebar handleSidebar={handleSidebar}/>}
    </div>
  );
};
export default NavbarIcons;
