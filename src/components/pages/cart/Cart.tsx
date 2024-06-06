import React, { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { CartItemCard } from "../../shared";
import { TCartItem } from "../../../@types/props/cart.types";

const cartItems = [
  {
    productId: "123",
    name: "name",
    price: 123,
    stock: 123,
    quantity: 1,
    photo:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034",
  },
  {
    productId: "123",
    name: "name",
    price: 123,
    stock: 123,
    quantity: 1,
    photo:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034",
  },
  {
    productId: "123",
    name: "name",
    price: 123,
    stock: 123,
    quantity: 1,
    photo:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034",
  },
];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 40;
const discount = 200;
const total = subTotal + tax + shippingCharges - discount;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  const incrementHandler = (cartItem: TCartItem) => {
    // if (cartItem.quantity >= cartItem.stock) return;
    // dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
  };
  const decrementHandler = (cartItem: TCartItem) => {
    // if (cartItem.quantity <= 1) return;
    // dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity - 1 }));
  };
  const removeHandler = (productId: string) => {
    // dispatch(removeCartItem(productId));
  };

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCouponCode(true);
      } else {
        setIsValidCouponCode(false);
      }
      // axios
      //   .get(`${server}/api/v1/payment/discount?coupon=${couponCode}`, {
      //     cancelToken,
      //   })
      //   .then((res) => {
      //     dispatch(discountApplied(res.data.discount));
      //     setIsValidCouponCode(true);
      //     dispatch(calculatePrice());
      //   })
      //   .catch(() => {
      //     dispatch(discountApplied(0));
      //     setIsValidCouponCode(false);
      //     dispatch(calculatePrice());
      // });
    }, 1000);

    return () => {
      clearTimeout(timeOutID);
      setIsValidCouponCode(false);
      // cancel();
    };
  }, [couponCode]);
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item: TCartItem, index: number) => (
            <CartItemCard
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
              removeHandler={removeHandler}
              key={index}
              cartItem={item}
            />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹{subTotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>

        <input
          type="text"
          placeholder="Enter your Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the
              <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
