import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useLatestProductsQuery } from "../../../redux/api/productApi";
import { ProductCard } from "../../shared";

const Home = () => {
  const { data, isError, isLoading } = useLatestProductsQuery("");

  const handleAddToCart = (cartItem: any) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    // dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };

  if (isError) toast.error("Cannot Fetch the Products");

  const coverMessage =
    "Fashion isn't just clothes; it's a vibrant language. Silhouettes and textures speak volumes, a conversation starter with every bold print. It's a way to tell our story, a confidence booster, or a playful exploration. From elegance to rebellion, fashion lets us navigate the world in style.".split(
      " "
    );

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
        ) : ( */}
        {
          data?.products.map((i) => (
            <ProductCard
              key={i._id}
              productId={i._id}
              name={i.name}
              price={i.price}
              stock={i.stock}
              handler={handleAddToCart}
              photos={i.photos}
            />
          ))
          // )
        }
        <ProductCard
          productId="123"
          name="name"
          price={123}
          stock={123}
          handler={handleAddToCart}
          photos={[] as any}
        />
      </main>
    </div>
  );
};

export default Home;
