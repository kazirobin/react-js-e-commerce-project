import { Link, useParams } from "react-router-dom"
import products from "/src/store/products-data.json"
import ProductCard from "./ProductCard";
const ProductCategory = () => {
 const {category} = useParams()
 const filtered = category.toLowerCase() === "all categories"
  ? products
  : products.filter(p =>
      p.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
    );


 console.log(filtered)
  return (
    <div> 
     <div className="bg-white px-2 sm:px-4">
      <div>
        <Link to="/">Back to Home</Link>
        <h1 className="font-bold text-2xl p-2"> {category
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")}{" "} Products</h1>
        <div className="grid sm:grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] transition-all">
          {/* all products start */}
          {filtered.slice(0,6).map((product, index) => (
            
         <ProductCard product={product} key={index} />


          ))}
          {/* all products end */}
        </div>
      </div>
    </div>
    </div>
  )
}
export default ProductCategory