import React from 'react'
import AboutUs from './about-us/aboutUs'
import ClientSide from './client-side/clientSide'
import PricingSection from './pricing-section/pricingSection'
import TeamsDeveloper from './team-developer/teamsDeveloper'
import TopSection from './topSection/topSection'

const HomeIndex = () => {
  return (
  <div style={{background : "#FDF0E9"}} >
       <TopSection />
       <AboutUs />
       <TeamsDeveloper />
       <ClientSide />
       <PricingSection />
    </div>
  )
}

export default HomeIndex