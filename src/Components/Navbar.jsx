import { NavLink } from "react-router-dom"
import logo from "../img/logo.png"
import styles from "./Navbar.module.css"

export const Navbar=()=>{
    return <div className={styles.nav_main}>
        <div className={styles.nav_first_section_parent}>
            <div className={styles.logo_box}>
                <img src={logo} alt="" />

            </div>
            <div className={styles.nav_links}>
                <div>
                    <NavLink to={"/product"}>Women</NavLink>
                    <div className="hover_box">
                     <div className="1">
                      
                     </div>
                     <div className="2"></div>
                     <div className="3"></div>
                     <div className="4"></div>
                     <div className="5"></div>
                     <div className="6"></div>
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