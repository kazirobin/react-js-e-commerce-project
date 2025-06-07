import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import SocialVertical from "./../Shared/SocialVertical";
import Menus from "./Menus";

const SidebarLinks = () => {
  const [option, setOption] = useState("All Categories");
  const [open, setOpen] = useState(true);
  const [links, setLinks] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="flex flex-col p-2">
        <div className="flex  w-77 ps-1 bg-gray-300 rounded-md sm:w-90">
          <div className="bg-gray-300 py-1.5 w-33 group relative">
            <div
              className="flex items-center cursor-pointer text-m ps-2"
              onClick={handleOpen}
            >
              {option} <MdKeyboardArrowDown />
            </div>
            {/* absolute hidden top-40 sm:top-18  */}
            <div
              className={`absolute top-8 -left-1 *:p-1 px-2 w-35 bg-gray-300 flex-col gap-2 sm:group-hover:block ${
                open ? "hidden" : ""
              } sm:hidden`}
              onClick={handleOpen}
            >
              <div
                className="flex items-center  "
                onClick={() => {
                  setOption("All Categories");
                }}
              >
                <span className="cursor-pointer  hover:text-gray-500">
                  All Categories
                </span>{" "}
              </div>
              <div
                className="flex items-center "
                onClick={() => {
                  setOption("Beverage");
                }}
              >
                {" "}
                <span className="cursor-pointer  hover:text-gray-500">
                  Beverage
                </span>
              </div>
              <div
                className="flex items-center "
                onClick={() => {
                  setOption("Desserts");
                }}
              >
                {" "}
                <span className="cursor-pointer  hover:text-gray-500">
                  {" "}
                  Desserts
                </span>
              </div>
              <div
                className="flex items-center "
                onClick={() => {
                  setOption("Drinks & Juice");
                }}
              >
                {" "}
                <span className="cursor-pointer  hover:text-gray-500">
                  {" "}
                  Drinks & Juice
                </span>
              </div>
              <div
                className="flex items-center "
                onClick={() => {
                  setOption("Fish & Meats");
                }}
              >
                {" "}
                <span className="cursor-pointer  hover:text-gray-500">
                  {" "}
                  Fish & Meats
                </span>
              </div>
              <div
                className="flex items-center "
                onClick={() => {
                  setOption("Fresh Fruits");
                }}
              >
                {" "}
                <span className="cursor-pointer  hover:text-gray-500">
                  Fresh Fruits{" "}
                </span>
              </div>
              <div
                className="flex items-center"
                onClick={() => {
                  setOption("Pets & Animals");
                }}
              >
                {" "}
                <span className="cursor-pointer  hover:text-gray-500">
                  Pets & Animals{" "}
                </span>
              </div>
              <div
                className="flex items-center "
                onClick={() => {
                  setOption("Toys");
                }}
              >
                {" "}
                <span className="cursor-pointer  hover:text-gray-500">
                  Toys{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 flex items-center p-1 flex-1 rounded-md">
            <div className="flex items-center ms-auto">
              <input
                type="text"
                name=""
                id=""
                className="w-35 sm:w-40  focus-visible:outline-none"
                placeholder="Type Your Products...."
              />
              <div className="cursor-pointer hover:text-gray-500 pe-2">
                <RiSearchLine />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          middle
         <Menus/>
        </div>
        <div className="text-gray-500 border-gray-200 m-1 p-2 sm:p-4 rounded-xl border-2">
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
