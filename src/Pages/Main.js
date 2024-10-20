import React from 'react'
import Home from '../Components/Home'

import WhyUs from '../Components/WhyUs'
import CaseStudies from '../Components/CaseStudies'
import RecentProjects from '../Components/RecentProjects'

import Services from '../Components/Services'
import ContactUs from '../Components/Contactus'
import { styled } from 'styled-components'



const Main = () => {


  return (
  <Wrapper>
  <Home   />
<div id="service1">
<Services />
</div>
 <div id="service2">
 <WhyUs />
 </div>
 <div id="service3">
 <CaseStudies />
 </div>
<div id="service4">
<RecentProjects />
</div>
<div id="service5">
<ContactUs />
</div>

  

  </Wrapper>
  )
}

export default Main
const Wrapper=styled.div`

`
