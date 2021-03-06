import React from 'react'
import Gallery from '../components/Gallery'
import GetInTouch from '../components/GetInTouch'
import Intro from '../components/Intro'
import Products from '../components/Products'
import WhatWeDo from '../components/WhatWeDo'

const AboutUs = () => {
  return (
    <div>
      <Intro />
      <Products />
      <WhatWeDo />
      <GetInTouch />
      <Gallery />
    </div>
  )
}

export default AboutUs
