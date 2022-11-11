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
                <div className={styles.women_box}>
                    <div className={styles.women_box}>

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

                <div>
                    <NavLink>Men</NavLink>
                </div>

                <div>
                    <NavLink>Kids</NavLink>
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