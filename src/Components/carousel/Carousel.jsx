import React, { useState } from 'react'
import { useEffect } from 'react';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import { womencarousel_img } from '../../utils/data'
import styles from "./Carousel.module.css";
const Carousel = () => {
    const [data,setData]=useState(0)
    const handleleft_Click=()=>{
        if(data===5){
            setData(0)
        }
        if(data===0){
            setData(5)
        }
        else{
            setData(data-1)
        }
    }
    const handleright_Click=()=>{
        if(data===5){
            setData(5%5)
        }
        else{
            setData(data+1)
        }
    }
    useEffect(()=>{
     const id=setInterval(()=>{
      handleright_Click()
     },3000)
     return ()=> clearInterval(id)
    },[data])
    
  return (
    <div className={styles.Carousel_main}>
    <div className={styles.Carousel_box}>
        <div onClick={handleleft_Click} className={styles.left_btn}><AiOutlineLeft size={30}/></div>
      <div className={styles.slider_box}>
        <img src={womencarousel_img[data]} alt="" />
      </div>
      <div onClick={handleright_Click} className={styles.right_btn}><AiOutlineRight size={30}/></div>
    </div>
    </div>
  )
}

export default Carousel
