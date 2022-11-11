import { NavLink } from "react-router-dom"
import logo from "../img/logo.png"
import styles from "./Navbar.module.css"

export const Navbar=()=>{
    return <div className={styles.nav_main}>
        <div className={styles.nav_first_section_parent}>
            <div className={styles.logo_box}>
                <img src={logo} alt="" />

            </div>
            <div className={`${styles.nav_links}` }>
                <div className={styles.dropdown_box}>
                    <div className={styles.dropdown_box}>
                    <NavLink  className={({ isActive }) =>
                  isActive ? styles.navlink_active:   styles.navlink_default
                } to={"/product"}>Women</NavLink>

                <div className={styles.hover_box}>
                     <div className={styles.efWear}>
                        <div> <NavLink><b>Ethnic & Fusion Wear</b></NavLink></div>
                      div  <div><NavLink >Kurtas & Kurtis</NavLink></div>
                        <div><NavLink >Kurta Sets</NavLink></div>
                        <div> <NavLink>Ethnic Dresses</NavLink></div>
                        <div><NavLink>Tops & Tunics</NavLink></div>
                        <div><NavLink >Leggings & Churidars</NavLink></div>
                        <div> <NavLink >Pants & Palazzos</NavLink></div>
                        <div><NavLink >Skirts</NavLink></div>
                       <div> <NavLink >Dupattas & Stoles</NavLink>
                     </div>
                    </div>
                    
                <div className={styles.Western_Wear}>
                     <div> <NavLink><b>Western Wear</b></NavLink></div>

                        <div><NavLink >Tops & Tees</NavLink></div>

                        <div><NavLink >Dresses & Jumpsuits</NavLink></div>

                        <div><NavLink >Jeans & Jeggings</NavLink></div>

                        <div><NavLink >Shorts & Skirts</NavLink></div>

                        <div><NavLink >Trousers</NavLink></div>

                        <div><NavLink>Jackets & Shrugs</NavLink></div>
                     </div>

                <div className={styles.Sleepwear}>
                     <div> <NavLink><b>Lingerie/Sleepwear</b></NavLink></div>

                    <div><NavLink>Bras</NavLink></div>

                    <div><NavLink>Briefs/Panties</NavLink></div>

                    <div><NavLink>Cami & Slips</NavLink></div>

                    <div><NavLink>Shapewear</NavLink></div>

                    <div><NavLink>Nightwear</NavLink></div>
                </div>

                 <div className={styles.SportsWear}>

                     <div> <NavLink><b>SportsWear</b></NavLink></div>

                    <div><NavLink>Tops & Tees</NavLink></div>

                    <div><NavLink >Sports Bra</NavLink></div>

                    <div><NavLink >Leggings</NavLink></div>

                    <div><NavLink >Joggers & Tracks</NavLink></div>

                    <div><NavLink >Sweatshirts & Jackets</NavLink></div>
                </div>

                <div className={styles.topbrands}>
                     <div> <NavLink ><b>Top Brands</b></NavLink></div>

                    <div><NavLink >Melange</NavLink></div>

                    <div><NavLink >Ginger</NavLink></div>

                    <div><NavLink >Code</NavLink></div>

                    <div><NavLink>Fame Forever</NavLink></div>

                    <div><NavLink >Kappa</NavLink></div>
                    <div><NavLink >Biba</NavLink></div>

                    <div><NavLink >Aurelia</NavLink></div>

                    <div><NavLink >AND</NavLink></div>

                    <div><NavLink >SAllen Solly</NavLink></div>
                    
                </div>

                     <div className={styles.women_category}>
                     <div> <NavLink ><b>Winter wear</b></NavLink></div>
                     <div> <NavLink ><b>Beauty</b></NavLink></div>
                     <div> <NavLink ><b>Footwear/Bags</b></NavLink></div>
                     <div> <NavLink ><b>Watches</b></NavLink></div>
                     <div> <NavLink ><b>Jewellery</b></NavLink></div>
                     <div> <NavLink ><b>Fragrances</b></NavLink></div>
                     </div>
                  </div>
                </div>
                  
                    
                </div>

                <div className={styles.dropdown_box}>
                    <div className={styles.dropdown_box}>
                        <NavLink>Men</NavLink>

                        <div className={styles.hover_box}>
                     <div className={styles.efWear}>
                        <div> <NavLink><b>Topwear</b></NavLink></div>
                        <div><NavLink >Casual Shirts</NavLink></div>
                        <div><NavLink >Formal Shirts</NavLink></div>
                        <div> <NavLink>Polos</NavLink></div>
                        <div><NavLink>T-Shirts</NavLink></div>
                        <div><NavLink >Jackets</NavLink></div>
                        <div> <NavLink >Hoodies & Sweatshirts</NavLink></div>

                     <div>
                        <div> <NavLink><b>Bottomwear</b></NavLink></div>
                        <div><NavLink>Casual Trousers</NavLink></div>
                        <div><NavLink>Formal Trousers</NavLink></div>
                        <div> <NavLink>Jeans</NavLink></div>
                        <div><NavLink>Track Pants</NavLink></div>
                        <div><NavLink>Shorts & 3/4ths</NavLink></div>
                     </div>
                    </div>
                    
                <div className={styles.Western_Wea2r}>
                     <div> <NavLink><b>Activewear</b></NavLink></div>

                        <div><NavLink>Polos</NavLink></div>

                        <div><NavLink>Sports T-Shirts</NavLink></div>

                        <div><NavLink>Track Pants</NavLink></div>

                        <div><NavLink>Sports shoes</NavLink></div>

                       <div>
                        <div> <NavLink><b>Winterwear</b></NavLink></div>

                        <div><NavLink>Hoodies & Sweatshirts</NavLink></div>

                        <div><NavLink>Sweaters & Cardigans</NavLink></div>

                        <div><NavLink>Jackets</NavLink></div>
                       </div>

                       <div>
                        <div> <NavLink><b>Ethnic</b></NavLink></div>

                        <div><NavLink>Kurtas</NavLink></div>

                        <div><NavLink>Waistcoats</NavLink></div>

                        <div><NavLink>Pyjamas</NavLink></div>
                       </div>


                     </div>

                <div className={styles.Sleepwear}>
                     <div> <NavLink><b>Innerwear</b></NavLink></div>

                    <div><NavLink>Boxers</NavLink></div>

                    <div><NavLink>Briefs</NavLink></div>

                    <div><NavLink>Vests</NavLink></div>

                    <div><NavLink>Loungewear</NavLink></div>
                
                  <div>
                   <div> <NavLink><b>Top Brands</b></NavLink></div>

                    <div><NavLink>US Polo</NavLink></div>

                    <div><NavLink>FameForever</NavLink></div>

                    <div><NavLink>CODE</NavLink></div>

                    <div><NavLink>Bossini</NavLink></div>

                    <div><NavLink>Kappa</NavLink></div>

                    <div><NavLink>Celio</NavLink></div>

                    <div><NavLink>United Color of Benetton</NavLink></div>

                    <div><NavLink>Jack & Jones</NavLink></div>
                  </div>

                </div>

                 <div className={styles.SportsWear}>

                     <div> <NavLink><b>Watches</b></NavLink></div>

                    <div><NavLink>Digital watches</NavLink></div>

                    <div><NavLink>Analog watches</NavLink></div>

                    <div><NavLink>Automatic watches</NavLink></div>

                    <div><NavLink>Automatic watches</NavLink></div>

                    <div><NavLink>Chronograph watches</NavLink></div>
                    <div><NavLink>Multi Function watches</NavLink></div>
                    <div><NavLink>Smart watches</NavLink></div>

                    <div>
                        <div> <NavLink><b>Sunglasses</b></NavLink></div>

                        <div><NavLink>Aviator</NavLink></div>

                        <div><NavLink>Wayfarer</NavLink></div>

                        <div><NavLink>Square</NavLink></div>

                        <div><NavLink>Sporty</NavLink></div>

                        <div><NavLink>Rectangle</NavLink></div>
                        <div><NavLink>Round</NavLink></div>
                    </div>
                </div>

                <div className={styles.topbrands}>
                     <div> <NavLink ><b>Shoes</b></NavLink></div>

                    <div><NavLink>Loafers & Moccasin</NavLink></div>

                    <div><NavLink>Slip-Ons</NavLink></div>

                    <div><NavLink>Sports Shoes & Sneakers</NavLink></div>

                    <div><NavLink>Lace up</NavLink></div>

                    <div><NavLink>Slippers and Sliders</NavLink></div>
                    <div><NavLink>Floaters & Sandals</NavLink></div>
                    <div><NavLink>Boots</NavLink></div>


                    <div>
                        <div> <NavLink><b>Grooming</b></NavLink></div>

                        <div><NavLink>Fragrances</NavLink></div>

                        <div><NavLink>Face Wash</NavLink></div>

                        <div><NavLink>Skin care</NavLink></div>

                        <div><NavLink>Hair care</NavLink></div>

                        <div><NavLink>Beard care</NavLink></div>
                        <div><NavLink>Bath & body</NavLink></div>
                    </div>
                    
                </div>

                    <div className={styles.women_category}>
                     <div> <NavLink ><b>Add-ons</b></NavLink></div>
                     <div> <NavLink>Wallets</NavLink></div>
                     <div> <NavLink>Ties</NavLink></div>
                     <div> <NavLink>Belts</NavLink></div>
                     <div> <NavLink>Socks</NavLink></div>
                    
                     </div>
                    </div>
                </div>
                    
                </div>

                <div className={styles.dropdown_box}>
                    <div className={styles.dropdown_box}>
                      <NavLink>Kids</NavLink>
                    <div className={styles.hover_box}>

                     <div className={styles.efWear}>
                        <div> <NavLink><b>Boys</b></NavLink></div>
                        <div><NavLink >T-Shirts/Polos</NavLink></div>
                        <div><NavLink >Shirts</NavLink></div>
                        <div> <NavLink>Jeans</NavLink></div>
                        <div><NavLink>Shorts</NavLink></div>
                        <div><NavLink >Trackpants & Joggers</NavLink></div>
                        <div> <NavLink >Sweatshirts & hoodies</NavLink></div>

                        <div><NavLink>Pants</NavLink></div>
                        <div><NavLink>Clothing Sets</NavLink></div>
                        <div> <NavLink>Jackets & Waistcoat</NavLink></div>
                        <div><NavLink>Innerwear</NavLink></div>
                        <div><NavLink>Ethnic Wear</NavLink></div>
                   
                    </div>
                    
                <div className={styles.Western_Wea2r}>
                     <div> <NavLink><b>Girls</b></NavLink></div>

                        <div><NavLink>Tops & Tees</NavLink></div>

                        <div><NavLink>Dresses/Jumpsuits</NavLink></div>

                        <div><NavLink>Clothing Sets</NavLink></div>

                        <div><NavLink>Jeans</NavLink></div>

                      
                        <div> <NavLink>Knit Bottoms</NavLink></div>

                        <div><NavLink>Innerwear</NavLink></div>

                        <div><NavLink>Shorts & Skirts</NavLink></div>

                        <div><NavLink>TrackPants/Joggers</NavLink></div>
                        <div><NavLink>Ethnic Wear</NavLink></div>

                     </div>

                <div className={styles.Sleepwear}>
                     <div> <NavLink><b>Top Brands</b></NavLink></div>

                    <div><NavLink>Fame forever</NavLink></div>

                    <div><NavLink>Juniors</NavLink></div>

                    <div><NavLink>Melange</NavLink></div>

                    <div><NavLink>Bossini</NavLink></div>
                
                
                   <div> <NavLink>Mini Klub</NavLink></div>

                    <div><NavLink>Allen Solly</NavLink></div>

                    <div><NavLink>United Colors Of Benetton</NavLink></div>

                    <div><NavLink>Lee Cooper Juniors</NavLink></div>

                    <div><NavLink>Pepe Jeans</NavLink></div>

                    <div><NavLink>Peppermint</NavLink></div>

                    <div><NavLink>Gini & Jony</NavLink></div>
               
                </div>

                 <div className={styles.SportsWear}>

                     <div> <NavLink><b>Accessories</b></NavLink></div>

                    <div><NavLink>Face Masks</NavLink></div>

                    <div><NavLink>Hair accessories</NavLink></div>

                    <div><NavLink>Caps & Hats</NavLink></div>

                    <div>
                        <div> <NavLink><b>Price point Store</b></NavLink></div>

                        <div><NavLink>Under 299</NavLink></div>

                        <div><NavLink>Under 399</NavLink></div>

                        <div><NavLink>Under 499</NavLink></div>

                        <div><NavLink>Under 599</NavLink></div>

                        <div><NavLink>Under 699</NavLink></div>
                        <div><NavLink>Under 799</NavLink></div>
                    </div>
                </div>

                <div className={styles.topbrands}>
                     <div> <NavLink><b>Age Store</b></NavLink></div>

                    <div><NavLink>0-2 yrs</NavLink></div>

                    <div><NavLink>2-4 yrs</NavLink></div>

                    <div><NavLink>4-6 yrs</NavLink></div>

                    <div><NavLink>6-10 yrs</NavLink></div>

                    <div><NavLink>10-13 yrs</NavLink></div>
                    <div><NavLink>13-16 yrs</NavLink></div>
                  

                    <div>
                        <div> <NavLink><b>Shop Boys Footwear</b></NavLink></div>
                    </div>
                    <div>
                        <div> <NavLink><b>Shop Girls Footwear</b></NavLink></div>
                    </div>
                    
                </div>

                    <div className={styles.women_category}>
                     <div> <NavLink ><b>Character Shop</b></NavLink></div>
                     <div> <NavLink>Boys Character shop</NavLink></div>
                     <div> <NavLink>Girls character shop</NavLink></div>                   
                     </div>
                    </div>
                </div>
                    
                </div>

                <div>
                    <NavLink>Shoes & Bags</NavLink>
                </div>

                <div>
                    <NavLink>Beauty</NavLink>
                </div>
            </div>
        </div>

        <div className={styles.search_box}>
            <input type="text" placeholder="write something"/>

        </div>

        <div className={styles.nav_signup_cart_box}>
       <div>More</div>
       <div>Signup</div>
       <div>Logo</div>
       <div>Logo</div>
        </div>

    </div>
}