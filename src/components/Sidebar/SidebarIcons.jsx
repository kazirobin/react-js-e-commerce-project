import { IoIosClose } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineArrowPath } from "react-icons/hi2";
import {
  RiSearchLine,
  RiShoppingBasket2Line,
  RiUser6Line,
} from "react-icons/ri";
import logoLight from "../../../public/images/logo/light_logo.svg";
import SocialHorizontal from "../Shared/SocialHorizontal";

const SidebarIcons = ({ handleSidebar }) => {
  return (
    <div className="bg-green-800">
      <div className="text-white flex flex-col items-center gap-4 pt-4">
        <div
          onClick={handleSidebar}
          className="cursor-pointer rounded bg-white text-gray-500 hover:text-black p-1 text-2xl"
        >
          <IoIosClose />
        </div>
        <div className="cursor-pointer relative">
          <div className="absolute bottom-3 right-4 bg-amber-300 text-black px-1.5 text-xs rounded-full">
            0
          </div>
          <RiShoppingBasket2Line />
        </div>
        <div className="cursor-pointer relative">
          <div className="absolute bottom-3 right-4 bg-amber-300  text-black px-1.5 text-xs rounded-full">
            0
          </div>
          <HiOutlineArrowPath />
        </div>
        <div className="cursor-pointer relative">
          <div className="absolute bottom-3 right-4 bg-amber-300  text-black px-1.5 text-xs rounded-full">
            0
          </div>
          <FaRegHeart />
        </div>
        <div className="cursor-pointer">
          <RiUser6Line />
        </div>
        <div className="cursor-pointer">
          <RiSearchLine />
        </div>
      </div>
      <div className="rotate-270 mt-10">
        <img src={logoLight} alt="" />
      </div>
      <div className="text-white flex justify-center mt-15 pb-12">
        <SocialHorizontal />
      </div>
    </div>
  );
};
export default SidebarIcons;
