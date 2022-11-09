import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../Pages/Signup/SignIn";
import SignUp from "../Pages/Signup/SignUp";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default MainRoute;
