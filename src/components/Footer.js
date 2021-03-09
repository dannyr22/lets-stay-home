import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="information">
        <p>Lets Stay Home</p>
        <p>Surrey</p>
        <p>London</p>
        <p>email: letsstayhome75@gmail.com</p>
        <p>telephone: 07837975972</p>
        <p>&copy; Lets Stay Home 2021</p>
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer` 
height: 25vh;
background: #1d3550;
margin-top: 20%;
display: flex;
justify-content: center;
align-items: center;

.information {
  text-align: center;
  p{
    color: white;
    font-size: 1rem;
    margin: 0rem 0rem;

  }
}
`

export default Footer
