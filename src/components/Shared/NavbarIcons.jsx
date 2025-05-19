import { FaRegHeart } from "react-icons/fa";
import {
  HiBars3CenterLeft,
  HiOutlineArrowPath,
  HiOutlineArrowPathRoundedSquare,
} from "react-icons/hi2";
import { RiShoppingBasket2Line, RiUser6Line } from "react-icons/ri";

const NavbarIcons = () => {
  return (
    <div className="ml-auto flex gap-3 items-center text-2xl">
      <div className="cursor-pointer text-emerald-500">
        <RiUser6Line />
      </div>
      <div className="w-0.5 bg-gray-400 h-4"></div>

<div>

    <button type="button" class="relative inline-flex justify-center items-center size-11 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
  <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
  </svg>
  <span class="absolute top-0 end-0 inline-flex items-centerrounded-full border-2 border-white text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-teal-500 text-white">
    <span class="p-2">12</span>
  </span>
</button>
</div>


      <div className="cursor-pointer">
        
        <HiOutlineArrowPath />
      </div>
      <div className="cursor-pointer">
        <FaRegHeart />
      </div>
      <div className="cursor-pointer">
        <RiShoppingBasket2Line />
      </div>
      <div className="cursor-pointer">
        <HiBars3CenterLeft />
      </div>
    </div>
  );
};
export default NavbarIcons;
