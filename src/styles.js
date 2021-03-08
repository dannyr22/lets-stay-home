import styled from 'styled-components';
import { motion } from 'framer-motion';


export const IntroStyle = styled(motion.div)`
min-height: 70vh;
display: flex;
justify-content: center;
align-items: center;
padding: 5rem 0rem;
color: white;
text-align: center;
 `

export const Description = styled(motion.div)` 
 `

export const Image = styled.div` 
 img {
   width: 100%;
   height: 60vh;
   object-fit: cover;
   overflow: hidden;
   border-radius: 2rem;
   @media (max-width: 768px) {
     margin-left: 0rem;
   }
 }
 @media (max-width: 1300px) {
   img {
     width: 100%;
   }
 }
 `

export const Hide = styled.div`
overflow: hidden;
 `
export const Title = styled.div` 
padding-left: 10rem;
margin-top: 10rem;
overflow: hidden;
@media (max-width: 768px) {
  padding-left: 0rem;
  text-align: center;
}
`

export const MainTitle = styled(motion.div)` 
font-family: 'Dancing Script', cursive;
font-size: 7rem;
padding: 4rem 0rem;
font-weight: bold;
color: #1d3550
`
