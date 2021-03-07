import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations';

const Reviews = () => {
  return (
    <motion.div variants ={pageAnimation} initial="hidden" animate="show" exit="exit">
      This is Reviews
    </motion.div>
  )
}

export default Reviews
