import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//components
import { Loader } from "./components/shared";
import { Header } from "./components/layout";

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

const App = () => {
  return (
    <Router>
      {/* header */}
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />

          {/* Logged In User Routes */}
          <Route>
            <Route path="/shipping" element={<Shipping />} />
          </Route>

          {/* admin routes*/}

          <Route
          // element={
          //   <ProtectedRoute isAuthenticated={true} adminRoute={true} isAdmin={true} />
          // }
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
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
