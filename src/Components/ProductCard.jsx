import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div id={item.id} className="productCard" >
      <img src={item.avatar} />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <div>
        <button>ADD TO BASKET</button>
      </div>
    </div>
  );
};

export default ProductCard;
