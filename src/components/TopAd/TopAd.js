import { BsEnvelope } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import SocialVertical from "../shared/SocialVertical";

const TopAd = () => {
  return (
    <>
      <div className="bg-[#1B8057] md:flex hidden ">
        <div className="w-11/12 m-auto flex text-center font-bold  text-white justify-between">
          <div className="flex justify-center items-center gap-1">
            <IoLocationOutline /> 23/A Mark Street Road, Newyork City |
            <BsEnvelope />
            info@zillystore.com
          </div>
          <div className="p-3">
            <SocialVertical />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopAd;
