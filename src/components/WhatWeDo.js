import React from 'react';
import cocktails from '../img/cocktails6.jpg';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';


const WhatWeDo = () => {
  return (
      <Parallax bgImage={cocktails} strength={800} blur={5}
        renderLayer={percentage => (
          <div
          style={{ position: 'absolute', height: percentage * 700, width: percentage * 500,}}
          />
        )}
        >
      <ParallaxContent>
      <h2>What We Do</h2>
      <p>Let’s Stay Home is a cocktail delivery service run by professional bartenders.</p>
      <p>We’ve worked in bars across London, Asia and New Zealand and it’s our passion to bring exceptional, handmade, fresh drinks to you.</p>
      <p>Established in May 2020, Let’s Stay Home brings bar quality cocktails to your doorstep. We take care of all the measuring, shaking and juicing to deliver ready to drink cocktails to you.</p>
      <p>We regularly update our menus to utilize the freshest ingredients we can get our hands on and are always up for the challenge of designing a bespoke drink for you. You can find our cocktails under the fresh cocktails tab or get in touch to find out more.</p>
      </ParallaxContent>
      </Parallax>
  
  )
}

export default WhatWeDo

const ParallaxContent = styled.div` 
font-weight: 700;
text-align: center;
padding: 5rem 5rem;
text-shadow: 3px 3px 5px black;
`
