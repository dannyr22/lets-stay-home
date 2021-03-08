import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
const [scrollTop, setScrollTop] = useState(0);

useEffect(() => {
  function onScroll() {
    let currentPosition = window.pageYOffset;
    setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
  }

  window.addEventListener("scroll", onScroll);
}, [scrollTop]);

  return (
    <NavStyle className={scrollTop > 0 ? 'green' : ''}>
      <Logo>
        <a href="/"><p className={scrollTop > 0 ? 'white' : 'greenText'}>Let's Stay Home</p></a>
      </Logo>
      <Menu className="menu">
        <ul>
          <li><Link className={scrollTop > 0 ? 'white' : 'greenText'} to="/fresh-cocktails">Fresh Cocktails</Link></li>
          <li><Link className={scrollTop > 0 ? 'white' : 'greenText'} to="/events">Events</Link></li>
          <li><Link className={scrollTop > 0 ? 'white' : 'greenText'} to="/reviews">Reviews</Link></li>
          <li><Link className={scrollTop > 0 ? 'white' : 'greenText'} to="/faqs">FAQ's</Link></li>
        </ul>
      </Menu>
    </NavStyle>
  )
}

const NavStyle = styled.nav` 
display: flex;
justify-content: space-evenly;
position: sticky;
top: 0;
height: 6rem;
align-items: center;
background: white;
z-index: 2;
img{
  width: 9rem;
}

ul{
  display: flex;
  margin-left: auto;
  li {
    list-style: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
}
a {
  text-decoration: none;
  &:hover{
    color: #fff3b0;
  }
}
 Link {
  list-style: none;
  color: #98e9d1;
 }
 @media (max-width: 1200px) {
  position: static;
}
`
const Menu = styled.div` 
padding-left: 20rem;
@media (max-width: 1200px) {
  display: none;
}
`
const Logo = styled.div` 
display: flex;
font-family: 'Dancing Script', cursive;
font-weight: bold;
padding-left: 20rem;
@media (max-width: 1200px) {
  width: 100%;
  justify-content: center;
  padding: 2rem 0rem;
  margin-top: 3rem;
}
`
export default Nav
