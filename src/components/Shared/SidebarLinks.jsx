import { MdKeyboardArrowDown } from "react-icons/md"


const SidebarLinks = () => {
  return (
    <div className="flex flex-col h-screen p-10 text-lg">
        <div>
          <div className="flex items-center group">
          All Categories <MdKeyboardArrowDown /> 
          <div className="absolute top-17 bg-white  group-hover:block">

          <div className="flex items-center">Beverage <MdKeyboardArrowDown /> </div>
          <div className="flex items-center">Beverage <MdKeyboardArrowDown /> </div>
          <div className="flex items-center">Beverage <MdKeyboardArrowDown /> </div>
          </div>
          </div> 
        </div>
        <div className="">
    middle
        </div>
        <div className="text-gray-500 mt-auto">
          <p>20.05.2025</p>
          <p>23/A Mark Street Road, Newyork City</p>
          <p>info@zillystore.com</p>
          <p>+9888-256-666</p>
        </div>
    </div>
  )
}
export default SidebarLinks