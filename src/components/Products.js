import React from 'react';
import  apple  from '../img/appleCocktail.jpg';
import  earlgrey  from '../img/earlgreycocktail.jpg';
import  kilner  from '../img/Kilner.jpg';
import flowers from '../img/flowers.jpg';
import cocktails from '../img/cocktails5.jpg';

const Products = () => {
  return (
    <div className="products">
      <div className="cards">
        <div className="card">
          <div className="picture">
            <img src={apple } alt="apple cocktail" />
            <h3>Parties</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="picture">
            <img src={earlgrey } alt="earl grey cocktail" />
            <h3>Parties</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="picture">
            <img src={kilner } alt="cocktails in kilner" />
            <h3>Parties</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="picture">
            <img src={ flowers} alt=" cocktail in flower bed" />
            <h3>Parties</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="image">
        <img src={cocktails} alt="cocktails in a row"/>
      </div>
    </div>
  )
}

export default Products
