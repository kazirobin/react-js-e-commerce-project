import { useState } from "react";
import { Link } from "react-router"; // Corrected import for Link
import menuData from "../../../public/menu-data.json";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuBadgePercent } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleActive = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className="hidden lg:flex items-center px-10 py-4 bg-white shadow-lg">
      {menuData.map((item, index) => (
        <div key={index} className="relative group">
          <Link
            to={`/${item.src || ""}`}
            onMouseEnter={() => handleActive(item.menu)}
            className="flex items-center mx-3 font-semibold hover:text-green-500 transition-colors relative"
          >
            {item.menu} {!item.src && <MdKeyboardArrowDown />}
          </Link>

          {/* Dropdown Menu */}
          {activeMenu === item.menu && (
            <div
              className={`absolute left-0 top-full mt-2 bg-white  rounded-lg p-4 z-50 ${
                item.menu === "Shop" ? "-ml-40 max-w-screen " : "-left-40"
              }  ${
                item.menu === "Contact" ? "w-0 h-0 bg-red-600 hidden -z-50" : ""
              }`}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className={`flex w-30 ${
                item.menu === "Shop" || item.menu === "Elements" ? "flex" : "flex-col"
              }`}>
                
              {item.sub?.map((subItem, subInd) => (
                <div key={subInd} className="bg-white">
                  <Link to={`/${subItem.src || ""}`} className={`block  hover:text-green-500 ${subItem.sub ? "font-bold" : " pb-1"}`}>
                    {subItem.menu}
                  </Link>

                  {/* Nested Submenus */}
                  {subItem.sub && (
                    <div className=" mt-1  w-40">
                      {subItem.sub.map((deepItem, deepInd) => (
                        <Link key={deepInd} to={`/${deepItem.src || ""}`} className="block font-semibold text-sm pt-2 hover:text-green-600">
                          {deepItem.menu}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Right Side Items */}
      <div className="flex items-center ml-auto space-x-4">
        <h1 className="font-semibold flex items-center gap-2 text-gray-800">
          <LuBadgePercent className="text-green-500 text-lg" /> Weekly Discount!
        </h1>
        <div className="flex bg-red-600 text-white rounded-lg overflow-hidden">
          <div className="p-2 flex items-center">
            <FiPhoneCall className="text-2xl" />
          </div>
          <div className="p-2 text-sm">
            <p>Hotline Number</p>
            <h1 className="text-md font-semibold">+9888-256-666</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
