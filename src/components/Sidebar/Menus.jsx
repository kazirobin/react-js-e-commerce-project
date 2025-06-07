import { useState } from "react"
import { TbSquareRoundedMinus, TbSquareRoundedPlus } from "react-icons/tb"
import { Link } from "react-router"

const menuItems=[
  {menu:"Home",sub:[{menu:"Home 1",src:"home-1"},{menu:"Home 2",src:"home-2"}]},
  {menu:"Pages",sub:[{menu:"Pages 1",src:"home-1"},{menu:"Home 2",src:"home-2"}]},
  {menu:"Shop",sub:[{menu:"Shop 1",src:"home-1"},{menu:"Home 2",src:"home-2"}]},
  {menu:"Vendor",sub:[{menu:"Vendor 1",src:"home-1"},{menu:"Home 2",src:"home-2"}]},
  {menu:"Elements",sub:[{menu:"Elements 1",src:"home-1"},{menu:"Home 2",src:"home-2"}]},
  {menu:"Blog",sub:[{menu:"Blog 1",src:"home-1"},{menu:"Home 2",src:"home-2"}]},
  {menu:"Contact",src:"contact"}
]

const Menus = () => {
  const [openMenus,setOpenMenus] = useState({})
  const toggleMenu = (index) => { 
    setOpenMenus((prev) => ({ ...prev,[index]:!prev[index] }))
  }
  
  return (
    <div className="w-full"> 
     {menuItems.map((items,index) =>  (
  <div key={index}>
    {items.sub ? (
      <>
        <div
          className="flex justify-between items-center cursor-pointer text-sm font-semibold ps-1 py-1"
          onClick={() => toggleMenu(index)}
        >
          <h1 className="">{items.menu}</h1>
          {openMenus[index] ? <TbSquareRoundedMinus/> : <TbSquareRoundedPlus/>}
        </div>
        {openMenus[index] && (
          <div className="">
            {items.sub.map((subItem,subItemIndex) => (
              <div className="flex items-center group text-sm font-semibold ps-4 py-1" key={subItemIndex}>
                <div className="w-1 h-1 bg-green-600 rounded-4xl hidden group-hover:block group-focus:block group-active:block transition-all" onTouchStart={(e) => { e.currentTarget.classList.add("block") }} ontouchend={(e) => { e.currentTarget.classList.remove("block") }}></div>
                <Link className="group-hover:ps-1.5 group-focus:ps-1.5 group-active:ps-1.5 transition-all"  onTouchStart={(e) => { e.currentTarget.classList.add("ps-1.5") }} ontouchend={(e) => { e.currentTarget.classList.remove("ps-1.5") }} to={subItem.src}>{subItem.menu}</Link>
              </div>
            ))}
          </div>
        )}
      </>
    ) : (
      // ✅ Show only a direct Link if there's no sub
      <div className="text-sm font-semibold ps-1 py-1">
        <Link to={items.src}>{items.menu}</Link>
      </div>
    )}
  </div>
))}

    </div>
  )
}

export default Menus
