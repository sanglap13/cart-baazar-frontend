import React from "react";
import { TProductsProps } from "../../../@types/product.types";
import { FaPlus } from "react-icons/fa";

const server = "asdasdasd";

const ProductCard: React.FC<TProductsProps> = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}) => {
  return (
    <div className="product-card">
      <img
        src={photo}
        // src={`${server}/${photo}`}
        alt={name}
      />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button
          onClick={
            () => handler()
            // { productId, price, name, photo, stock, quantity: 1 }
          }
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
