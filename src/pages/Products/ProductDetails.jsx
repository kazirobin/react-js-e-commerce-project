import { useParams, useNavigate } from "react-router-dom";
import productData from "../../store/products-data.json";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by ID (convert string ID to number)
  const product = productData.find(p => p.id === parseInt(id));

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back to Products
      </button>
      
      <h2>{product.name}</h2>

      {/*
      //test data
      {product ? (
        <h2>{product.name}</h2>
      ) : (
        <p>Product not found</p>
      )} */}
    </div>
  );
};

export default ProductDetails;