import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

const SidebarLinks = () => {
  const [option, setOption] = useState("All Categories");
  const [open,setOpen] = useState(true)
  const handleOpen = () => { setOpen(!open) }
  return (
    <div>
      <div className="flex flex-col px-7">
      <div className="flex items-start rounded-md sm:w-80">
        <div className="bg-gray-300 p-1.5 w-35 group">
          <div className="flex items-center cursor-pointer text-sm" onClick={handleOpen}>{option} <MdKeyboardArrowDown /></div>
          {/* absolute hidden top-40 sm:top-18  */}
          <div className={`absolute pt-1 -ms-1 ps-1 w-32 bg-gray-300 flex-col gap-2 sm:group-hover:block ${open ? "hidden" : ""} sm:hidden`} onClick={handleOpen}>
            <div className="flex items-center cursor-pointer " onClick={() => {setOption("All Categories");}} > </div>
            <div className="flex items-center cursor-pointer " onClick={() => {setOption("Beverage");}}>Beverage</div>
            <div className="flex items-center cursor-pointer " onClick={() => {setOption("Desserts");}}>Desserts</div>
            <div className="flex items-center cursor-pointer " onClick={() => {setOption("Drinks & Juice");}}>Drinks & Juice</div>
            <div className="flex items-center cursor-pointer " onClick={() => {setOption("Fish & Meats");}}>Fish & Meats</div>
            <div className="flex items-center cursor-pointer " onClick={() => {setOption("Fresh Fruits");}}>Fresh Fruits</div>
            <div className="flex items-center cursor-pointer" onClick={() => {setOption("Pets & Animals");}}>Pets & Animals</div>
            <div className="flex items-center cursor-pointer " onClick={() => {setOption("Toys");}}>Toys</div>
          </div>
            </div>
          <div className="bg-gray-300 flex ml-auto items-center w-47 p-1">
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
      <div className="">middle
        
      </div>
      <div className="text-gray-500 mt-auto">
        <p>20.05.2025</p>
        <p>23/A Mark Street Road, Newyork City</p>
        <p>info@zillystore.com</p>
        <p>+9888-256-666</p>
      </div>
    </div>
    </div>
  );
};
export default SidebarLinks;
