import React from "react";
import { TProductsProps } from "../../../@types/props/product.types";
import { FaExpandAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { transformImage } from "../../../utils/tranformImage";
import { server } from "../../../redux/store";

const ProductCard: React.FC<TProductsProps> = ({
  productId,
  price,
  name,
  photos,
  stock,
  handler,
}) => {
  return (
    <div className="product-card">
      {/* <img src={transformImage(photos?.[0]?.url, 400)} alt={name} /> */}
      <img src={`${server}/${photos}`} alt={name} />

      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button
          onClick={() =>
            handler({
              productId,
              price,
              name,
              photo: photos,
              stock,
              quantity: 1,
            })
          }
        >
          <FaPlus />
        </button>
        <Link to={`/product/${productId}`}>
          <FaExpandAlt />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
