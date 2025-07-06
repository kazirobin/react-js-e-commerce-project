import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import categories from "/src/store/categories-data.json"
import SocialVertical from "./../Shared/SocialVertical";
import Menus from "./Menus";

const SidebarLinks = () => {
  const [option, setOption] = useState("All Categories");
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="h-12/12 overflow-scroll scrollbar-hide">
      <div className="flex flex-col">
        <div className="flex bg-gray-100 rounded-md  text-sm font-semibold mx-6">
          <div className="bg-gray-100  group relative text-xs">
            <div
              className="flex items-center cursor-pointer p-2 "
              onClick={handleOpen}
            >
              {option} <MdKeyboardArrowDown className="mt-1" />
            </div>

            <div
              className={`absolute top-7 left-0 w-30 *:ps-2 *:py-1 pb-4 bg-gray-100 flex-col gap-2 sm:group-hover:block ${
                open ? "hidden" : ""
              } sm:hidden`}
              onClick={handleOpen}
            >
              
             {categories.map((category,index) => ( <div key={index}
                className="flex items-center  "
                onClick={() => {
                  setOption(category.name);
                }}
              >
                <span className="cursor-pointer hover:text-gray-500">
                  {category.name}
                </span>{" "}
              </div>  ))}

             

            </div>
          </div>
          <div className="bg-gray-100 flex items-center p-1 flex-1 rounded-md">
            <div className="flex items-center content-between ms-auto ">
              <input
                type="text"
                name=""
                id=""
                className="custom-small focus-visible:outline-none"
                placeholder="Type Your Products...."
              />
              <div className="cursor-pointer hover:text-gray-500 pe-6">
                <RiSearchLine />
              </div>
            </div>
          </div>
        </div>
        <div className="px-2">
          <Menus />
        </div>
        <div className="border-gray-200 m-1 p-7 rounded-xl border-2 text-xs flex flex-col gap-1">
          <p>20.05.2025</p>
          <p>23/A Mark Street Road, Newyork City</p>
          <p>info@zillystore.com</p>
          <p>+9888-256-666</p>
          <div className="p-2 text-xs text-black">
            <SocialVertical />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidebarLinks;
