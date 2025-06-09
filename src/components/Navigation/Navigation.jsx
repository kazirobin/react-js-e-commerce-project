import { useState } from "react";
import { Link } from "react-router"; // Import Link
import menuData from "../../../public/menu-data.json";
import { IoMdArrowDown } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState("Elements"); // Home

  const handleActive = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <>
      {/* Main Menu */}
      <div className="flex">
        {menuData.map((item, index) => (
          <Link
            key={index}
            to={`/${item.src || ""}`}
            onClick={() => handleActive(item.menu)}
            onMouseEnter={() => handleActive(item.menu)} // Hover activates menu
            className="flex items-center mx-1 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full py-2"
          >
            {item.menu} {!item.src && <MdKeyboardArrowDown/>}
          </Link>

        ))}
      </div>

      {/* Expanded Submenus - Auto-hide when mouse leaves */}
      <div className="bg-red-500">

      {activeMenu && (
        
        <div
          
            // className={`flex  ${menuData.find((item) => item.menu === activeMenu)?.sub.src ? "flex-col" : ""}`}
            className={`flex ${menuData.find((item) => item.menu === activeMenu)?.sub?.some(subItem => !subItem.src) ? "" : "flex-col"}`}

          onMouseLeave={() => setActiveMenu(null)} >
            {/* // Auto-hide on mouse out */
            console.log(activeMenu)
            }


          {menuData.find((item) => item.menu === activeMenu)?.sub?.map((subItem, subInd) => (
            <div key={subInd} className={`w-fit border-2  bg-orange-500 flex flex-col ${menuData.find((item) => item.menu === activeMenu)?.src ? "block" : " "}`}>
              
                <Link to={`/${subItem.src || ""}`}>{subItem.menu}</Link>
               
              <div className="submenu flex flex-col ">
                {subItem.sub?.map((deepItem, deepInd) => (
                  <Link key={deepInd} to={`/${deepItem.src || ""}`}>
                    {deepItem.menu}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </>
  );
};



export default Navigation;
