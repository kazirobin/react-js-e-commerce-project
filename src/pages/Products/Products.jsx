
import products from "../../store/products-data.json";
import ProductCard from "./ProductCard";
const Products = () => {
  return (
    <div className="bg-white">
      <div>
        <h1>featured Products</h1>
        <div className="flex flex-wrap transition-all">
          {/* all products start */}
          {products.map((product, index) => (
            
         <ProductCard product={product} key={index} />


          ))}
          {/* all products end */}
        </div>
      </div>
    </div>
  );
};
export default Products;
