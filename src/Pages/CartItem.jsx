import React from "react";
import { loadData } from "../utils/localStorage";
import style from "../Styles/CartItem.module.css";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const navigate=useNavigate()
  const cart = loadData("cartitem");
  const total = cart.reduce((a, b) => a + Number(b.price), 0) || 0;
  const discount = Math.round((10 * total) / 100);
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
        <div className={style.rightContainer}>
          <div className={style.pincodeWrapper}>
            <label htmlFor="">Deliver to</label>
            <input type="text" placeholder="Enter your pincode" />
            <button>CHECK</button>
          </div>
          <div></div>
          <div className={style.priceWrapper}>
            <div>
              <span>Total MRP</span> <p>₹{total}</p>
            </div>
            <div>
              <span>Offer Discount</span> <p>- ₹{discount}</p>
            </div>
            <div>
              <span>Shipping Charge</span> <p>Free</p>
            </div>
            <div>
              <span>Total</span> <p>₹{total - discount}</p>
            </div>
            <div>
              <button onClick={()=>navigate('/checkout')}>Checkout now</button>
            </div>
            <div>
              <p>
                Shipping charges might vary based on pincode delivery location
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
