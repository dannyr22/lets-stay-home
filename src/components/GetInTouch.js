import React from 'react';
import styled from 'styled-components';
import { Image, Title } from '../styles';
import cocktailPour from '../img/cocktail pour.jpg';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations';
import { useScroll } from '../components/useScroll';

const GetInTouch = () => {

  const [element, controls] = useScroll() 
  return (
    <div>
      <Title>
        <h2>Get In <span>Touch</span></h2>
      </Title>
      <FormContainer ref={element}>
      <ImagePour>
        <motion.img variants={fadeUp}
          initial="hidden"
          animate={controls} src={cocktailPour} alt="cocktail being poured"/>
      </ImagePour>
        <Form name="contact" action="/contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact"/>
          <input required type="text" placeholder="Name" name="name"/>
          <input required type="email" placeholder="Email Address" name="email"/>
          <textarea required name="request" id="" cols="30" rows="10"></textarea>
          <label htmlFor="mailingList">Check this box if you want to be our friend and join our mailing list, just one e-mail a month we promise.</label>
          <input type="checkbox" name="mailingList" className="checkbox"/>
          <button type="submit">Send</button>
        </Form>
      </FormContainer>
      
    </div>
  )
}

const ImagePour = styled(Image)` 
display: flex;
justify-content: center;
img {
  width: 65%;
  height: 70vh;
  object-fit: cover;
  border-radius: 2rem;
  @media (max-width: 600px) {
    width: 90%;
    height: 70%;
    margin: 2rem 1rem;
    justify-content: center;
  }
}

`
const Form = styled(motion.form)` 
display: flex;
flex-direction: column;
padding: 5rem 0rem;
margin-right: 5rem;
@media (max-width: 1200px){
  margin-right: 0rem;
}
@media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }

input, textarea, label {
  display: flex;
  border: none;
  width: 30rem;
  outline: none;
  padding: 1rem 2rem;
  margin-top: 1rem;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  font-size: 1rem;
  background: rgba(255,255,255);
  transition: all 0.35s ease-in-out;
  border: 1px solid #333;
  &:focus {
    border: 5px solid rgba(106,194,128,0.7);
    color: #504c4c;
    background: white;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  
}

button {
  margin-top: 1rem;
  width: 30rem;
  @media (max-width: 768px) {
    width: 90%;
  }
}

.checkbox{
  width: 1rem;
}

label{
  padding-top: 1.5rem;
  width: 30rem;
  @media (max-width: 768px) {
    width: 90%;
  }
}
`

const FormContainer = styled.div` 
display: flex;
margin-top: 3rem;
align-items: center;
justify-content: center;
@media (max-width: 1200px) {
  flex-direction: column;
}
@media (max-width: 768px) {
  margin-top: 10rem;
}
@media (min-width: 1200px) {
  justify-content: space-evenly;
}
`
export default GetInTouch
