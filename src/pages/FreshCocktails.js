import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { pageAnimation } from '../animations';
import { Title } from '../styles';
import Triangle from '../components/Triangle';
import GirlWithFlowers from '../components/GirlWithFlowers';
import GirlonaScooter from '../components/GirlonaScooter';
import GirlHoldingMap from '../components/GirlHoldingMap';

const FreshCocktails = () => {
  return (
    <motion.div variants ={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Fresh>
        <Title>
          <h2>Only the freshest ingredients</h2>
          <h2 className="main"><span className="secondary">Drinks made to order</span></h2>
        </Title>
        <Triangle />
      </Fresh>
      <Ingredients>
          <h3>We source only the good stuff, none of that purré malarky.</h3>
        <Girl>
         <GirlWithFlowers />
        </Girl>
      </Ingredients>
      <Making>
      <h3>We make our cocktails on the day so they are as fresh as can be.</h3>
        <GirlScooter>
          <GirlonaScooter />
        </GirlScooter>
      </Making>
      <Delivering>
      <h3>And we deliver straight to your door.</h3>
        <GirlDelivering>
          <GirlHoldingMap />
        </GirlDelivering>
      </Delivering>
    </motion.div>
  )
}

const Fresh = styled.div` 
position: relative;
min-height: 50vh;
display: flex;
justify-content: center;
padding: 2rem 4rem;
background: #98e9d1;
h2{
  color: white;
}

.main {
  position: relative;
}
.secondary {
  position: absolute;
  width: 120%;
  right: -2.5%;
}
`
const Ingredients = styled.div` 
margin-top: 10%;
display: flex;
position: relative;
align-items: center;
 
h3 {
  color: #98E9D1;
  padding: 0rem 3rem;
}
`

const Girl = styled.div` 
position: absolute;
right: 10%;
`

const Making = styled.div`
margin-top: 20%;
display: flex;
position: relative;
align-items: center;
h3 {
  margin-left: auto;
  color: #98E9D1;
  padding: 0rem 3rem;
}
 `

const GirlScooter = styled.div` 
position: absolute;
left: 10%;
svg{
  transform: rotateY(180deg)
}
`

const Delivering = styled.div`
margin-top: 20%;
display: flex;
position: relative;
align-items: center;
h3 {
  color: #98E9D1;
  padding: 0rem 3rem;
}
 `

const GirlDelivering = styled.div` 
 position: absolute;
right: 10%;
 `
 export default FreshCocktails