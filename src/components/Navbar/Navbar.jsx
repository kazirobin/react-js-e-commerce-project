import { Link } from "react-router"
import DarkLogo from "../../../public/images/logo/dark_logo.svg"
import Categories from "../Shared/Categories"

const Navbar = () => {
  return (
    <div className="p-4 flex items-center">
        <Link>
        <img src={DarkLogo}/>
        </Link>
        <Categories/>
    </div>
  )
}
export default Navbar