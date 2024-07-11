import React from "react";
import { TCartItemProps } from "../../../@types/props/cart.types";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { server } from "../../../redux/store";

const CartItemCard: React.FC<TCartItemProps> = ({
  cartItem,
  incrementHandler,
  decrementHandler,
  removeHandler,
}) => {
  console.log(cartItem);
  const { photo, productId, name, price, quantity } = cartItem;
  return (
    <div className="cart-item">
      <img
        // src={photo}
        src={`${server}/${photo}`}
        alt={name}
      />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>

      <div>
        <button onClick={() => decrementHandler(cartItem)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => incrementHandler(cartItem)}>+</button>
      </div>

      <button onClick={() => removeHandler(productId)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItemCard;
