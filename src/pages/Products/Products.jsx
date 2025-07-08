import { Link } from 'react-router-dom';
import products from "../../store/products-data.json"
import { CiHeart, CiSearch } from 'react-icons/ci';
import { MdDone } from 'react-icons/md';
const Products = () => {
  return (
    <div className='bg-white'>
      <div>
        <h1>featured Products</h1>
        <div className='grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 transition-all'>
          {/* all products start */}
         {products.map((product,index) => 
         <div key={index} className='relative p-8'>
          <p>{product.categories[0]}</p>
          <div className='group flex flex-col gap-2 absolute right-8 top-8 transition-all'>
            <div className='cursor-pointer'><CiHeart /></div>
            <div className='hidden group-hover:block cursor-pointer'> <MdDone /></div>
            <div className='hidden group-hover:block cursor-pointer'><CiSearch /></div>
          </div>
          <img src={product.imageSrc[0]} alt="" />
          <div className='flex gap-3'>
            {product.additionalInfo.weight.map((item,index) => ( <div key={index} className='border rounded-full px-2'>
              {item}
            </div> ))}
          </div>
         <h1 className='font-bold'>
         {product.name}
          </h1>
          <Link to={`/products/${product.id}`}>View</Link>

         </div>)}
          {/* all products end */}


        </div>
      </div>

    
    </div>
  )
}
export default Products