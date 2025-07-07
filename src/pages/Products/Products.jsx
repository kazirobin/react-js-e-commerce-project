import { Link } from 'react-router-dom';
import products from "../../store/products-data.json"
const Products = () => {
  return (
    <div className='bg-white'>
      <div>
        <h1>featured Products</h1>
        <div>
         {products.map((product,index) => <div key={index}>
          <h1 className='font-bold'>

         {product.name}
          </h1>
          <Link to={`/products/${product.id}`}>View</Link>

         </div>)}
        </div>
      </div>

    
    </div>
  )
}
export default Products