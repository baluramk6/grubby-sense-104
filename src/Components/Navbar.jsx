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
                     <div className={styles.option_box}>
                        <div> <NavLink className={styles.option_heading}>Ethnic & Fusion Wear</NavLink></div>
                       <div><NavLink className={styles.option}>Kurtas & Kurtis</NavLink></div>
                        <div><NavLink className={styles.option}>Kurta Sets</NavLink></div>
                        <div> <NavLink className={styles.option}>Ethnic Dresses</NavLink></div>
                        <div><NavLink className={styles.option}>Tops & Tunics</NavLink></div>
                        <div><NavLink className={styles.option}>Leggings & Churidars</NavLink></div>
                        <div> <NavLink className={styles.option}>Pants & Palazzos</NavLink></div>
                        <div><NavLink className={styles.option}>Skirts</NavLink></div>
                       <div> <NavLink className={styles.option}>Dupattas & Stoles</NavLink>
                     </div>
                    </div>
                    
                <div className={styles.option_box}>
                     <div> <NavLink className={styles.option_heading}>Western Wear</NavLink></div>

                        <div><NavLink className={styles.option}>Tops & Tees</NavLink></div>

                        <div><NavLink className={styles.option}>Dresses & Jumpsuits</NavLink></div>

                        <div><NavLink className={styles.option}>Jeans & Jeggings</NavLink></div>

                        <div><NavLink className={styles.option}>Shorts & Skirts</NavLink></div>

                        <div><NavLink className={styles.option}>Trousers</NavLink></div>

                        <div><NavLink className={styles.option}>Jackets & Shrugs</NavLink></div>
                     </div>

                <div className={styles.option_box}>
                     <div> <NavLink className={styles.option_heading}>Lingerie/Sleepwear</NavLink></div>

                    <div><NavLink className={styles.option}>Bras</NavLink></div>

                    <div><NavLink className={styles.option}>Briefs/Panties</NavLink></div>

                    <div><NavLink className={styles.option}>Cami & Slips</NavLink></div>

                    <div><NavLink className={styles.option}>Shapewear</NavLink></div>

                    <div><NavLink className={styles.option}>Nightwear</NavLink></div>
                </div>

                 <div className={styles.option_box}>

                     <div> <NavLink className={styles.option_heading}>SportsWear</NavLink></div>

                    <div><NavLink className={styles.option}>Tops & Tees</NavLink></div>

                    <div><NavLink className={styles.option}>Sports Bra</NavLink></div>

                    <div><NavLink className={styles.option}>Leggings</NavLink></div>

                    <div><NavLink className={styles.option}>Joggers & Tracks</NavLink></div>

                    <div><NavLink className={styles.option}>Sweatshirts & Jackets</NavLink></div>
                </div>

                <div className={styles.option_box}>
                     <div> <NavLink className={styles.option_heading}>Top Brands</NavLink></div>

                    <div><NavLink className={styles.option}>Melange</NavLink></div>

                    <div><NavLink className={styles.option}>Ginger</NavLink></div>

                    <div><NavLink className={styles.option}>Code</NavLink></div>

                    <div><NavLink className={styles.option}>Fame Forever</NavLink></div>

                    <div><NavLink className={styles.option}>Kappa</NavLink></div>
                    <div><NavLink className={styles.option}>Biba</NavLink></div>

                    <div><NavLink className={styles.option}>Aurelia</NavLink></div>

                    <div><NavLink className={styles.option}>AND</NavLink></div>

                    <div><NavLink className={styles.option}>SAllen Solly</NavLink></div>
                    
                </div>

                     <div className={styles.women_category}>
                     <div> <NavLink className={styles.option_heading}>Winter wear</NavLink></div>
                     <div> <NavLink className={styles.option_heading}>Beauty</NavLink></div>
                     <div> <NavLink className={styles.option_heading}>Footwear/Bags</NavLink></div>
                     <div> <NavLink className={styles.option_heading}>Watches</NavLink></div>
                     <div> <NavLink className={styles.option_heading}>Jewellery</NavLink></div>
                     <div> <NavLink className={styles.option_heading}>Fragrances</NavLink></div>
                     </div>
                  </div>
                </div>
                  
                    
                </div>

                <div className={styles.dropdown_box}>
                    <div className={styles.dropdown_box}>
                        <NavLink to={'men'} className={({ isActive }) =>
                  isActive ? styles.navlink_active:   styles.navlink_default
                }>Men</NavLink>

                        <div className={styles.hover_box}>
                     <div className={styles.option_box}>
                        <div> <NavLink className={styles.option_heading}>Topwear</NavLink></div>
                        <div><NavLink className={styles.option}>Casual Shirts</NavLink></div>
                        <div><NavLink className={styles.option}>Formal Shirts</NavLink></div>
                        <div> <NavLink className={styles.option}>Polos</NavLink></div>
                        <div><NavLink className={styles.option}>T-Shirts</NavLink></div>
                        <div><NavLink className={styles.option}>Jackets</NavLink></div>
                        <div> <NavLink className={styles.option}>Hoodies & Sweatshirts</NavLink></div>

                     <div className={styles.inner_box}>
                        <div> <NavLink className={styles.option_heading}>Bottomwear</NavLink></div>
                        <div><NavLink className={styles.option}>Casual Trousers</NavLink></div>
                        <div><NavLink className={styles.option}>Formal Trousers</NavLink></div>
                        <div> <NavLink className={styles.option}>Jeans</NavLink></div>
                        <div><NavLink className={styles.option}>Track Pants</NavLink></div>
                        <div><NavLink className={styles.option}>Shorts & 3/4ths</NavLink></div>
                     </div>
                    </div>
                    
                <div className={styles.option_box}>
                     <div> <NavLink className={styles.option_heading}>Activewear</NavLink></div>

                        <div><NavLink className={styles.option}>Polos</NavLink></div>

                        <div><NavLink className={styles.option}>Sports T-Shirts</NavLink></div>

                        <div><NavLink className={styles.option}>Track Pants</NavLink></div>

                        <div><NavLink className={styles.option}>Sports shoes</NavLink></div>

                       <div className={styles.inner_box}>
                        <div> <NavLink className={styles.option_heading}>Winterwear</NavLink></div>

                        <div><NavLink className={styles.option}>Hoodies & Sweatshirts</NavLink></div>

                        <div><NavLink className={styles.option}>Sweaters & Cardigans</NavLink></div>

                        <div><NavLink className={styles.option}>Jackets</NavLink></div>
                       </div>

                       <div className={styles.inner_box}>
                        <div> <NavLink className={styles.option_heading}>Ethnic</NavLink></div>

                        <div><NavLink className={styles.option}>Kurtas</NavLink></div>

                        <div><NavLink className={styles.option}>Waistcoats</NavLink></div>

                        <div><NavLink className={styles.option}>Pyjamas</NavLink></div>
                       </div>


                     </div>

                <div className={styles.option_box}>
                     <div> <NavLink className={styles.option_heading}>Innerwear</NavLink></div>

                    <div><NavLink className={styles.option}>Boxers</NavLink></div>

                    <div><NavLink className={styles.option}>Briefs</NavLink></div>

                    <div><NavLink className={styles.option}>Vests</NavLink></div>

                    <div><NavLink className={styles.option}>Loungewear</NavLink></div>
                
                  <div className={styles.inner_box}>
                   <div> <NavLink className={styles.option_heading}>Top Brands</NavLink></div>

                    <div><NavLink className={styles.option}>US Polo</NavLink></div>

                    <div><NavLink className={styles.option}>FameForever</NavLink></div>

                    <div><NavLink className={styles.option}>CODE</NavLink></div>

                    <div><NavLink className={styles.option}>Bossini</NavLink></div>

                    <div><NavLink className={styles.option}>Kappa</NavLink></div>

                    <div><NavLink className={styles.option}>Celio</NavLink></div>

                    <div><NavLink className={styles.option}>United Color of Benetton</NavLink></div>

                    <div><NavLink className={styles.option}>Jack & Jones</NavLink></div>
                  </div>

                </div>

                 <div className={styles.option_box}>

                     <div> <NavLink className={styles.option_heading}>Watches</NavLink></div>

                    <div><NavLink className={styles.option}>Digital watches</NavLink></div>

                    <div><NavLink className={styles.option}>Analog watches</NavLink></div>

                    <div><NavLink className={styles.option}>Automatic watches</NavLink></div>

                    <div><NavLink className={styles.option}>Automatic watches</NavLink></div>

                    <div><NavLink className={styles.option}>Chronograph watches</NavLink></div>
                    <div><NavLink className={styles.option}>Multi Function watches</NavLink></div>
                    <div><NavLink className={styles.option}>Smart watches</NavLink></div>

                    <div className={styles.inner_box}>
                        <div> <NavLink className={styles.option_heading}>Sunglasses</NavLink></div>

                        <div><NavLink className={styles.option}>Aviator</NavLink></div>

                        <div><NavLink className={styles.option}>Wayfarer</NavLink></div>

                        <div><NavLink className={styles.option}>Square</NavLink></div>

                        <div><NavLink className={styles.option}>Sporty</NavLink></div>

                        <div><NavLink className={styles.option}>Rectangle</NavLink></div>
                        <div><NavLink className={styles.option}>Round</NavLink></div>
                    </div>
                </div>

                <div className={styles.option_box}>
                     <div> <NavLink className={styles.option_heading}>Shoes</NavLink></div>

                    <div><NavLink className={styles.option}>Loafers & Moccasin</NavLink></div>

                    <div><NavLink className={styles.option}>Slip-Ons</NavLink></div>

                    <div><NavLink className={styles.option}>Sports Shoes & Sneakers</NavLink></div>

                    <div><NavLink className={styles.option}>Lace up</NavLink></div>

                    <div><NavLink className={styles.option}>Slippers and Sliders</NavLink></div>
                    <div><NavLink className={styles.option}>Floaters & Sandals</NavLink></div>
                    <div><NavLink className={styles.option}>Boots</NavLink></div>


                    <div className={styles.inner_box}>
                        <div> <NavLink className={styles.option_heading}>Grooming</NavLink></div>

                        <div><NavLink className={styles.option}>Fragrances</NavLink></div>

                        <div><NavLink className={styles.option}>Face Wash</NavLink></div>

                        <div><NavLink className={styles.option}>Skin care</NavLink></div>

                        <div><NavLink className={styles.option}>Hair care</NavLink></div>

                        <div><NavLink className={styles.option}>Beard care</NavLink></div>
                        <div><NavLink className={styles.option}>Bath & body</NavLink></div>
                    </div>
                    
                </div>

                    <div className={styles.women_category}>
                     <div> <NavLink className={styles.option_heading}>Add-ons</NavLink></div>
                     <div> <NavLink className={styles.option}>Wallets</NavLink></div>
                     <div> <NavLink className={styles.option}>Ties</NavLink></div>
                     <div> <NavLink className={styles.option}>Belts</NavLink></div>
                     <div> <NavLink className={styles.option}>Socks</NavLink></div>
                    
                     </div>
                    </div>
                </div>
                    
                </div>

                <div className={styles.dropdown_box}>
                    <div className={styles.dropdown_box}>
                      <NavLink to={'kids'} className={({ isActive }) =>
                  isActive ? styles.navlink_active:   styles.navlink_default
                }>Kids</NavLink>
                    <div className={styles.hover_box}>

                     <div className={styles.option_box}>
                        <div> <NavLink className={styles.option_heading}>Boys</NavLink></div>
                        <div><NavLink className={styles.option}>T-Shirts/Polos</NavLink></div>
                        <div><NavLink className={styles.option}>Shirts</NavLink></div>
                        <div> <NavLink className={styles.option}>Jeans</NavLink></div>
                        <div><NavLink className={styles.option}>Shorts</NavLink></div>
                        <div><NavLink className={styles.option}>Trackpants & Joggers</NavLink></div>
                        <div> <NavLink className={styles.option}>Sweatshirts & hoodies</NavLink></div>

                        <div><NavLink className={styles.option}>Pants</NavLink></div>
                        <div><NavLink className={styles.option}>Clothing Sets</NavLink></div>
                        <div> <NavLink className={styles.option}>Jackets & Waistcoat</NavLink></div>
                        <div><NavLink className={styles.option}>Innerwear</NavLink></div>
                        <div><NavLink className={styles.option}>Ethnic Wear</NavLink></div>
                   
                    </div>
                    
                <div className={styles.option_box}>
                     <div> <NavLink className={styles.option_heading}>Girls</NavLink></div>

                        <div><NavLink className={styles.option}>Tops & Tees</NavLink></div>

                        <div><NavLink className={styles.option}>Dresses/Jumpsuits</NavLink></div>

                        <div><NavLink className={styles.option}>Clothing Sets</NavLink></div>

                        <div><NavLink className={styles.option}>Jeans</NavLink></div>

                      
                        <div> <NavLink className={styles.option}>Knit Bottoms</NavLink></div>

                        <div><NavLink className={styles.option}>Innerwear</NavLink></div>

                        <div><NavLink className={styles.option}>Shorts & Skirts</NavLink></div>

                        <div><NavLink className={styles.option}>TrackPants/Joggers</NavLink></div>
                        <div><NavLink className={styles.option}>Ethnic Wear</NavLink></div>

                     </div>

                <div className={styles.option_box}>
                     <div> <NavLink className={styles.option_heading}>Top Brands</NavLink></div>

                    <div><NavLink className={styles.option}>Fame forever</NavLink></div>

                    <div><NavLink className={styles.option}>Juniors</NavLink></div>

                    <div><NavLink className={styles.option}>Melange</NavLink></div>

                    <div><NavLink className={styles.option}>Bossini</NavLink></div>
                
                
                   <div> <NavLink className={styles.option}>Mini Klub</NavLink></div>

                    <div><NavLink className={styles.option}>Allen Solly</NavLink></div>

                    <div><NavLink className={styles.option}>United Colors Of Benetton</NavLink></div>

                    <div><NavLink className={styles.option}>Lee Cooper Juniors</NavLink></div>

                    <div><NavLink className={styles.option}>Pepe Jeans</NavLink></div>

                    <div><NavLink className={styles.option}>Peppermint</NavLink></div>

                    <div><NavLink className={styles.option}>Gini & Jony</NavLink></div>
               
                </div>

                 <div className={styles.option_box}>

                     <div> <NavLink className={styles.option_heading}>Accessories</NavLink></div>

                    <div><NavLink className={styles.option}>Face Masks</NavLink></div>

                    <div><NavLink className={styles.option}>Hair accessories</NavLink></div>

                    <div><NavLink className={styles.option}>Caps & Hats</NavLink></div>

                    <div className={styles.inner_box}>
                        <div> <NavLink className={styles.option_heading}>Price point Store</NavLink></div>

                        <div><NavLink className={styles.option}>Under 299</NavLink></div>

                        <div><NavLink className={styles.option}>Under 399</NavLink></div>

                        <div><NavLink className={styles.option}>Under 499</NavLink></div>

                        <div><NavLink className={styles.option}>Under 599</NavLink></div>

                        <div><NavLink className={styles.option}>Under 699</NavLink></div>
                        <div><NavLink className={styles.option}>Under 799</NavLink></div>
                    </div>
                </div>

                <div className={styles.option_box}>
                     <div> <NavLink className={styles.option_heading}>Age Store</NavLink></div>

                    <div><NavLink className={styles.option}>0-2 yrs</NavLink></div>

                    <div><NavLink className={styles.option}>2-4 yrs</NavLink></div>

                    <div><NavLink className={styles.option}>4-6 yrs</NavLink></div>

                    <div><NavLink className={styles.option}>6-10 yrs</NavLink></div>

                    <div><NavLink className={styles.option}>10-13 yrs</NavLink></div>
                    <div><NavLink className={styles.option}>13-16 yrs</NavLink></div>
                  

                    <div>
                        <div> <NavLink className={styles.option_heading}>Shop Boys Footwear</NavLink></div>
                    </div>
                    <div>
                        <div> <NavLink className={styles.option_heading}>Shop Girls Footwear</NavLink></div>
                    </div>
                    
                </div>

                    <div className={styles.women_category}>
                     <div> <NavLink className={styles.option_heading}>Character Shop</NavLink></div>
                     <div> <NavLink className={styles.option_heading}>Boys Character shop</NavLink></div>
                     <div> <NavLink className={styles.option_heading}>Girls character shop</NavLink></div>                   
                     </div>
                    </div>
                </div>
                    
                </div>

                <div>
                    <NavLink to={'/shoes'}  className={({ isActive }) =>
                  isActive ? styles.navlink_active:   styles.navlink_default
                }>Shoes & Bags</NavLink>
                </div>

                <div>
                    <NavLink to={'beauty'}  className={({ isActive }) =>
                  isActive ? styles.navlink_active:   styles.navlink_default
                }>Beauty</NavLink>
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