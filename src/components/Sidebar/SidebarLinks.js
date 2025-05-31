import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

const SidebarLinks = () => {
  const [option, setOption] = useState("All Categories");
  return (
    <div className="flex flex-col p-7">
      <div className="flex mt-10 rounded-md bg-gray-300 px-2 sm:w-80">
        <div className="flex items-center group  p-1 w-40">
          {option} <MdKeyboardArrowDown />
          <div className="absolute hidden top-40 sm:top-18 pt-1 bg-gray-30 flex-col gap-2 group-hover:flex">
            <div className="flex items-center cursor-pointer" onClick={() => {setOption("All Categories");}} > All Categories</div>
            <div className="flex items-center cursor-pointer" onClick={() => {setOption("Beverage");}}>Beverage</div>
            <div className="flex items-center cursor-pointer" onClick={() => {setOption("Desserts");}}>Desserts</div>
            <div className="flex items-center cursor-pointer" onClick={() => {setOption("Drinks & Juice");}}>Drinks & Juice</div>
            <div className="flex items-center cursor-pointer" onClick={() => {setOption("Fish & Meats");}}>Fish & Meats</div>
            <div className="flex items-center cursor-pointer" onClick={() => {setOption("Fresh Fruits");}}>Fresh Fruits</div>
            <div className="flex items-center cursor-pointer" onClick={() => {setOption("Pets & Animals");}}>Pets & Animals</div>
            <div className="flex items-center cursor-pointer" onClick={() => {setOption("Toys");}}>Toys</div>
          </div>
            </div>
          <div className="flex ml-auto items-center w-47">
            <input
              type="text"
              name=""
              id=""
              className="w-40 focus-visible:outline-none"
              placeholder="Type Your Products..."
            />
            <div className="cursor-pointer">
            <RiSearchLine /></div>
        </div>
      </div>
      <div className="">{/* middle */}</div>
      <div className="text-gray-500 mt-auto">
        <p>20.05.2025</p>
        <p>23/A Mark Street Road, Newyork City</p>
        <p>info@zillystore.com</p>
        <p>+9888-256-666</p>
      </div>
    </div>
  );
};
export default SidebarLinks;
