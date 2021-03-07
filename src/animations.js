export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {duration: 1, ease: 'easeIn', when: "beforeChildren", staggerChildren: 0.5}
  },
  exit: {
    opacity: 0,
    transition: {duration: 0.5}
  }
}

export const fadeIn = {
  hidden: { opacity: 0},
  show: {
    opacity: 1,
    transition: {duration: 0.5, ease: 'easeInOut'}
  } 
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -200 },
  show: {opacity: 1, x: 0, transition: {duration: 1, ease: "easeIn"}}
}
export const fadeInRight = {
  hidden: { opacity: 0, x: 200 },
  show: {opacity: 1, x: 0, transition: {duration: 1.25, ease: "easeIn"}}
}

export const photoAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 1,
    },
  }
}