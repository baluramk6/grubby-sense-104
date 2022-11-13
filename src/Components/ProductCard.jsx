import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../Pages/CartItem";
import { loadData, saveData } from "../utils/localStorage";
import { useToast } from '@chakra-ui/react'
const ProductCard = ({ item }) => {
const toast=useToast()
  const cart = loadData("cartitem") || [];
  const cartItemHandle = (item) => {
    const newCart = [...cart, item];
    saveData("cartitem", newCart);
    toast({
      title: `Item Added Successfully`,
      status:'success',
      isClosable: true,
    })
  };

  return (
    <div id={item.id}>
     <Link to={`/women/${item.id}`}> <img
        src={item.image}
        alt="product"
        style={{
          display: "block",
          height: "75%",
          width: "100%",
          margin: "auto",
        }}
      /></Link>
      <p style={{ marginTop: "10px", textAlign: "left", padding: "5px" }}>
        {item.title}
      </p>
      <p style={{ textAlign: "left", padding: "5px", fontWeight: "bold" }}>
        {" "}
        ${item.price}
      </p>
      <div>
        <button
          style={{
            // border: "1px solid red",
            // marginBottom: "20px",
            margin: "auto",
            textAlign: "center",
            padding: "5px 50px",
            color: "white",
            backgroundColor: "rgb(250,166,25)",
            marginLeft: "30px",
          }}
          onClick={() => cartItemHandle(item)}
        >
          ADD TO BASKET
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
