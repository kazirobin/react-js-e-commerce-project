import { useState } from "react";
import { TbSquareRoundedMinus, TbSquareRoundedPlus } from "react-icons/tb";
import { Link } from "react-router";

const menu = [
  { menu: "Home", sub: ["Home 01", "Home 02", "Home 03"] },
  { menu: "Pages", sub: ["Pages 01", "Pages 02", "Pages 03"] },
];

const Menus = () => {
  const [links, setLinks] = useState(false);
  console.log(menu.map(items => {items.sub}))
  return (
    <div className="w-full">
      <div className="" onClick={() => {setLinks(!links);}}>
        <div className="">
          <div className="flex justify-between items-center">
            <h6>Home</h6>
          {links ? <TbSquareRoundedPlus /> : <TbSquareRoundedMinus />}
          </div>
          {links
            ? ""
            : menu.map(items => { items.sub.map(item => (item)) })}
        </div>
        <div className="">
          <Link>Home 01</Link>
          <Link>Home 02</Link>
          <Link>Home 03</Link>
        </div>
      </div>
    </div>
  );
};
export default Menus;
