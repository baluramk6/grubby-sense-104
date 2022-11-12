import React from 'react'
import Banner from '../Components/Banner'
import Bigbox from '../Components/Bigbox'
import Carousel from '../Components/carousel/Carousel'
import Flexbox from '../Components/Flexbox'
import { deals, ethnicwear_wmn, wmntop_picks, wnm_trndy_bottomwear, wnm_winter } from '../utils/data'

const HomePage = () => {
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

      <Flexbox heading={'Winterwear Essentials'} data={wnm_winter} data2={wnm_winter}/>
    </div>
  )
}

export default HomePage
