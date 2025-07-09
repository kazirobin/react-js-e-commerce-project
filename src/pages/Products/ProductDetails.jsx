import { useParams, useNavigate } from "react-router-dom";
import productData from "../../store/products-data.json";
import { useState } from "react";
import StarRating from "../../components/Shared/StarRating";

const ProductDetails = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by ID (convert string ID to number)
  const product = productData.find((p) => p.id === parseInt(id));

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="back-button cursor-pointer"
      >
        ← Back to Products
      </button>
      <div className="grid grid-cols-1 md:grid-cols-[30%_42%_28%] bg-white pt-4">
        {/* image div start  */}
        <div className="flex px-3 ">
          <div className=" border flex-1 border-gray-300 rounded-md">
            <img src={product.imageSrc[selectedIndex]} alt="" />
          </div>
          <div className="flex flex-col items-center">
            {product.imageSrc.map((img, index) => (
              <div
                key={index}
                className={`flex items-center justify-center border rounded-md ms-2 mb-2 size-25 cursor-pointer overflow-hidden
            ${
              selectedIndex === index ? "border-green-500" : "border-gray-300"
            }`}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={img}
                  alt=""
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        {/* image div end  */}
        {/* middle section start */}
        <div className="m-2">
          <h1 className="text-2xl font-semibold">{product.fullName}</h1>
          <div className="flex items-center text-gray-500 text-sm">
            <StarRating rating={product.rating} />
            <div>({product.reviews.length} Customer Reviews)</div>
            <hr />
          </div>
        </div>
        {/* middle section end */}
        {/* last section start  */}
        <div className="border m-2">hello</div>
        {/* last section end */}

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
