import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations';

const Events = () => {
  return (
    <motion.div variants ={pageAnimation} initial="hidden" animate="show" exit="exit">
      This is Events
    </motion.div>
  )
}

export default Events
