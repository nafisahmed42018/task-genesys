import React from 'react';
import './hero.css';
import { heroImages } from './hero';

const Hero = () => {
  return (
    <div className='hero__container'>
      <div className='image__container'>
        {heroImages.map(item => (
          <img src={item.image} alt='' key={item.id} draggable={false} />
        ))}
      </div>
      <div className='text__container'>
        <h1>Sports Clothing & Fitness Equipment Shopify Theme</h1>
        <a href='#latest'>
          <button className='hero__button'>View Shop</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
