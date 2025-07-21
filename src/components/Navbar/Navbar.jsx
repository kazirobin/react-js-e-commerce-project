import { Link } from "react-router";
import DarkLogo from "/public/images/logo/dark_logo.svg";
import NavbarIcons from './../Shared/NavbarIcons';
import Categories from './../Shared/Categories';

const Navbar = () => {
  return (
    <div className="py-2 flex  w-11/12 m-auto">
      <Link className="w-18 sm:w-35">
        <img src={DarkLogo} />
      </Link>
      <Categories />
      <NavbarIcons />
    </div>
  );
};
export default Navbar;
