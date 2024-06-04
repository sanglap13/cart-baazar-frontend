import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//components
import { Loader } from "./components/shared";

//lazy components
const Home = lazy(() => import("./components/pages/home/Home"));
const Search = lazy(() => import("./components/pages/search/Search"));
const Cart = lazy(() => import("./components/pages/cart/Cart"));

const App = () => {
  return (
    <Router>
      {/* header */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
