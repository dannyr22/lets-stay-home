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
        <Form name="contact" action="/contact" method="POST" data-netlify="true" onSubmit="submit">
          <input type="hidden" name="form-name" value="contact"/>
          <input required type="text" placeholder="Name" name="name"/>
          <input required type="email" placeholder="Email Address" name="email"/>
          <textarea required name="request" id="" cols="30" rows="10"></textarea>
          <label htmlFor="mailingList">Check this box if you want to be cool and join our mailing list, just one a month we promise.</label>
          <input type="checkbox" name="mailingList" className="checkbox" required/>
          <button type="submit">Send</button>
        </Form>
      </FormContainer>
      
    </div>
  )
}

const ImagePour = styled(Image)` 
flex: 0;
img {
  width: 70vh;
  border-radius: 2rem;
}
;`

const Form = styled.form` 
display: flex;
flex-direction: column;
padding: 5rem 0rem;
margin-right: 10rem;

input, textarea {
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
  &:focus {
    border: 5px solid rgba(106,194,128,0.7);
    color: #504c4c;
    background: white;

  }
}

button {
  margin-top: 1rem;
  width: 30rem;
}

.checkbox{
  width: 1rem;
}

label{
  padding-top: 1.5rem;
  width: 30rem;
}
`

const FormContainer = styled.div` 
display: flex;
align-items: center;
justify-content: space-between;
`
export default GetInTouch
