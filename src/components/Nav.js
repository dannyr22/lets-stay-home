import React from 'react';
import styled from 'styled-components';
import logo from '../img/letsstaylogonoBackground.png'

const Nav = () => {
  return (
    <NavStyle>
      <Logo>
        <img src={logo} alt="logo"/>
      </Logo>
      <Menu className="menu">
        <ul>
          <li>Fresh Cocktails</li>
          <li>Event</li>
          <li>Reviews</li>
          <li>FAQ's</li>
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
height: 7rem;
background: #eee;
align-items: center;
img{
  width: 10rem;
}

ul{
  display: flex;
  margin-left: auto;
  li {
    list-style: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #1d3550;
    &:hover {
      color: #ceb110;
      cursor: pointer;
    }
  }
}
`
const Menu = styled.div` 
padding-left: 20rem;
`

const Logo = styled.div` 

`
export default Nav
