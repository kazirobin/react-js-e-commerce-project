import { Link } from "react-router";
import DarkLogo from "../../../public/images/logo/dark_logo.svg";
import NavbarIcons from "../Shared/NavbarIcons";
import Categories from "../Shared/Categories";

const Navbar = ({ handleSidebar }) => {
  return (
    <div className="py-2 sm:p-4 flex  w-11/12 m-auto z-20">
      <Link className="w-20 sm:w-35">
        <img src={DarkLogo} />
      </Link>
      <Categories />
      <NavbarIcons handleSidebar={handleSidebar} />
    </div>
  );
};
export default Navbar;
