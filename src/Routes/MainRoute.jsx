import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../Pages/Product";
import SignIn from "../Pages/Signup/SignIn";
import SignUp from "../Pages/Signup/SignUp";


const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default MainRoute;
