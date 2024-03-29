import React from 'react'
import styles from './Flexbox.module.css'

const Flexbox= ({heading,data,data2}) => {
  return (
    <div className={styles.flexbox_cont}>
      <h1>{heading}</h1>
      <div className={styles.img_box_cont}>
        {data?.map((el)=> <div>
          <img src={el.src} alt="img" />
          {el.text&&<h2 className={styles.h2}>{el.text}</h2>}
        </div>)}
      </div>

      {data2&&<div className={styles.img_box_cont}>
        {data2?.map((el)=> <div>
          <img src={el.src} alt="img" />
          {el.text&&<h2 className={styles.h2}>{el.text}</h2>}
        </div>)}
      </div>}
    </div>
  )
}

export default Flexbox
