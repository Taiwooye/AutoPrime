import React from 'react';
import './HeroSection.css';
import Homepic from '../images/home.jpg';
import group from '../images/home2.jpg';
import frame2 from '../images/home3.jpg';
import  { useState, useEffect } from 'react';
import {Parser} from "html-to-react";


const slides = [
  {
    image: Homepic,
    text: '<b>Discover your perfect drive</b>',
    note:"Find The Car Of Your Dream From Our Wide Selection <strong className='strong'> Top quality vehicles. </strong>",
  },
  {
    image: group,
     text: '<b>Keeping your wheel rolling smoothly</b> ',
    note:"Trust our expert techinicians for reliable car <strong className='strong'>repair and maintenance </strong> services.",
  },
  {
    image: frame2,
     text: '<b>Personalize Your Autommotive Vision</b>',
    note:"Bring your unique style to life with our <strong className='strong'> expert customization </strong className={strong}>services.",
  },
  // Add more slides
];

function HeroSection() {

  const [currentIndex, setCurrentIndex] = useState(0);
 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];
  const name = currentSlide.text;
  const note = currentSlide.note;

  const htmlPaser = new Parser();
  return (
    
    <div className='hero-container' >

    <img className='hero-container-img' src={currentSlide.image} alt="Slide" />
    <h2 class="animate__animated animate__backInRight">{htmlPaser.parse(name) }</h2>
    <h1 style={{ maxWidth:900 }} class="animate__animated animate__backInRight" >{htmlPaser.parse(note)}</h1>
    <button className='btns'>Explore</button >
     </div>
  )
}
export default HeroSection

