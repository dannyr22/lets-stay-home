import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations';
import styled from 'styled-components';
import { Title, FaqSegment } from '../styles';
import { Link } from 'react-router-dom';
import GirlJumping from '../components/GirlJumping';

const Faqs = () => {
  return (
    <motion.div variants ={pageAnimation} initial="hidden" animate="show" exit="exit">
       <FaqsHeader>
        <FaqsTitle>
          <h2>FAQ's</h2>
          <GirlImage>
            <GirlJumpingImage>
              <GirlJumping />
              </GirlJumpingImage>
            </GirlImage>
          <FaqSegment>
            <h3>What is Let’s Stay Home?</h3>
            <p>Established in May 2020, Let’s Stay Home was created to get you the freshest cocktails in your hands. We make cocktails and deliver them to your door, can bring our pop up bar and bartend your event or even teach you and your friends how to do it yourself at home with a cocktail masterclass.</p>
          </FaqSegment>
          <FaqSegment>
            <h3>How long are the cocktails fresh for?</h3>
            <p>Because we use fresh ingredients, our cocktails are best enjoyed within 48 hours of delivery. If you aren't ready to enjoy the cocktail when it's delivered just pop it in the fridge until you are.</p>
          </FaqSegment>
          <FaqSegment>
            <h3>When can you deliver?</h3>
            <p>We deliver seven days a week, 24 hours a day. You pick the time and address and we’ll be there.</p>
          </FaqSegment>
          <FaqSegment>
            <h3>What do I need to do with the cocktails when they are delivered?</h3>
            <p>Drink them, you’ve earned it. It’s always 5pm somewhere, they arrive freshly shaken, chilled and ready to drink. Alternatively pop them in the fridge until you’re ready to enjoy them.</p>
          </FaqSegment>
          <FaqSegment>
            <h3>How do I order?</h3>
            <p>You can call, text or email us 7 days a week with your order, address for delivery and preferred delivery time. All of our contact details are under our contact section click <Link to="/">here</Link> to view.</p>
          </FaqSegment>
          <FaqSegment>
            <h3>I’m planning a party and want cocktails involved, can you help?</h3>
            <p>HELL YEAH! No party is complete without cocktails. We’ve catered house parties, weddings and cocktail masterclasses. Contact us about your event today for more information.</p>
          </FaqSegment>
          <FaqSegment>
            <h3>I can’t see my favourite cocktail on your menu, can you make it?</h3>
            <p>It would be our pleasure, just let us know what it is, we’ll work our magic and have the freshest version to you in no time.</p>
          </FaqSegment>
          <FaqSegment>
            <h3>Can I send my friend a cocktail?</h3>
            <p>Yes, gold star to you for being such a good friend. As long as they’re over 18 and within an 8 mile radius of SM, Surrey we’re there.</p>
          </FaqSegment>
          <FaqSegment>
            <h3>Do you have allergen information?</h3>
            <p>Yes! Let us know what cocktail you’re interested in and we can send you all it’s allergen information.</p>
          </FaqSegment>
          <FaqSegment>
            <h3>Is it ok to answer the door with my dog?</h3>
            <p>This is actually very actively encouraged, Beagles are our favourite but we would love to meet them all.</p>
          </FaqSegment>
          <FaqSegment>
            <h3>How many drinks does one bottle serve?</h3>
            <p>Four in line with cocktail servings, there is a minimum of 250ml of alcohol in each bottle which is the equivalent of five double shots.</p>
          </FaqSegment>
          <FaqSegment>
            <h3>How do I pay?</h3>
            <p>We accept bank transfer or cash on delivery.</p>
          </FaqSegment>
        </FaqsTitle>
      </FaqsHeader>
    </motion.div>
  )
}

const GirlImage = styled.div` 
position: relative;
height: 10vh;
@media (max-width: 1200px) {
 position: static;
 margin: 2rem;
}
`

const GirlJumpingImage = styled.div`
position: absolute;
right: 10%;
svg{
  transform: rotateY(180deg)
}
@media (max-width: 1200px) {
 position: static;
}
`
const FaqsHeader = styled.div`

`

const FaqsTitle = styled(Title)` 
padding-left: 2rem;
text-align: center;
`
export default Faqs