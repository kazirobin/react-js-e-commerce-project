import { Link } from "react-router"
import DarkLogo from "../../../public/images/logo/dark_logo.svg"
import Categories from "../Shared/Categories"
import NavbarIcons from "../Shared/NavbarIcons"

const Navbar = () => {
  return (
    <div className="p-4 flex items-center w-11/12 m-auto">
        <Link>
        <img src={DarkLogo}/>
        </Link>
        <Categories/>
        <NavbarIcons/>
    </div>
  )
}
export default Navbar