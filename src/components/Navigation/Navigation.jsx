import { useState } from "react";
import { Link } from "react-router"; // Import Link
import menuData from "../../../public/menu-data.json";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuBadgePercent } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState("Elements"); // Home

  const handleActive = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <> 
{/* navigation links  */}
    <div>

      {/* Main Menu */}
      <div className="hidden lg:flex px-10 ">
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
        <div className="flex items-center ml-auto ">
{/* side massage  */}
<h1 className="font-semibold flex items-center gap-1"><LuBadgePercent className="text-green-500"/>  Weekly Discount!</h1>
<div class="custom-shape-1 bg-red-600 h-6 w-6 mb-auto border-1 border-red-600"></div>
<div className="flex">
  <div className="bg-red-600 text-white font-semibold p-1 flex items-center-safe">
    <FiPhoneCall className="text-2xl"/>
  </div>
  <div className="bg-red-600 text-white font-semibold p-1">

    <p className="text-xs">Hotline Number</p>
    <h1 className="text-sm">+9888-256-666</h1>
  </div>
</div>
  </div>
      </div>

      {/* Expanded Submenus - Auto-hide when mouse leaves */}
      <div className="bg-red-500">

      {activeMenu && (
        
        <div
          
            // className={`flex  ${menuData.find((item) => item.menu === activeMenu)?.sub.src ? "flex-col" : ""}`}
            className={`flex absolute px-10 ${menuData.find((item) => item.menu === activeMenu)?.sub?.some(subItem => !subItem.src) ? "" : "flex-col"}`}

          onMouseLeave={() => setActiveMenu(null)} >
            {/* // Auto-hide on mouse out */
            console.log(activeMenu)
            }


          {menuData.find((item) => item.menu === activeMenu)?.sub?.map((subItem, subInd) => (
            <div key={subInd} className={`w-fit border-2  bg-orange-500 flex flex-col font-light ${menuData.find((item) => item.menu === activeMenu)?.src ? "block" : " "}`}>
              {/*mx-auto pb-10 gap-2 pt-5 //for elements */}
              
                <Link to={`/${subItem.src || ""}`} className="font-semibold">{subItem.menu}</Link>
               
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
      </div>
    </>
  );
};



export default Navigation;
