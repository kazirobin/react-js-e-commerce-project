import { BsFilterLeft } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router";

const Categories = () => {
  return (
    <div className="group p-2">
      <h3 className="flex items-center font-semibold">
        <span className="font-bold text-2xl text-green-600 pr-1">
          <BsFilterLeft />
        </span>
        All Categories
        <span className="font-bold text-2xl text-green-600 pl-1">
          <MdKeyboardArrowDown />
        </span>
      </h3>
      <div className="absolute group-hover:flex flex flex-col ">
        <Link>
        Desert</Link>
        <Link>Desert</Link>
        <Link>Desert</Link>
      </div>
    </div>
  );
};
export default Categories;
