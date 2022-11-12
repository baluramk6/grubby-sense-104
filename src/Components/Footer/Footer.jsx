import React from "react";
import styles from "./footer.module.css";
import logo from"./Imgfooter/logo.png"
import apple from "./Imgfooter/apple.png"
import google from "./Imgfooter/google.png"
import { FaFacebookF} from "react-icons/fa";
import {ImTwitter} from "react-icons/im";
import {AiFillInstagram} from "react-icons/ai"
export const Footer = () => {
  return (
    <>
      <div className={`${styles.border_top} ${styles.margin_t}`}></div>
      <div className={styles.main}>
        <div className={`${styles.top_div} ${styles.flex}`}>
          <div className={`${styles.align_item} ${styles.text_justify} ${styles. width_60}`}>
            <h4 className="">Subscribe to our awesome emails.</h4>
            <p>Get our latest offers and news straight in your inbox.</p>
            <input
              className={`${styles.email} ${styles.border_none}`}
              type="email"
              placeholder="Please enter an email address"
            />
            <button className={styles.button}>Subscribe</button>
          </div>
          <div className={`${styles.text_justify} ${styles.flex} ${styles.column} ${styles.width_40}`}>
            <h4 className="">Download App</h4>
            <p className="mt-10">Shop our products and offers on-the-go</p>
            <div className="">
              <img
                style={{ marginRight: "30px" }}
                width="160px"
                height="50px"
                src={apple}
                alt="apple store"
              />
              <img
                width="160px"
                height="50px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="google store"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.border_top} ${styles.top_div} ${styles.margin_t}`}></div>
        <div className={`${styles.middlediv} ${styles.flex} ${styles.mt_10} ${styles.margin_t}`}>
          <div className="">
            <h6 className={`${styles.fs_16} ${styles.black} ${styles.margin}`}>Women</h6>
            <p className={`${styles.footer_p} ${styles.margin}`}>Tops</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Ethnicwear</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Bottoms</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Dresses & Jumpsuits</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Winterwear</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Lingerie</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Nightwear</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Sportswear</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Beauty</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Watches & Sunglasses</p>
          </div>
          <div className="">
            <h6 className={`${styles.fs_16} ${styles.black} ${styles.margin}`}>Men</h6>
            <p className={`${styles.footer_p} ${styles.margin}`}>Top</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Bottoms</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Ethnicwear</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Winterwear </p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Sportswear</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Innerwear</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Grooming</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Watches</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Sunglasses</p>
          </div>
          <div className="">
            <h6 className={`${styles.fs_16} ${styles.black} ${styles.margin}`}>Kids</h6>
            <p className={`${styles.footer_p} ${styles.margin}`} >Girls Clothing</p>
            <p className={`${styles.footer_p} ${styles.margin}`} >Boys Clothing</p>
            <p className={`${styles.footer_p} ${styles.margin}`} >Infants Girls</p>
            <p className={`${styles.footer_p} ${styles.margin}`} >Infants Boys</p>
            <p className={`${styles.footer_p} ${styles.margin}`} >Winterwear</p>
            <p className={`${styles.footer_p} ${styles.margin}`} >Add ons</p>
            <p className={`${styles.footer_p} ${styles.margin}`} >The Teen Shop</p>
          </div>
          <div className="">
            <h6 className={`${styles.fs_16} ${styles.black} ${styles.margin}`}>Shoes & Bags</h6>
            <p className={`${styles.footer_p} ${styles.margin}`} >Women</p>
            <p className={`${styles.footer_p} ${styles.margin}`} >Men</p>
            <p className={`${styles.footer_p} ${styles.margin}`} >Boys</p>
            <p className={`${styles.footer_p} ${styles.margin}`} >Girls</p>
            <p className={`${styles.footer_p} ${styles.margin}`} >Women Accessories</p>
            <p className={`${styles.footer_p} ${styles.margin}`} >Men Accessories</p>
            <p className={`${styles.footer_p} ${styles.margin}`} >Essential</p>
          </div>
          <div className="">
            <h6 className={`${styles.fs_16} ${styles.black} ${styles.margin}`}>Beauty</h6>
            <p className={`${styles.footer_p} ${styles.margin}`}>Makeup Eyes</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Makeup face</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Makeup Lips</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Makeup Nails</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Perfumes</p>
          </div>

          <div className="">
            <h6 className={`${styles.fs_16} ${styles.black} ${styles.margin}`}>Explore</h6>
            <p className={`${styles.footer_p} ${styles.margin}`}>Online Offers</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Store Offers</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Online Gift Card</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Store Gift Card</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Stores Nearby</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>EDGE Membership</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Shop on WhatsApp</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Fashion VLOG</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Join CIRCLEMAG</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>SBI Offers</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Homecentre</p>
          </div>
          <div className="">
            <h6 className={`${styles.fs_16} ${styles.black} ${styles.margin}`}>About</h6>
            <p className={`${styles.footer_p} ${styles.margin}`}>About us</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Careers</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Take a Tour</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Blog</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Store Locator</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Landmark Cares</p>
          </div>
          <div className="">
            <h6 className={`${styles.fs_16} ${styles.black} ${styles.margin}`}>Help</h6>
            <p className={`${styles.footer_p} ${styles.margin}`}>Contact us</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Shipping</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Returns Process</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Returns Policy</p>
            <p className={`${styles.footer_p} ${styles.margin}`}>Help Centre</p>
          </div>
        </div>
        <div className={styles.flex}
        style={{ width: "80%" }}>
          <div className={`${styles.flex_70} ${styles.flex} ${styles.justify_bet}`}>
            <div className={`${styles.contact} ${styles.flex}`}>
          
              <div className={styles.text_justify}>
                <div className={styles.p_color}>Talk to us</div>
                <div>1800-123-1555</div>
              </div>
            </div>
            <div className={`${styles.contact} ${styles.flex}`}>
             
              <div className={styles.text_justify}>
                <div className={styles.p_color}>Helpcenter</div>
                <div>Help.fashionlife.com</div>
              </div>
            </div>
            <div className={`${styles.contact} ${styles.flex}`}>
          
              <div className={styles.text_justify}>
                <div className={styles.p_color}>Write to us</div>
                <div>Help@fashionlife.com</div>
              </div>
            </div>
          </div>
          <div className={`${styles.flex_30} ${styles.flex} ${styles.flex_flow}`}>
            <div className={`${styles.border} ${styles.contact_i} ${styles.border_none}`}>
              <AiFillInstagram/>
            </div>
            <div className={`${styles.border} ${styles.contact_i} ${styles.border_none}`}>
              <ImTwitter/>
            </div>
            <div className={`${styles.border} ${styles.contact_i} ${styles.border_none}`}>
            <FaFacebookF/>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "8%" }} className={styles.flex}>
          <div>
            <img height="50px" width="150px" src={logo} alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};
