import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./SingleProduct.module.css";
import {AiFillHeart} from "react-icons/ai"

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  console.log(id);

  const getData = (id) => {
    axios
      .get(`http://6369f83cb10125b78fccd455.mockapi.io/men/${id}`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getData(id);
  }, []);
  return (
    <div>
      <div key={data.id}>
        <h2 style={{ color: "black", marginLeft: "65px", marginTop: "10px" }}>
          {data.title}
        </h2>
        <div className={styles.cont}>
          <div className={styles.avatar}>
            <img
              style={{ width: "400px", width: "400px" }}
              src={data.image}
              alt=""
            />
            <img
              style={{ width: "400px", width: "400px" }}
              src={data.img1}
              alt=""
            />
            <img
              style={{ width: "400px", width: "400px" }}
              src={data.img2}
              alt=""
            />
            <img
              style={{ width: "400px", width: "400px" }}
              src={data.img3}
              alt=""
            />
          </div>
        </div>
        <div className={styles.info}>
          <h2
            style={{
              color: "rgb(242,80,56)",
              fontWeight: "bold",
              fontSize: "25px",
              marginLeft: "35px",
            }}
          >
            Rs.{data.price}
          </h2>
          <p
            style={{
              marginLeft: "120px",
              marginTop: "-28px",
              fontSize: "12px",
            }}
          >
            Inclusive of all taxes
          </p>
          <p
            style={{
              color: "rgb(250,178,59)",
              marginTop: "5px",
              fontSize: "12px",
              marginLeft: "35px",
            }}
          >
            Free shipping on all orders
          </p>
          <button
            style={{
              backgroundColor: "rgb(251,166,24)",
              padding: "10px 40px",
              marginLeft: "35px",
              marginTop: "20px",
              color: "white",
            }}
          >
            ADD TO BASKET
          </button>
          <div
            style={{
              border: "1px solid red",
              height: "30px",
              marginTop: "20px",
              width: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "35px",
              backgroundColor: "rgb(254,244,245)",
              color: "rgb(239,83,80)",
              fontSize: "14px",
            }}
          >
            PROMOTION OFFER
          </div>
          <p
            style={{
              marginLeft: "35px",
              fontWeight: "bold",
              marginTop: "15px",
            }}
          >
            overview
          </p>
          <p style={{width:"70%", marginLeft:"35px",fontSize:"14px"}}>
            Add vibrancy to your look and style this winter in this sweatshirt
            featuring a solid hue, a high neckline, and a ribbed hemline.
          </p>
          <AiFillHeart style={{marginLeft:"30px",marginTop:"10px"}}></AiFillHeart> 
          <p style={{marginLeft:"55px",fontSize:"14px",marginTop:"-20px"}}>  Type : High Neck</p>
          <AiFillHeart style={{marginLeft:"30px",marginTop:"10px"}}></AiFillHeart> 
          <p style={{marginLeft:"55px",fontSize:"14px",marginTop:"-20px"}}>  Design : Solid</p>
          <AiFillHeart style={{marginLeft:"30px",marginTop:"10px"}}></AiFillHeart> 
          <p style={{marginLeft:"55px",fontSize:"14px",marginTop:"-20px"}}>  Sleeve Length : Full Sleeves</p>
          <AiFillHeart style={{marginLeft:"30px",marginTop:"10px"}}></AiFillHeart> 
          <p style={{marginLeft:"55px",fontSize:"14px",marginTop:"-20px"}}>  Fabric : Cotton Blend</p>
          <AiFillHeart style={{marginLeft:"30px",marginTop:"10px"}}></AiFillHeart> 
          <p style={{marginLeft:"55px",fontSize:"14px",marginTop:"-20px"}}>  Care Instructions : Handwash</p>
          <AiFillHeart style={{marginLeft:"30px",marginTop:"10px"}}></AiFillHeart> 
          <p style={{marginLeft:"55px",fontSize:"14px",marginTop:"-20px"}}>  Fit : Regular</p>
          <AiFillHeart style={{marginLeft:"30px",marginTop:"10px"}}></AiFillHeart> 
          <p style={{marginLeft:"55px",fontSize:"14px",marginTop:"-20px"}}>  Model Wears : Size M, has Height 6'0" and Chest 38"</p>
          <AiFillHeart style={{marginLeft:"30px",marginTop:"10px"}}></AiFillHeart> 
          <p style={{marginLeft:"55px",fontSize:"14px",marginTop:"-20px"}}>  Hemline : Ribbed</p>
          <AiFillHeart style={{marginLeft:"30px",marginTop:"10px"}}></AiFillHeart> 
          <p style={{marginLeft:"55px",fontSize:"14px",marginTop:"-20px"}}>  Occasion : Fashion</p>
          <AiFillHeart style={{marginLeft:"30px",marginTop:"10px"}}></AiFillHeart> 
          <p style={{marginLeft:"55px",fontSize:"14px",marginTop:"-20px"}}>  Product : Sweatshirt</p>
          <AiFillHeart style={{marginLeft:"30px",marginTop:"10px"}}></AiFillHeart> 
          <p style={{marginLeft:"55px",fontSize:"14px",marginTop:"-20px"}}>  Country of Origin : India</p>
          
        </div>
      </div>
      <div style={{marginLeft:"40px",marginTop:"-260px"}}>
        <h1 style={{marginBottom:"10px",fontWeight:"bold"}}>Recently Viewed Products</h1>
        <div>
          <img
            src="https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010627472-Blue-Blue-1000010627472_01-2100.jpg"
            alt=""
          />
          <p style={{fontWeight:"bold",marginTop:"10px"}}>Rs. 1500</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
