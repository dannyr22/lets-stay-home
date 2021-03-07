import React from 'react';
import styled from 'styled-components';
import  apple  from '../img/appleCocktail.jpg';
import  earlgrey  from '../img/earlgreycocktail.jpg';
import  kilner  from '../img/Kilner.jpg';
import flowers from '../img/flowers.jpg';
import { IntroStyle, Description, Title } from '../styles';

const Products = () => {
  return (
    <>
      <Title className="hide">
            <h2>Our <span>Services</span></h2>
      </Title>
    <ProductsStyled className="products">
      <Cards>
        <Card>
          <div className="picture">
            <img src={apple } alt="apple cocktail" />
            <h3>Parties</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Card>
        <Card>
          <div className="picture">
            <img src={earlgrey } alt="earl grey cocktail" />
            <h3>Events</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Card>
        <Card>
          <div className="picture">
            <img src={kilner } alt="cocktails in kilner" />
            <h3>Zoom Meetings</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Card>
        <Card>
          <div className="picture">
            <img src={ flowers} alt=" cocktail in flower bed" />
            <h3>Celebration</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
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
`
const Card = styled.div`
padding: 0rem 1rem;
img {
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
