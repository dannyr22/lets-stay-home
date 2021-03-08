import React from 'react';
import styled from 'styled-components';

const Triangle = () => {
  return (
    <TriangleSvg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill" fill="#FFFFFF" fill-opacity="1"></path></TriangleSvg>
  )
}


const TriangleSvg = styled.svg` 
position: absolute;
bottom: -1%;
`
export default Triangle
