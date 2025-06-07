import { useState } from "react"
import { TbSquareRoundedMinus, TbSquareRoundedPlus } from "react-icons/tb"
import { Link } from "react-router"

const menuItems=[
  {menu:"Home",sub:[{menu:"Home 1",src:"home-1"},{menu:"Home 2",src:"home-2"}]},
  {menu:"Pages",sub:[{menu:"Pages 1",src:"pages-1"},{menu:"Pages 2",src:"pages-2"}]}
]
const Menus = () => {
  const [openMenus,setOpenMenus] = useState({})
  const toggleMenu = (index) => { 
    setOpenMenus((prev) => ({ ...prev,[index]:!prev[index] }))
   }
  return (
    <div className="w-full"> 
  {menuItems.map((items,index) =>  (<div key={index}>
    <div className="flex justify-between items-center cursor-pointer" onClick={() => { toggleMenu(index) }}>
    <h1>{items.menu }</h1>
    {openMenus[index] ? <TbSquareRoundedMinus/> : <TbSquareRoundedPlus/>}
    </div>
    {openMenus[index] && (<div className="">
      {items.sub.map((subItem,subItemIndex) => (<div key={subItemIndex}>
        <Link to={subItem.src}>{subItem.menu}</Link>
      </div>))}
    </div>)}
  </div>) )}
    </div>
  )
}
export default Menus