import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useLatestProductsQuery } from "../../../redux/api/productApi";
import { ProductCard } from "../../shared";
import { useDispatch } from "react-redux";
import { Skeleton } from "../../shared/loader/Loader";

const Home = () => {
  const { data, isError, isLoading } = useLatestProductsQuery("");
  console.log(data, "data");

  const dispatch = useDispatch();

  const handleAddToCart = (cartItem: any) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    // dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };

  if (isError) toast.error("Cannot Fetch the Products");

  // const coverMessage =
  //   "Fashion isn't just clothes; it's a vibrant language. Silhouettes and textures speak volumes, a conversation starter with every bold print. It's a way to tell our story, a confidence booster, or a playful exploration. From elegance to rebellion, fashion lets us navigate the world in style.".split(
  //     " "
  //   );

  return (
    <div className="home">
      <section></section>

      {/* <div>
          <aside>
            <h1>Categories</h1>
            <ul>
              {categories.map((i) => (
                <li key={i}>
                  <Link to={`/search?category=${i.toLowerCase()}`}>{i}</Link>
                </li>
              ))}
            </ul>
          </aside>
          <Slider
            autoplay
            autoplayDuration={1500}
            showNav={false}
            images={banners}
          />
        </div> */}

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        {isLoading ? (
          <>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} style={{ height: "25rem" }}>
                <Skeleton width="18.75rem" length={1} height="20rem" />
                <Skeleton width="18.75rem" length={2} height="1.95rem" />
              </div>
            ))}
          </>
        ) : (
          data?.products.map((i) => (
            <ProductCard
              key={i._id}
              productId={i._id}
              name={i.name}
              price={i.price}
              stock={i.stock}
              handler={handleAddToCart}
              photos={i.photo}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Home;
