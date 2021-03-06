import React from 'react';
import { Title } from '../styles';
import styled from 'styled-components';
import cocktails from '../img/cocktails4.jpg';
import espresso from '../img/espresso in flowers.jpg';
import rums from '../img/rumImage.jpg'
import selection from '../img/cocktailSelection.jpg';
import event from '../img/eventTable.jpg';
import jamJars from '../img/jamJars.jpg';
import zoom from '../img/zoom.jpg';
import plastics from '../img/plastics.jpg';
import cocktailVideo from '../img/cocktailVideo.mp4';



const Gallery = () => {
  return (
    <>
    <Title>
    <h2>Gallery</h2>
  </Title>
    <GalleryStyle className="gallery">
      <Slideshow>
        <img src={cocktails} alt="cocktails"/>
        <img src={espresso} alt="espresso"/>
        <img src={rums} alt="rums"/>
        <img src={selection} alt="selection of cocktails"/>
        <img src={event} alt="event"/>
        <img src={jamJars} alt="cocktails in jam jars"/>
        <img src={plastics} alt="cocktails plastics by a stream"/>
        <img src={zoom} alt="zoom cocktail meeting" />
        <video src={cocktailVideo}></video>
        </Slideshow>
      </GalleryStyle>
      </>
  )
}


const GalleryStyle = styled.div`
display: flex;
margin: 2rem 10rem;
justify-content: center;

 `


const Slideshow = styled.div`
margin-top: 5rem;
display: flex;
justify-content: center;
flex-wrap: wrap;
img, video {
  width: 15rem;
  height: 15rem;
  margin: 3rem 3rem;
  object-fit: cover;
  border-radius: 3rem;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2)
  }
}
`
export default Gallery
