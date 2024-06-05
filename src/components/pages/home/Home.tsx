import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../../shared";
import toast from "react-hot-toast";

const Home = () => {
  const handleAddToCart = (cartItem: any) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    // dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        {/* {isLoading ? (
          <Skeleton width="80vw" />
        ) : (
          data?.products.map((i) => (
            <ProductCard
              key={i._id}
              productId={i._id}
              name={i.name}
              price={i.price}
              stock={i.stock}
              handler={addToCartHandler}
              photo={i.photo}
            />
          ))
        )} */}
        <ProductCard
          productId="123"
          name="name"
          price={123}
          stock={123}
          handler={() => console.log("clicked")}
          photo="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034"
        />
      </main>
    </div>
  );
};

export default Home;
