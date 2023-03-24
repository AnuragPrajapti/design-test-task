import React from 'react'
import AboutUs from './about-us/aboutUs'
import TeamsDeveloper from './team-developer/teamsDeveloper'
import TopSection from './topSection/topSection'

const HomeIndex = () => {
  return (
  <div style={{background : "#FDF0E9"}} >
       <TopSection />
       <AboutUs />
       <TeamsDeveloper />
    </div>
  )
}

export default HomeIndex