export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {duration: 1, ease: 'easeIn', when: "beforeChildren", staggerChildren: 0.5}
  },
  exit: {
    opacity: 0,
  }
}




export const fadeIn = {
  hidden: { opacity: 0},
  show: {
    opacity: 1,
    transition: {duration: 2, ease: 'easeOut'}
  } 
}
