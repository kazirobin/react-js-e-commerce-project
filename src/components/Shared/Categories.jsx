import { BsFilterLeft } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router";
import data from "/src/assets/image-data.json";
import { CiSearch } from "react-icons/ci";

const Categories = () => {
  return (
    <>
      <div className="group p-2 hidden lg:block">
        <h3 className="flex items-center font-semibold rounded-full border border-gray-300 py-2 px-3">
          <span className="font-bold text-2xl text-green-600 pr-1 ">
            <BsFilterLeft />
          </span>
          All Categories
          <span className="font-bold text-2xl text-green-600 pl-1">
            <MdKeyboardArrowDown />
          </span>
        </h3>
        <div className="absolute hidden bg-white group-hover:block  font-semibold w-61">
          <Link className="flex gap-3  transition-all hover:gap-5 hover:text-green-600 border-b-1 border-gray-300 ps-4 pe-20 py-2">
            <img src={data[0].CategoriesSvgIcons.beverage} /> Beverage
          </Link>
          <Link className="flex gap-3 transition-all hover:gap-5 hover:text-green-600 border-b-1 border-gray-300 ps-4 pe-20 py-2">
            <img src={data[0].CategoriesSvgIcons.desserts} /> Desserts
          </Link>
          <Link className="flex gap-3 transition-all hover:gap-5 hover:text-green-600 border-b-1 border-gray-300 ps-4 pe-20 py-2">
            <img src={data[0].CategoriesSvgIcons.drinks_juice} /> Drinks & Juice
          </Link>
          <Link className="flex gap-3 transition-all hover:gap-5 hover:text-green-600 border-b-1 border-gray-300 ps-4 pe-20 py-2">
            <img src={data[0].CategoriesSvgIcons.fish_meats} /> Fish & Meat
          </Link>
          <Link className="flex gap-3 transition-all hover:gap-5 hover:text-green-600 border-b-1 border-gray-300 ps-4 pe-20 py-2">
            <img src={data[0].CategoriesSvgIcons.fresh_fruits} /> Fresh Fruits
          </Link>
          <Link className="flex gap-3 transition-all hover:gap-5 hover:text-green-600 border-b-1 border-gray-300 ps-4 pe-20 py-2">
            <img src={data[0].CategoriesSvgIcons.toys} /> Pets & Animals
          </Link>
          <Link className="flex gap-3 transition-all hover:gap-5 hover:text-green-600 border-b-1 border-gray-300 ps-4 pe-20 py-2">
            <img src={data[0].CategoriesSvgIcons.toys} />
            Toys
          </Link>
          <Link className="flex gap-3 transition-all hover:gap-5 hover:text-green-600 border-b-1 border-gray-300 ps-4 pe-20 py-2">
            <img src={data[0].CategoriesSvgIcons.vegetables} /> Vegetable
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex content-between border border-gray-300 rounded-full h-10 m-auto w-5/12  ps-6">
        <input
          type="text"
          name=""
          id=""
          className="focus:outline-none"
          placeholder="Type Your Products ..."
        />
        <button className="flex ml-auto items-center gap-2 cursor-pointer bg-amber-400 transition-all hover:bg-green-600 hover:text-white p-2 ps-6 overflow-hidden rounded-r-full font-semibold">
          Search <CiSearch  />
        </button>
      </div>
    </>
  );
};
export default Categories;
