import { BsFilterLeft } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router";
import categories from "/src/store/categories-data.json";
import { CiSearch } from "react-icons/ci";

const Categories = () => {
  return (
    <>
      <div className="hidden sm:block relative rounded-full border w-45 h-10 pt-1 ps-2 overflow-hidden hover:overflow-visible">
        <div className="absolute   flex items-baseline">
          <BsFilterLeft className="absolute w-8 h-7 pt-1"/>
          <div className="pt-1 absolute top-0 -left-4">
            {categories.map((category, index) => {
              return (
                <Link to={`category/${category.name}`.toLocaleLowerCase()}
                  key={index}
                  className="first:ps-9 w-50   flex gap-2 hover:not-first:gap-4 hover:text-green-500 duration-300 ps-4 first:mb-2 not-first:bg-white not-first:border-b border-gray-300 not-first:py-2"
                >
                  <img src={category.image} alt="" />
                  <h1 className="">{category.name}</h1>
                </Link>
              );
            })}
          </div>
          <MdKeyboardArrowDown className="w-7 h-7 absolute -right-38 pt-1"/>
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
          Search <CiSearch />
        </button>
      </div>
    </>
  );
};
export default Categories;
