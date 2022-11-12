import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ManProduct from "../Pages/ManProduct";
import Product from "../Pages/Product";
import SignIn from "../Pages/Signup/SignIn";
import SignUp from "../Pages/Signup/SignUp";
import Women from "../Pages/Women";
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
      <Route path="/" element={<HomePage/>}/>
      {/* <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} /> */}
      <Route path={'/women'} element={<Women/>}/>
      <Route path="/product" element={<Product />} />
      <Route path="/women-ethnic-wear" element={<Product />} />
      <Route path="/men" element={<ManProduct />} />
      <Route path="*" element={<h1>Page not found...</h1>} />
    </Routes>
  );
};

export default MainRoute;
