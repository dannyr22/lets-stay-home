import React from 'react';
import drink1 from '../img/drink1.jpg';
import { IntroStyle, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, container } from '../animations';

const Intro = () => {
  return (
       <IntroStyle>
      <Description>
        <motion.div variants={container} initial="hidden" animate="show">
          <Hide className="hide">
            <motion.h2 variants={fadeIn}>We Bring <span>Cocktails</span></motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={fadeIn}>Straight To Your</motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={fadeIn}><span>Door</span></motion.h2>
          </Hide>
        </motion.div>
        <p>To see a list of what we sell then please click the button</p>
        <button>Menu</button>
      </Description>
    </IntroStyle>
  )
}

export default Intro
