import { IoIosClose } from "react-icons/io"

const SidebarIcons = ({handleSidebar}) => {
  return (
    <div>
        <div className="ml-2 mt-5">

        <div onClick={handleSidebar} className="cursor-pointer rounded bg-white w-6"><IoIosClose/></div>
        </div>
    </div>
  )
}
export default SidebarIcons