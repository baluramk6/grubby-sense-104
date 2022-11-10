import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div id={item.id}>
      <img
        src={item.image}
        alt="product"
        style={{
          display: "block",
          height: "75%",
          width: "100%",
          margin: "auto",
        }}
      />
      <p style={{ marginTop: "10px", textAlign: "left", padding: "5px" }}>
        {item.title}
      </p>
      <p style={{ textAlign: "left", padding: "5px", fontWeight: "bold" }}>
        {" "}
        ${item.price}
      </p>
      <div>
        <button style={{border:"1px solid red", marginBottom: "20px" }}>ADD TO BASKET</button>
      </div>
    </div>
  );
};

export default ProductCard;