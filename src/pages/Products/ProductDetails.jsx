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
      <div className="grid grid-cols-1 lg:grid-cols-[40%_35%_25%] bg-white pt-4">
        {/* image div start  */}
        <div className="flex px-3 ">
          <div className="h-auto md:border border-gray-300 rounded-md flex-1 flex justify-center">
            <img
              src={product.imageSrc[selectedIndex]}
              alt=""
              className="lg:h-90 border border-gray-300 rounded-md md:border-none"
            />
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
          <div className="my-8 border-b border-gray-400 rounded-full "></div>
          <p>{product.describe.description}</p>
          <ul className="py-2">
            {product.describe.describeTags.map((list, index) => (
              <li key={index} className="list-disc ms-4">
                {list}
              </li>
            ))}
          </ul>
          <div className="my-8 border-b border-gray-400 rounded-full "></div>
          <div className="flex pe-4  text-xs">
            <div className=" w-90 flex flex-col gap-1">
              <p>
                <b>SKU</b>: {product.sku}
              </p>
              <p>
                <b>Category</b>: {product.categories}
              </p>
              <p>
                <b>Tags</b>: {product.tags.join(", ")}
              </p>
              <p>
                <b>MFG</b>: {product.mfg}
              </p>
            </div>
            <div>
              {product.extraInfo.map((info, index) => (
                <div key={index} className="flex gap-2 pb-2 ">
                  <div className="pt-1 w-10">
                    <img src={info.logoSrc} alt="" />
                  </div>
                  <div>{info.info}</div>
                </div>
              ))}
            </div>
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
