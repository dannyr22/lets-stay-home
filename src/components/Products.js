import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import  pornstar  from '../img/pornstar.jpg';
import  masterclass  from '../img/masterclass.jpg';
import  zoom from '../img/zoom.jpg';
import christmas from '../img/christmas.jpg';
import { IntroStyle, Description, Title, Hide } from '../styles';
import { photoAnim } from '../animations';
import { useScroll } from '../components/useScroll';




const Products = () => {

  const [element, controls] = useScroll() 
  return (
    <>
      <Title className="hide">
            <h2>Our <span>Services</span></h2>
      </Title>
      <ProductsStyled className="products" ref={element} variants={photoAnim} initial="hidden" animate={controls}>
        <Cards>
            <Card >
              <div className="picture">
              <Hide>
                <motion.img  src={pornstar} alt="apple cocktail" />
              </Hide>
                <h3>Slingin' and Delivering</h3>
              </div>
              <p>We deliver fresh and amazing tasting coktails straight to your door.</p>
            </Card>
          
            <Card>
              <div className="picture">
              <Hide>
                <motion.img src={masterclass} alt="earl grey cocktail" />
              </Hide>
                <h3>Masterclasses</h3>
              </div>
              <p>Hire us and we'll train you and your friends for the day.</p>
              </Card>
            <Card>
            <div className="picture">
              <Hide>
                <motion.img src={zoom} alt="cocktails in kilner" />
              </Hide>
                <h3>Zoom Meetings</h3>
              </div>
              <p>Need a meetings with some drinks for everyone? we've got you.</p>
              </Card>
            <Card>
            <div className="picture">
              <Hide>
                <motion.img src={christmas} alt=" cocktail in flower bed" />
              </Hide>
                <h3>Celebration catering</h3>
              </div>
              <p>Birthdays, Weddings, special events, we've done them all and we can do yours too.</p>
              </Card>
          </Cards>
      </ProductsStyled>
      </>
  )
}





const ProductsStyled = styled(IntroStyle)` 

`

const Cards = styled(Description)` 
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
h3, p {
  color: #98e9d1;;
  max-width: 15rem;
}
`
const Card = styled.div`
padding: 1.5rem 1rem;
img {
  margin-bottom: 1rem;
  height: 18rem;
  width: 15rem;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5)
}
p {
  font-size: 1.2rem;
}
h3{
  font-size: 1.5rem;
  padding-top: 1rem;
}
`
export default Products
