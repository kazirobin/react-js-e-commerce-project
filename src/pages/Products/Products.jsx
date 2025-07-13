
import products from "../../store/products-data.json";
import ProductCard from "./ProductCard";
const Products = () => {
  return (
    <div className="bg-white px-2 sm:px-4">
      <div>
        <h1 className="font-bold text-2xl p-2">Featured Products</h1>
        <div className="grid sm:grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] transition-all">
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
