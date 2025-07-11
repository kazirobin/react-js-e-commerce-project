import { Link } from "react-router-dom";
import { CiHeart, CiSearch } from "react-icons/ci";
import { MdDone } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import StarRating from "../../components/Shared/StarRating";

const ProductCard = ({ product }) => {
  return (
    <div className="relative p-4 shadow-gray-700 shadow rounded-2xl m-2 flex flex-col items-baseline justify-between flex-wrap max-w-50 text-xs">
      <p>{product.categories[0]}</p>
      <div className="group flex flex-col gap-2 absolute right-4 top-4 transition-all text-3xl">
        <div className="cursor-pointer hover:text-green-500">
          <CiHeart />
        </div>
        <div className="hidden group-hover:block cursor-pointer hover:text-green-500">
          {" "}
          <MdDone />
        </div>
        <div className="hidden group-hover:block cursor-pointer hover:text-green-500">
          <CiSearch />
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Link to={`/products/${product.id}`}>
          {" "}
          <img src={product.imageSrc[0]} alt="" />
        </Link>
      </div>
      <div className="flex gap-3 my-3">
        {product.additionalInfo.weight.map((item, index) => (
          <div key={index} className="border rounded-full px-2 pb-0.5">
            {item}
          </div>
        ))}
      </div>
      <div className="flex items-center font-bold gap-1 flex-wrap">
        ${product.price.minimum}.00
        {product.price.maximum ? (
          <h1>- ${product.price.maximum}.00</h1>
        ) : (
          <h1></h1>
        )}
        <div
          className="text-sm px-3 rounded"
          style={{
            clipPath: "polygon(15% 0%, 100% 0, 100% 100%, 15% 100%, 0% 50%)",
            backgroundColor: "#dc2626",
            color: "white",
            display: "inline-block",
          }}
        >
          -{product.discount}%
        </div>
      </div>
      <Link to={`/products/${product.id}`} className="w-full pt-2">
        <h1 className="font-bold">{product.name}</h1>
      </Link>
      <div className="flex items-center text-gray-400">
        <StarRating rating={product.rating} />
        <div className="ms-2 text-sm">({product.rating}.00)</div>
      </div>

      <Link to={`/products/${product.id}`} className="w-full">
        <div className="flex justify-center gap-1 border rounded-full px-4 py-2 text-xs font-semibold text-green-700 bg-green-100 hover:bg-green-800 hover:text-white ">
          <BsCart2 className="mt-0.5" />
          Select Options
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
