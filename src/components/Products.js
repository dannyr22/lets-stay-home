import React from 'react';
import styled from 'styled-components';
import  apple  from '../img/appleCocktail.jpg';
import  earlgrey  from '../img/earlgreycocktail.jpg';
import  kilner  from '../img/Kilner.jpg';
import flowers from '../img/flowers.jpg';
import cocktails from '../img/cocktails1.jpg';
import { IntroStyle, Description, Image, Hide } from '../styles';

const Products = () => {
  return (
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
      <Image className="image">
        <img src={cocktails} alt="cocktails in a row"/>
      </Image>
    </ProductsStyled>
  )
}





const ProductsStyled = styled(IntroStyle)` 

`

const Cards = styled(Description)` 
padding-left: 10rem;
display: flex;
flex-wrap: wrap;
max-width: 60rem;
`
const Card = styled.div`
padding: 2rem 1rem;
img {
  height: 18rem;
  width: 15rem;
}
p {
  font-size: 1.2rem;
}
h3{
  font-size: 1.5rem;
}
`
export default Products
