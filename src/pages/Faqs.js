import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations';

const Faqs = () => {
  return (
    <motion.div variants ={pageAnimation} initial="hidden" animate="show" exit="exit">
      This is Faqs
    </motion.div>
  )
}

export default Faqs