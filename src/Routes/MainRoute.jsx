import React from "react";
import { Routes, Route } from "react-router-dom";
import ManProduct from "../Pages/ManProduct";
import Menpage from "../Pages/Menpage";
import Product from "../Pages/Product";
import SignIn from "../Pages/Signup/SignIn";
import SignUp from "../Pages/Signup/SignUp"
import HomePage from "../Pages/HomePage"
import ProtectedRoute from "../Routes/ProtectedRoute";
import Women from "../Pages/Women";
import CartItem from "../Pages/CartItem";
import SingleProduct from "../Pages/SingleProduct";
import SingleProductw from "../Pages/SingleProduct";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cartitem" element={<CartItem/>}/>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/mens" element={<Menpage/>}/>
      <Route path={'/women'} element={<Women/>}/>
      <Route path="/product" element={<Product />} />
      <Route path="/women/:id" element={<SingleProductw/>}/>
      <Route path="/men/:id" element={<SingleProduct/>}/>
      <Route path="/women-ethnic-wear" element={<Product />} />
      <Route path="/menswear" element={<ManProduct />} />
      <Route path="*" element={<h1>Page not found...</h1>} />
    </Routes>
  );
};

export default MainRoute;
