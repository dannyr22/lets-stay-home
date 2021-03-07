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
  &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #98e9d1;
  }
}

body {
  background-color: white;
  font-family: 'Lato', sans-serif;
  width: 100%;
}

button {
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 3px solid #1d3550;
  background-color: #98e9d1;
  color: white;
  transition: all 0.5s ease;
  border-radius: 5px;
  &:hover {
    color: #98e9d1;
    background-color: white;
  }
}

h2 {
  font-weight: lighter;
  font-size: 3rem;
  color: #98e9d1;
  @media (min-width: 1600px) {
    font-size: 4rem;
  }
}
h3 {
  color: #98e9d1;
  font-size: 2.5rem;
  color: #1d3550;
}
h4 {
  font-weight: bold;
}

p {
  padding: 1.5rem 0rem;
  font-size: 1.5rem;
  color: #eee;
  line-height: 150%;
  color: #1d3550;
  font-weight: bold;
  @media (min-width: 1600px) {
    font-size: 2rem;
  }
}

span {
  padding: 1.5rem 0rem;
  color: #1d3550;
  font-weight: bold;
}

.green {
  background: rgba(152,233,209);
}

.white {
  color: white;
}

.greenText {
  color: rgba(152,233,209);
}
`
