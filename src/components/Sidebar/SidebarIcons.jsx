import { IoIosClose } from "react-icons/io";
import {
  RiSearchLine
} from "react-icons/ri";
import logoLight from "../../../public/images/logo/light_logo.svg";
import SocialHorizontal from "../Shared/SocialHorizontal";
import { PiRecycleThin, PiShoppingCartSimpleThin, PiUserThin } from "react-icons/pi";
import { CiHeart, CiSearch } from "react-icons/ci";

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
          <PiShoppingCartSimpleThin />
        </div>
        <div className="cursor-pointer relative">
          <div className="absolute bottom-3 right-4 bg-amber-300  text-black px-1.5 text-xs rounded-full">
            0
          </div>
          < PiRecycleThin />
        </div>
        <div className="cursor-pointer relative">
          <div className="absolute bottom-3 right-4 bg-amber-300  text-black px-1.5 text-xs rounded-full">
            0
          </div>
          <CiHeart />
        </div>
        <div className="cursor-pointer">
          <PiUserThin />
        </div>
        <div className="cursor-pointer">
          <CiSearch  />
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
