import React, {useState} from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';


const BurgerNav = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

const StyledBurger = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
top: 3.5rem;
right: 0.5rem;
display: flex;
z-index: 20;
display: none;
div{
  width: 2rem;
  height: 0.25rem;
  background-color: ${({open}) => open ? '#eee' : '#333'};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;

  &:nth-child(1) {
    transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'}
  }

  &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)' };
    opacity: ${({ open }) => open ? 0 : 1};
  }

  &:nth-child(3) {
    transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'}
  }
}

@media (max-width: 1200px) {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
`
export default BurgerNav