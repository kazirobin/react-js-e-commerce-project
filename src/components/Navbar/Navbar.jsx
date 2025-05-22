import { Link } from "react-router"
import DarkLogo from "../../../public/images/logo/dark_logo.svg"
import Categories from "../Shared/Categories"
import NavbarIcons from "../Shared/NavbarIcons"

const Navbar = ({handleSidebar}) => {
  return (
    <div className="p-4 flex  w-11/12 m-auto">
        <Link className="w-20 sm:w-35">
        <img src={DarkLogo}/>
        </Link>
        <Categories/>
        <NavbarIcons handleSidebar={handleSidebar}/>
    </div>
  )
}
export default Navbar