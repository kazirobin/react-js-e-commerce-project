import { useParams, useNavigate } from "react-router-dom";
import productData from "../../store/products-data.json";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by ID (convert string ID to number)
  const product = productData.find((p) => p.id === parseInt(id));

  return (
    <>
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back to Products
      </button>
      <div className="product-details">
      {/* image div start  */}
      <div className="flex">
      <div className="flex-4/6">
        <img src={product.imageSrc[0]} alt="" />
      </div>
      <div className="flex flex-col items-center flex-2/6">
        {product.imageSrc.map((img,index) => <div key={index}>
          <img src={img} alt="" width="100px" height="200px"/>
        </div>)}
      </div>
      </div>
      {/* image div end  */}

        {/*
      //test data
      {product ? (
        <h2>{product.name}</h2>
        ) : (
          <p>Product not found</p>
          )} */}
      </div>
    </>
  );
};

export default ProductDetails;
