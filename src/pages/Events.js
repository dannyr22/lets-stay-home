import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations';
import styled from 'styled-components';
import { Title } from '../styles';
import eventTable from '../img/eventTable.jpg';
import cocktails from '../img/cocktails1.jpg'
import kilner from '../img/Kilner.jpg';

const Events = () => {
  return (
    <motion.div variants ={pageAnimation} initial="hidden" animate="show" exit="exit">
      <EventStyle>
        <Title>
          <h2><span>Got a wedding, birthday party or special day coming up?</span></h2>
          <h2 style={{textAlign: "end", marginTop: "2rem"}}>Have no fear, we provide top-notch catering services</h2>
        </Title>
        </EventStyle>
        <EventsInformation>
          <h3>Events</h3>
          <p>Looking to step your event up? Let’s Stay Home has the solution.</p>
          <p>We now offer cocktail bar setups available for hire at private events - house parties, birthdays, hen parties, weddings, office parties and corporate events.</p>
          <p>We can tailor a package for all occasions, we work with each client to create the perfect menu for your event, ideal set up to allow you and your guests to enjoy our range of fresh cocktails and if you fancy, even try your hand at making them.</p>
        <p>Below are examples of our previous work to show you the range we offer. Get in contact today for more information. Letsstayhome75@gmail.com</p>
        <ImageContainer>
          <img src={eventTable} alt="Events cocktail table" />
        </ImageContainer>
        <CocktailMasterclasses>
          <h3>Cocktail Masterclasses</h3>
          <p>If there’s one thing we know how to do, it’s make a good cocktail. And now we’re inviting you to try your hands at it too.</p>
          <p>Learn to shake, mix and muddle your cocktail favourites with our Let’s Stay Home bartenders. Whether you’re planning a hen-do, stag-do, birthday celebration, or you just want an excuse to get together for a catch-up over cocktails, then our masterclass is the way to do it.</p>
          <p>We tailor each masterclass individually from the cocktail menu to how much cocktail history you want to walk away with to impress your friends. Our masterclasses can work for groups of all sizes and guarantees to provide you with the skills to make bar quality drinks at home.</p>
          <p>Get in touch today for more information and let the good times be-gin.</p>
        </CocktailMasterclasses>
        <ImageContainer>
          <img src={cocktails} alt="Events cocktail table" />
        </ImageContainer>
        <BartendersForHire>
          <h3>Bartenders For Hire</h3>
          <p>Our Let’s Stay Home bartenders are now available to hire for your next event. We cater for private parties, corporate events, birthdays and weddings with flexible packages to meet all needs and requirements.</p>
          <p>Whether you would like a bespoke cocktail menu designed, bartenders shaking it up in your kitchen or just an extra pair of hands to open and serve bottles, we’re here. Along with the bartenders, we can also supply the drinks, glassware and decor.</p>
          <p>No event is too large or too small and we love helping create a showstopper for any event.</p>
        </BartendersForHire>
        <CocktailsOnTap>
          <h3>Cocktails on Tap</h3>
          <p>Looking for something spectacular to impress your guests at your next party? Then look no further.</p>
          <p>Served from five litre kiln jars comes our latest party favourite, COCKTAILS ON TAP. You pick the cocktails then sit back, relax and let us start the party for you.</p>
          <p>We work with you to create your bespoke cocktail menu, deliver to you the freshest cocktails ready to serve on tap for your event and provide all the garnishes, glassware and decoration to make a real spectacle.</p>
        </CocktailsOnTap>
        <ImageContainer>
          <img src={kilner} alt="Events cocktail table" />
        </ImageContainer>
        </EventsInformation>
    </motion.div>
  )
}

const EventStyle = styled.div`
padding: 2rem 5rem;
position: relative;
min-height: 50vh;
display: flex;
justify-content: center;
 `

const EventsInformation = styled.div` 
padding: 2rem 3rem;
`
const ImageContainer = styled.div` 
width: 100%;
display: flex;
margin-top: 5%;
justify-content: center;
img {
  border-radius: 10px;
  width: 60%;
}
`
const CocktailMasterclasses = styled.div`
padding: 5rem 3rem;
text-align: end;
`

const BartendersForHire = styled.div`
padding: 5rem 3rem;
 `

const CocktailsOnTap = styled.div`
padding: 5rem 3rem;
text-align: end;
` 
export default Events
