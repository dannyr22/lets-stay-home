import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { pageAnimation } from '../animations';
import { Title } from '../styles';
import Triangle from '../components/Triangle';
import GirlWithFlowers from '../components/GirlWithFlowers';
import GirlonaScooter from '../components/GirlonaScooter';
import GirlHoldingMap from '../components/GirlHoldingMap';
import ScrollTop from '../components/ScrollTop';

const FreshCocktails = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Fresh>
        <Title>
          <h2>Only the freshest ingredients</h2>
          <h2 className="main"><span className="secondary">Drinks made to order</span></h2>
        </Title>
        <Triangle />
      </Fresh>
      <Ingredients>
        <div>
          <h3>We source only the good stuff, none of that purré malarky.</h3>
        </div>
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
      <ScrollTop />
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
  @media (max-width: 1200px) {
 width: 100%;
 right: 0%;
}
}
@media (max-width: 1200px) {
 padding: 1rem 1rem;
}

`
const Ingredients = styled.div` 
margin-top: 10%;
display: flex;
position: relative;
align-items: center;
@media (max-width: 1200px) {
 display: block;
}
 
h3 {
  color: #98E9D1;
  padding: 0rem 3rem;
  max-width: 70%;
  @media (max-width: 1200px) {
 display: block; 
 padding: 0.5rem 1rem;
 text-align: center;
 max-width: 100%;
}
}

`

const Girl = styled.div` 
position: absolute;
right: 10%;
@media (max-width: 1200px) {
 width: 100%;
 position: relative;
 display: flex;
justify-content: center;
right: 0%;
margin-top: 2rem;
}
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
  max-width: 70%;
  @media (max-width: 1200px) {
 display: block; 
 padding: 0.5rem 1rem;
 text-align: center;
 max-width: 100%;
}
}
@media (max-width: 1200px) {
 display: block;
}
 `

const GirlScooter = styled.div` 
position: absolute;
left: 10%;
svg{
  transform: rotateY(180deg)
}
@media (max-width: 1200px) {
 width: 100%;
 position: relative;
 display: flex;
justify-content: center;
left: 0%;
margin-top: 2rem;
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
  max-width: 70%;
  @media (max-width: 1200px) {
 display: block; 
 padding: 0.5rem 1rem;
 text-align: center;
 max-width: 100%;
}
}
@media (max-width: 1200px) {
 display: block;
}
 `

const GirlDelivering = styled.div` 
 position: absolute;
right: 10%;
@media (max-width: 1200px) {
 width: 100%;
 position: relative;
 display: flex;
justify-content: center;
right: 0%;
margin-top: 2rem;
}
 `
 export default FreshCocktails