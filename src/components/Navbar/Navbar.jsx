import { Link } from "react-router"
import DarkLogo from "../../../public/images/logo/dark_logo.svg"

const Navbar = () => {
  return (
    <div className="p-4">
        <Link>
        <img src={DarkLogo}/>
        </Link>
        
    </div>
  )
}
export default Navbar