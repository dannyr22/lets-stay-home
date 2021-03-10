import React from 'react';
import Gallery from '../components/Gallery';
import GetInTouch from '../components/GetInTouch';
import Intro from '../components/Intro';
import Products from '../components/Products';
import WhatWeDo from '../components/WhatWeDo';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations';
import ScrollTop from '../components/ScrollTop';


const AboutUs = () => {
  return (
    <motion.div variants ={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Intro />
      <Products />
      <WhatWeDo />
      <GetInTouch />
      <Gallery />
      <ScrollTop />
    </motion.div>
  )
}

export default AboutUs
