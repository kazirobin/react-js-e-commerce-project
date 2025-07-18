import { useState } from "react";
import { Link } from "react-router-dom";
import { TbSquareRoundedMinus, TbSquareRoundedPlus } from "react-icons/tb";

const Menu = ({ items, level = 0 ,handleSidebar}) => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggle = (key) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-1 *:transition-all">
      {items.map((item, index) => {
        const key = `${level}-${index}`;
        const isOpen = openIndexes[key];

        return (
          <div key={key} className={`pl-${level * 4} transition-all`}>
            {item.sub ? (
              <>
                <div
                  className="flex justify-between items-center cursor-pointer px-2 py-1 rounded transition-all"
                  onClick={() => toggle(key)}
                >
                  <span className="group flex items-center transition-all text-sm text-gray-800 hover:text-green-600 font-bold">
                     <div
                  className="w-1 h-1 mr-2 bg-green-600 rounded-4xl hidden group-hover:block group-focus:block group-active:block transition-all"
                  onTouchStart={(e) => {
                    e.currentTarget.classList.add("block", " transition-all");
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.classList.remove("block");
                  }}
                ></div>
                    {item.menu}</span>
                  {isOpen ? (
                    <TbSquareRoundedMinus className="text-lg" />
                  ) : (
                    <TbSquareRoundedPlus className="text-lg" />
                  )}
                </div>

                {isOpen && (
                  <div className="pl-4 mt-1">
                    <Menu items={item.sub} level={level + 1} />
                  </div>
                )}
              </>
            ) : item.src ? (
              <div className="flex items-center group text-sm font-semibold  py-1  transition-all">
                <div
                  className="w-1 h-1 bg-green-600 rounded-4xl hidden group-hover:block group-focus:block group-active:block transition-all"
                  onTouchStart={(e) => {
                    e.currentTarget.classList.add("block", " transition-all");
                    // handleOpen()
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.classList.remove("block");
                  }}
                ></div>
                <Link
                  onClick={() => { }}
                  to={`/${item.src}`}
                  className="block px-2 py-1 text-sm text-gray-800 hover:text-green-600 transition-all"
                 
                >
                  {item.menu}
                </Link>
              </div>
            ) : (
              <span className="block px-2 py-1 text-sm text-gray-500">
                {item.menu}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
