import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations';
import styled from 'styled-components';
import { Title, Review } from '../styles';
import Wave from '../components/Wave';

const Reviews = () => {
  return (
    <motion.div variants ={pageAnimation} initial="hidden" animate="show" exit="exit">
      <ReviewsHeader>
        <ReviewTitle>
          <h2>Reviews</h2>
        </ReviewTitle>
        <Wave />
      </ReviewsHeader>
        <Review1><p>“Just like to thank Emma for these most excellent cocktails purchased to celebrate our Let’s Stay Home” 10th wedding anniversary. Both are excellent, the salted caramel Espresso Martini does blow your socks off…Neither are going to last the evening though hic” – Chris</p></Review1>
        <Review2><p>“We had a cocktail masterclass in the garden – pitched perfectly and loads of fun. Cocktails were delicious!“ – Helen</p></Review2>
        <Review3><p>“Quick to respond to questions prior to order. Hand delivered fresh and cold, ready to drink! Will definitely be placing another order and highly recommend.” – Bindu</p></Review3>
        <Review4><p>“Phew! Best Margarita I’ve had for many many years. Thank you. Your recipe was perfect!” – Sarah</p></Review4>
        <Review5><p>“We really enjoyed the day very much and the cocktails went down a storm!!” – Rachel</p></Review5>
        <Review6><p>“Thank you so much it was great! Drinks were fantastic, everyone was saying how good there were.” - Hayley</p></Review6>
      <Review7><p>“I have used Let’s Stay Home a couple of times already, what a fabulous idea. The cocktails are superb and so easy to drink. My only regret is that we’re four adults in the household and I had to share” – Sarah</p></Review7>
      <Review8 style={{textAlign: "right" }}><p >“What an inspired idea to provide us with yummy cocktails and also getting us all in the road to talk to our neighbours (at a social distance). Thank you for your hard work and for raising so much money for the NHS.” – Geof and Denise</p></Review8>
    </motion.div>
  )
}


const ReviewsHeader = styled.div`
position: relative;
min-height: 50vh;
display: flex;
justify-content: center;
padding: 2rem 4rem;
background: #98e9d1;
`

const ReviewTitle = styled(Title)` 
h2{
  color: white;
}
`

const Review1 = styled(Review)`
display: flex; `
const Review2 = styled(Review)`
display: flex;
p {
  margin-left: auto;
}
 `
const Review3 = styled(Review)`
display: flex; `
const Review4 = styled(Review)`
display: flex;
p {
  margin-left: auto;
} `
const Review5 = styled(Review)`
display: flex; `
const Review6 = styled(Review)`
display: flex;
p {
  margin-left: auto;
} `
const Review7 = styled(Review)`
display: flex;
 `
const Review8 = styled(Review)`
display: flex;
p {
  margin-left: auto;
} `

export default Reviews
