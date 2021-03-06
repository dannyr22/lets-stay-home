import React from 'react';
import styled from 'styled-components';
import logo from '../img/letsstaylogonoBackground.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavStyle>
      <Logo>
      <a href="/"><img src={logo} alt="logo"></img></a>
      </Logo>
      <Menu className="menu">
        <ul>
          <li><Link to="/fresh-cocktails">Fresh Cocktails</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/faqs">FAQ's</Link></li>
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
height: 5rem;
background: rgb(236, 236, 236, 0.75);

align-items: center;
img{
  width: 7rem;
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
`
const Menu = styled.div` 
padding-left: 20rem;
`

const Logo = styled.div` 

`
export default Nav
