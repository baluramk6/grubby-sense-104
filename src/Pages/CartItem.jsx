import React from "react";
import { loadData } from "../utils/localStorage";
import style from "../Styles/CartItem.module.css";

const CartItem = () => {
  const cart = loadData("cartitem");

  return (
    <>
      {/* {cart.map((e) => {
        return <h1>{e.title}</h1>;
      })} */}
      <div className={style.headingWrapper}>
        <h1>Your Shopping Basket</h1>
      </div>
      <div className={style.container}>
        <div className={style.leftContainer}>
          {cart.map((item) => (
            <div className={style.cardWrapper}>
              <div className={style.subcardWrapper}>
                <div className={style.imageWrapper}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={style.contentWrapper}>
                  <h2>{item.title}</h2>
                  <p>
                    <span>Price: </span>
                    {item.price}
                  </p>
                  <p>
                    <span>Category: </span>
                    {item.category}
                  </p>
                </div>
              </div>
              <div className={style.buttonWrapper}>
                <button>Remove</button>
                <button>Move to favourite</button>
              </div>
            </div>
          ))}
        </div>
        <div className={style.rightContainer}></div>
      </div>
    </>
  );
};

export default CartItem;
