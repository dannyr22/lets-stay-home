import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const RightNav = ({open}) => {
  return (
    <UlContainer>
       <Ul open={open}>
          <li><Link className="white" to="/fresh-cocktails">Fresh Cocktails</Link></li>
          <li><Link className="white" to="/events">Events</Link></li>
          <li><Link className="white" to="/reviews">Reviews</Link></li>
          <li><Link className="white" to="/faqs">FAQ's</Link></li>
        </Ul>
    </UlContainer>
  )
}

const UlContainer = styled.div`
@media (min-width: 768px) {
  display: none;
} `
const Ul = styled.ul`
display: flex;
list-style: none;

Link {
  font-size: 3;
  font-weight: bold;
}
li{
  position: relative;
  padding-left: 10rem;
}

@media (max-width: 768px) {
  flex-flow: column nowrap;
  /* flex-direction: column; */
  text-align: center;
  background: #98e9d1;
  position: fixed;
  transform: ${({ open }) => open ? 'translatX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
  padding-top: 8rem;
  transition: transform 0.3s ease-in-out;
li{
  padding-left: 0rem;
  padding-top: 2rem;
}
Link {
  color: white;
}
} 
`

export default RightNav
