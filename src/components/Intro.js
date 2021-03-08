import React, { useState } from 'react';
import { IntroStyle, Description, Hide, MainTitle } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
import Menu from '../components/Menu';

const Intro = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = (e) => {
    setMenuOpen(true)
  }
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
        <motion.p variants={fadeIn}>To see a list of what we sell then please click the button</motion.p>
        <motion.button variants={fadeIn} onClick={openMenu}>Menu</motion.button>
      </Description>
      {menuOpen && <Menu setMenuOpen={setMenuOpen}/>}
    </IntroStyle>
  )
}

export default Intro
