import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations';

const FreshCocktails = () => {
  return (
    <motion.div variants ={pageAnimation} initial="hidden" animate="show" exit="exit">
      This is Fresh Cocktails
    </motion.div>
  )
}

export default FreshCocktails