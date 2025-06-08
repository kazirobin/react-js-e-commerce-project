import { useState } from "react";
import { Link } from "react-router";
import { TbSquareRoundedMinus, TbSquareRoundedPlus } from "react-icons/tb";

const Menu = ({ items, level = 0 }) => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggle = (key) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-1">
      {items.map((item, index) => {
        const key = `${level}-${index}`;
        const isOpen = openIndexes[key];

        return (
          <div key={key} className={`pl-${level * 4}`}>
            {item.sub ? (
              <>
                <div
                  className="flex justify-between items-center cursor-pointer bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 transition-all"
                  onClick={() => toggle(key)}
                >
                  <span>{item.menu}</span>
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
              <div className="flex items-center group text-sm font-semibold ps-4 py-1  transition-all">
                <div
                  className="w-1 h-1 bg-green-600 rounded-4xl hidden group-hover:block group-focus:block group-active:block transition-all"
                  onTouchStart={(e) => {
                    e.currentTarget.classList.add("block", "transition-all");
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.classList.remove("block");
                  }}
                ></div>
                <Link
                  to={`/${item.src}`}
                  className="block px-2 py-1 text-sm text-gray-800 hover:text-green-600 transition-all"
                  onTouchStart={(e) => {
                    e.currentTarget.classList.add(
                      "text-green-600",
                      " transition-all"
                    );
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.classList.remove("text-green-600");
                  }}
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
