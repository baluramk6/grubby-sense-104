import React from "react";
import { Routes, Route } from "react-router-dom";
import ManProduct from "../Pages/ManProduct";
import Product from "../Pages/Product";
import SignIn from "../Pages/Signup/SignIn";
import SignUp from "../Pages/Signup/SignUp";
import SingleProduct from "../Pages/SingleProduct";
import SingleProductw from "../Pages/SingleProductw";
import ProtectedRoute from "../Routes/ProtectedRoute";

const MainRoute = () => {
  return (
    <Routes>
      {/* <Route
        path="/"
        element={
          <ProtectedRoute>
            <h1>Home Page</h1>
          </ProtectedRoute>
        }
      /> */}
      {/* <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} /> */}
      <Route path="/product" element={<Product />} />
      <Route path="/women" element={<Product />} />
      <Route path="/men" element={<ManProduct />} />
      <Route path="/men/:id" element={<SingleProduct />} />
      <Route path="/women/:id" element={<SingleProductw/>} />
      <Route path="*" element={<h1>Page not found...</h1>} />
    </Routes>
  );
};

export default MainRoute;
