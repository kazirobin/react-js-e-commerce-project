import { useState } from "react";
import { Link } from "react-router"; // Import Link
import menuData from "../../../public/menu-data.json";
import { IoMdArrowDown } from "react-icons/io";

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleActive = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <>
      {/* Main Menu */}
      <div className="flex gap-3">
        {menuData.map((item, index) => (
          <Link
            key={index}
            to={`/${item.src || ""}`}
            onClick={() => handleActive(item.menu)}
            onMouseEnter={() => handleActive(item.menu)} // Hover activates menu
            className="flex items-center"
          >
            {item.menu} {!item.src && <IoMdArrowDown/>}
          </Link>
        ))}
      </div>

      {/* Expanded Submenus - Auto-hide when mouse leaves */}
      {activeMenu && (
        <div
          className="expanded-menu"
          onMouseLeave={() => setActiveMenu(null)} // Auto-hide on mouse out
        >
          {menuData.find((item) => item.menu === activeMenu)?.sub?.map((subItem, subInd) => (
            <div key={subInd}>
              <strong>
                <Link to={`/${subItem.src || ""}`}>{subItem.menu}</Link>
              </strong>
              <div className="submenu">
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
    </>
  );
};



export default Navigation;
