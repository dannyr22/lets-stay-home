import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle` 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  display: flex;
  justify-content: center;
}

body {
  background-color: #98e9d1;
  font-family: 'Lato', sans-serif;
 
}

button {
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 1rem 2rem;
  background: transparent;
  border: 3px solid #1d3550;
  background-color: white;
  color: #75B2A0;
  transition: all 0.5s ease;
  border-radius: 5px;
  &:hover {
    color: white;
    background-color: #75b2a0;
  }
}

h2 {
  font-weight: lighter;
  font-size: 4rem;
  color: white;
}
h3 {
  color: white;
  font-size: 2.5rem;
}
h4 {
  font-weight: bold;
}

p {
  padding: 1.5rem 0rem;
  font-size: 2rem;
  color: #eee;
  line-height: 150%
}

span {
  padding: 1.5rem 0rem;
  color: #1d3550;
  font-weight: bold;
}
`
