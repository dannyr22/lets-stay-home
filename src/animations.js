export const fadeIn = {
  hidden: { opacity: 0},
  show: {
    opacity: 1,
    transition: {duration: 1, ease: 'easeOut'}
  } 
}

export const container = {
  hidden: { x: -100 },
  show: {
    x: 0,
   transition: {duration: 1, ease: 'easeOut', staggerChildren: 0.5, when: 'beforeChildren'}
  }
}