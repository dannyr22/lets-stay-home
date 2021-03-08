import React from 'react';
import styled from 'styled-components';
import menu from '../img/Lets stay home menu.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';


const Menu = ({ setMenuOpen }) => {
  
  const exitHandler = (e) => {
    const element = e.target
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      setMenuOpen(false)
    }
  } 




  return (
    <MenuShadow className="shadow" onClick={exitHandler}>
      <MenuStyle>
        <motion.img variants={fadeIn} initial="hidden" animate="show" src={menu} alt="cocktail menu"/>
      </MenuStyle>
    </MenuShadow>
  )
}


const MenuShadow = styled.div`
width: 100%;
min-height: 100vh;
overflow-y: scroll;
background: rgba(0,0,0,0.5);
position: fixed;
z-index: 10;
top: 0;
left: 0;

&::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #98e9d1;
  }
 `

const MenuStyle = styled.div`
position: absolute;
 top: 20%;
 left: 10%;
 right: 10%;
img{
  width: 100%;
  border-radius: 10px;
}
 @media (max-width: 1200px) {
   top: 30%;
   left: 2%;
   right: 2%;
 }
 
 `
export default Menu
