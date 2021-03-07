import React from 'react';
import { IntroStyle, Description, Hide, MainTitle } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

const Intro = () => {
  return (
       <IntroStyle>
      <Description>
        <motion.div>
          <Hide className="hide">
            <motion.h2>We Bring <span>Cocktails</span></motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2>Straight To Your</motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2><span>Door</span></motion.h2>
          </Hide>
        </motion.div>
        <MainTitle variants={fadeIn}>Let's stay Home</MainTitle>
        <p>To see a list of what we sell then please click the button</p>
        <button>Menu</button>
      </Description>
    </IntroStyle>
  )
}

export default Intro
