import React from 'react';
import styled from 'styled-components';
import { Image, Title } from '../styles';
import cocktailPour  from '../img/cocktail pour.jpg';

const GetInTouch = () => {
  return (
    <div>
      <Title>
        <h2>Get In <span>Touch</span></h2>
      </Title>
      <FormContainer>
      <ImagePour>
        <img src={cocktailPour} alt="cocktail being poured"/>
      </ImagePour>
        <Form>
          <input type="text" placeholder="Full Name"/>
          <input type="email" placeholder="Email Address" />
          <textarea name="request" id="" cols="30" rows="10"></textarea>
          <button>Submit</button>
        </Form>
      </FormContainer>
      
    </div>
  )
}

const ImagePour = styled(Image)` 
flex: 0;
img {
  width: 70vh;
}
;`

const Form = styled.form` 
display: flex;
flex-direction: column;
padding: 5rem 20rem;

input, textarea {
  border: none;
  width: 150%;
  outline: none;
  padding: 1rem 2rem;
  margin-top: 1rem;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  font-size: 1.4rem;
  background: rgba(255,255,255,0.8);
  &:focus {
    border: 5px solid rgba(106,194,128,0.7);
    color: #504c4c;
    background: white;

  }
}

button {
  margin-top: 1rem;
  width: 150%;
}

`

const FormContainer = styled.div` 
display: flex;
`
export default GetInTouch
