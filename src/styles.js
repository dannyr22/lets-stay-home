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
 flex: 1;
 img {
   width: 70%;
   height: 60vh;
   object-fit: cover;
   overflow: hidden;
   margin-left: 10rem;
   margin-top: 2rem;
   border-radius: 2rem;
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
margin-top: 5rem;
overflow: hidden;
`

export const MainTitle = styled(motion.div)` 
font-family: 'Dancing Script', cursive;
font-size: 7rem;
padding: 4rem 0rem;
font-weight: bold;
color: #1d3550
`
