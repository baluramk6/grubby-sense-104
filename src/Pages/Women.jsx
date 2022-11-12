import React from 'react'
import Banner from '../Components/Banner'
import Bigbox from '../Components/Bigbox'
import Carousel from '../Components/carousel/Carousel'
import Flexbox from '../Components/Flexbox'
import { deals, ethnicwear_wmn, wmntop_picks, wmn_active_wear, wmn_edtr, wmn_lvd, wmn_spd, wmn_top_trndsngl, wmn_trnd_addon, wmn_wrdrv, wnm_shop_category1, wnm_shop_category2, wnm_trndy_bottomwear, wnm_trnd_brnd1, wnm_trnd_brnd2, wnm_winter } from '../utils/data'

const Women = () => {
  return (
    <div>
       <Carousel/>
      <Flexbox heading={"11.11 Deals"} data={deals}/>
      <Banner src={"https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modularblock-oneBytwo1A-Women-09Nov2022.gif"}/>   
         <Banner src={"https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-9modblock-StripBanner2-D-08Nov2022.jpg"}/>
      <Flexbox heading={"Trending Ethnic Wear"} data={ethnicwear_wmn}/>
      <Bigbox heading={'Top Picks'} data={wmntop_picks}/>
      <Flexbox heading={'Winterwear Essentials'} data={wnm_winter}/>
      <Banner src={'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-Women-10Nov2022.jpg'}/>
      <Banner src={"https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-StripBanner1-09Nov2022.jpg"}/>
      <Flexbox heading={'Trendy Bottom Wear'} data={wnm_trndy_bottomwear}/>

      <Banner heading={'Flash Sale For Today'} src={'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock1-A-09Nov2022.jpg'}/>

      <Flexbox heading={'Shop By Category'} data={wnm_shop_category1} data2={wnm_shop_category2}/>

      <Flexbox heading={'Top Trending Brands'} data={wnm_trnd_brnd1} data2={wnm_trnd_brnd2}/>

      <Bigbox heading={'Activewear Essentials'} data={wmn_active_wear}/>

      <Flexbox heading={'Top Trending Brands'} data={wmn_top_trndsngl}/>

      <Flexbox heading={'Trending Add-Ons'} data={wmn_trnd_addon}/>

      <Bigbox heading={'Wardrobe Essentials'} data={wmn_wrdrv}/>

      <Bigbox heading={'Most Loved Styles'} data={wmn_lvd}/>

      <Bigbox heading={`Editor's Curated List`} data={wmn_edtr}/>

      <Bigbox heading={`Shop By Department`} data={wmn_spd}/>
    </div>
  )
}

export default Women
