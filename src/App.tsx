import { onAuthStateChanged } from "firebase/auth";
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { auth } from "./config/firebase.config";
import { userExist, userNotExist } from "./redux/reducer/userReducer";
import { RootState } from "./redux/store";

//components
import { Header, ProtectedRoutes } from "./components/layout";
import { Loader } from "./components/shared";
import { getUser } from "./redux/api/userApi";

//admin components
const Dashboard = lazy(() => import("./components/pages/admin/dashboard"));
const Products = lazy(() => import("./components/pages/admin/products"));
const Customers = lazy(() => import("./components/pages/admin/customers"));
const Transaction = lazy(() => import("./components/pages/admin/transaction"));
const Barcharts = lazy(
  () => import("./components/pages/admin/charts/barcharts")
);
const Piecharts = lazy(
  () => import("./components/pages/admin/charts/piecharts")
);
const Linecharts = lazy(
  () => import("./components/pages/admin/charts/linecharts")
);
const Coupon = lazy(() => import("./components/pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("./components/pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("./components/pages/admin/apps/toss"));
const NewProduct = lazy(
  () => import("./components/pages/admin/management/newproduct")
);
const ProductManagement = lazy(
  () => import("./components/pages/admin/management/productmanagement")
);
const TransactionManagement = lazy(
  () => import("./components/pages/admin/management/transactionmanagement")
);

//lazy components
const Home = lazy(() => import("./components/pages/home/Home"));
const Search = lazy(() => import("./components/pages/search/Search"));
const Cart = lazy(() => import("./components/pages/cart/Cart"));
const Shipping = lazy(() => import("./components/pages/shipping/Shipping"));
const Login = lazy(() => import("./components/pages/login/Login"));
const Orders = lazy(() => import("./components/pages/orders/Orders"));
const OrderDetails = lazy(
  () => import("./components/pages/orderDetails/OrderDetails")
);
const NotFound = lazy(() => import("./components/pages/notFound/NotFound"));

const App = () => {
  const { user, loading } = useSelector(
    (state: RootState) => state.userReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = await getUser(user.uid);
        dispatch(userExist(data.user));
      } else dispatch(userNotExist());
    });
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Router>
      {/* header */}
      <Header user={user} />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />

          {/* Not logged In */}
          <Route
            path="/login"
            element={
              <ProtectedRoutes isAuthenticated={user ? false : true}>
                <Login />
              </ProtectedRoutes>
            }
          />

          {/* Logged In User Routes */}
          <Route
            element={<ProtectedRoutes isAuthenticated={user ? true : false} />}
          >
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
          </Route>

          {/* admin routes*/}

          <Route
            element={
              <ProtectedRoutes
                isAuthenticated={true}
                adminOnly={true}
                admin={user?.role === "admin" ? true : false}
              />
            }
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            {/* Charts */}
            <Route path="/admin/chart/bar" element={<Barcharts />} />
            <Route path="/admin/chart/pie" element={<Piecharts />} />
            <Route path="/admin/chart/line" element={<Linecharts />} />
            {/* Apps */}
            <Route path="/admin/app/coupon" element={<Coupon />} />
            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
            <Route path="/admin/app/toss" element={<Toss />} />

            {/* Management */}
            <Route path="/admin/product/new" element={<NewProduct />} />

            <Route path="/admin/product/:id" element={<ProductManagement />} />

            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster position="bottom-center" />
    </Router>
  );
};

export default App;
