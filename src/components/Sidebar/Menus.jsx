import { useState } from "react";
import { TbSquareRoundedMinus, TbSquareRoundedPlus } from "react-icons/tb";

const menu = [
    {menu:"Home",
        sub:[
            "Home 01",
            "Home 02",
            "Home 03",
        ]
    },
    {menu:"Pages"},
]

const Menus = () => {
    const [links,setLinks] = useState(false)
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between border cursor-pointer" onClick={() => {setLinks(!links);}}>
        <h6>Home</h6>
        {links ? <TbSquareRoundedPlus /> : <TbSquareRoundedMinus />}
        
      </div>
    </div>
  );
};
export default Menus;
