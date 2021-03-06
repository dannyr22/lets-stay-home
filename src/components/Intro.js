import React from 'react';
import drink1 from '../img/drink1.jpg';
import { IntroStyle, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

const Intro = () => {
  return (
       <IntroStyle>
      <Description>
        <motion.div variants={fadeIn} initial="hidden" animate="show" className="title">
          <Hide className="hide">
            <h2>We Bring <span>Cocktails</span></h2>
          </Hide>
          <Hide className="hide">
            <h2>Straight To Your</h2>
          </Hide>
          <Hide className="hide">
            <h2><span>Door</span></h2>
          </Hide>
        </motion.div>
        <p>To see a list of what we sell then please click the button</p>
        <button>Menu</button>
      </Description>
    </IntroStyle>
  )
}

export default Intro
