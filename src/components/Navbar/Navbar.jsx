import { Link } from "react-router";
import DarkLogo from "/src/assets/images/logo/dark_logo.svg";
import NavbarIcons from "../Shared/NavbarIcons";
import Categories from "../Shared/Categories";

const Navbar = ({ handleSidebar }) => {
  return (
    <div className="py-4 flex  w-11/12 m-auto">
      <Link className="w-27 sm:w-35">
        <img src={DarkLogo} />
      </Link>
      <Categories />
      <NavbarIcons handleSidebar={handleSidebar} />
    </div>
  );
};
export default Navbar;
