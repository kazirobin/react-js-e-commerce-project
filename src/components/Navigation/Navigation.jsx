import { Link } from "react-router"; // Ensure correct routing
import menuData from "../../../public/menu-data.json";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuBadgePercent } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";

const Navigation = () => {
  return (
    <div className="hidden lg:flex items-center px-6 pb-2 bg-white shadow-lg h-20">
      {menuData.map((item, index) => (
        <div key={index} className="relative group">
          <Link
            to={`/${item.src || ""}`}
            className="flex items-center mx-3 font-semibold text-gray-700 hover:text-green-500 transition-colors relative"
          >
            {item.menu} {!item.src && <MdKeyboardArrowDown />}
          </Link>

          {/* Dropdown Menu */}
          <div
            className={`absolute left-0 top-full mt-2 p-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${
              item.menu === "Shop" ? "-ml-45 " : "-left-30"
            }
            ${ item.menu === "Contact" ? "w-0 h-0 bg-red-600 hidden -z-50" : "" }
            `}
          >
            <div className={`flex  p-3 bg-white w-fit ${
              item.menu === "Shop" || item.menu === "Elements" ? "flex" : "flex-col"
            }`}>
              {item.sub?.map((subItem, subInd) => (
                <div key={subInd} className="bg-white w-45">
                  <Link 
                    to={`/${subItem.src || ""}`} 
                    className={`block text-gray-600 hover:text-green-500 ${subItem.sub ? "font-bold" : " pb-1"}`}
                  >
                    {subItem.menu}
                  </Link>

                  {/* Nested Submenus */}
                  {subItem.sub && (
                    <div className="mt-1 w-40">
                      {subItem.sub.map((deepItem, deepInd) => (
                        <Link 
                          key={deepInd} 
                          to={`/${deepItem.src || ""}`} 
                          className="block text-gray-500 hover:text-green-600 font-semibold text-sm pt-2"
                        >
                          {deepItem.menu}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
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
