import { Link } from "react-router-dom";
import products from "../../store/products-data.json";
import { CiHeart, CiSearch } from "react-icons/ci";
import { MdDone } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
const Products = () => {
  return (
    <div className="bg-white">
      <div>
        <h1>featured Products</h1>
        <div className="grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 transition-all">
          {/* all products start */}
          {products.map((product, index) => (
            <div key={index} className="relative p-8 border m-2 flex flex-col items-baseline justify-between">
              <p>{product.categories[0]}</p>
              <div className="group flex flex-col gap-2 absolute right-8 top-8 transition-all text-3xl">
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
            <div className="flex justify-center">
               <Link to={`/products/${product.id}`}> <img src={product.imageSrc[0]} alt="" /></Link>
            </div>
              <div className="flex gap-3">
                {product.additionalInfo.weight.map((item, index) => (
                  <div key={index} className="border rounded-full px-2">
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex font-bold gap-1">
                ${product.price.minimum}.00
                {product.price.maximum ? (
                  <h1>- ${product.price.maximum}.00</h1>
                ) : (
                  <h1></h1>
                )}
              </div>
              <div className="text-sm px-3 rounded"
                style={{
                  clipPath:
                    "polygon(15% 0%, 100% 0, 100% 100%, 15% 100%, 0% 50%)",
                  backgroundColor: "#dc2626",
                  color: "white",
                  display: "inline-block",
                }}
              >
                -{product.discount}%
              </div>
              <h1 className="font-bold">{product.name}</h1>
              <Link to={`/products/${product.id}`}>
             <div className="flex justify-center gap-1 border rounded-2xl px-4 py-1 hover:bg-green-400 hover:text-white mt-auto"> <BsCart2 className="mt-0.5"/>
              Select Options
              </div>
             </Link>
            </div>
          ))}
          {/* all products end */}
        </div>
      </div>
    </div>
  );
};
export default Products;
