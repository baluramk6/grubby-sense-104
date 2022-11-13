import React from 'react'
import Banner from '../Components/Banner'
import Bigbox from '../Components/Bigbox'
import Carousel from '../Components/carousel/Carousel'
import Flexbox from '../Components/Flexbox'
import { deals,  men_actv_wrdb, men_brnd, men_brnd2, men_brn_dcnt, men_brn_dcnt2, men_crs_img, men_hglt, men_lvd, men_shp_ctgry, men_shp_ctgry2, men_top_pk, men_trndsttr, men_vlu_pk, men_wntr, men_wntr_trnd,wmn_spd, } from '../utils/data'

const Menpage = () => {
  return (
    <div>
       <Carousel srcdata={men_crs_img}/>
      <Flexbox heading={"11.11 Deals"} data={deals}/>
      <Banner src={"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-Men-09Nov2022.gif"}/>   
  
      <Flexbox heading={"Value Picks"} data={men_vlu_pk}/>
     
      <Flexbox heading={'Winterwear Essentials'} data={men_wntr}/>
      <Banner src={'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-Women-10Nov2022.jpg'}/>
      
      <Flexbox heading={'Big Brands. Big Discounts'} data={men_brn_dcnt} data2={men_brn_dcnt2}/>

      <Banner src={'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-menstripbanner-07Nov2022A.png'}/>

      <Banner src={'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-9modblock-StripBanner2-D-07Nov2022.jpg'}/>

      <Banner src={'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-8modblock-oneBythree-D-10Nov2022.jpg'}/>

      <Flexbox heading={'Shop By Category'} data={men_shp_ctgry} data2={men_shp_ctgry2}/>

      <Flexbox heading={'Top Trending Brands'} data={men_brnd} data2={men_brnd2}/>

      <Banner heading={'Flash Sale for Today'} src={'https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-modularblock7-oneBythree-A-Men-04Nov2022.jpg'}/>

      <Banner heading={'Flash Sale for Today'} src={'https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-modularblock7-oneBythree-A-Men-04Nov2022.jpg'}/>

      <Bigbox heading={'Top Picks'} data={men_top_pk}/>

      <Bigbox heading={'Winter Trends'} data={men_wntr_trnd}/>

      <Bigbox heading={'Most Loved Styles'} data={men_lvd}/>

      <Bigbox heading={'Highlights of the Day'} data={men_hglt}/>

      <Bigbox heading={'Trendsetters'} data={men_trndsttr}/>

      <Bigbox heading={`Active Wardrobe`} data={men_actv_wrdb}/>

      <Bigbox heading={`Shop By Department`} data={wmn_spd}/>
    </div>
  )
}

export default Menpage
