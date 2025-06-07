#  sidebar
- icon cross
- icon cart
- icon compare
- icon wishlist
- icon user
- icon search
- icon logo
# social icon
- facebook
- twitter
- pinterst
- instagram
- tiktok

All Categories(arrow down)
Type Your Products (search)

navigation link

13.05.2025
23/A Mark Street Road, Newyork City
info@zillystore.com
+9888-256-666



### Explain menus
import { useState } from "react";
import { TbSquareRoundedMinus, TbSquareRoundedPlus } from "react-icons/tb";
import { Link } from "react-router"; // Corrected import
const menuItems = [
  { menu: "Home", sub: ["Home 01", "Home 02", "Home 03"] },
  { menu: "Pages", sub: ["Pages 01", "Pages 02", "Pages 03"] },
];
const Menus = () => {
  const [openMenus, setOpenMenus] = useState({});
  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],}));
  };
  return (
    <div className="w-full">
      {menuItems.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleMenu(index)}>
            <h1>{item.menu}</h1>
            {openMenus[index] ? <TbSquareRoundedMinus /> : <TbSquareRoundedPlus />}
          </div>
          {openMenus[index] && (
            <div className="">
              {item.sub.map((subItem, subIndex) => (
                <div key={subIndex}>
                  <Link to={`/${subItem.toLowerCase().replace(/\s/g, "-")}`}>{subItem}</Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menus;
