import styled from 'styled-components'


export const IntroStyle = styled.div`
min-height: 70vh;
display: flex;
justify-content: space-between;
align-items: center;
padding: 5rem 10rem;
color: white;
 `

export const Description = styled.div` 
 flex: 1;
 padding-right: 5rem;
 `

export const Image = styled.div` 
 flex: 1;
 img {
   width: 70%;
   height: 60vh;
   object-fit: cover;
   overflow: hidden;
   margin-left: 10rem;
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

