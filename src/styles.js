import styled from 'styled-components';


export const IntroStyle = styled.div`
min-height: 70vh;
display: flex;
justify-content: center;
align-items: center;
padding: 5rem 0rem;
color: white;
text-align: center;
 `

export const Description = styled.div` 
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

export const FullPageImage = styled.div` 

`
