import React from 'react';
import './footer.css';
import { footer } from './footerData';

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='left'>
        <div className='footer__about'>
          <h2>LOGO.</h2>
          <p>Be the first who learns about our great promotions!</p>
        </div>
        <div className='footer__socials'>
          <h3>FOLLOW US</h3>
          <div className='social__links'>
            <a href='https://twitter.com/?lang=en'>
              <i className='bx bxl-twitter'></i>
            </a>
            <a href='https://www.facebook.com/'>
              <i className='bx bxl-facebook'></i>
            </a>
            <a href='https://www.instagram.com/'>
              <i className='bx bxl-instagram'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='center'>
        {footer.map(cat => (
          <div className='footer__item' key={cat.id}>
            <h4>{cat.type}</h4>
            <li>
              {cat.items.map((item, index) => (
                <ul key={index}>{item}</ul>
              ))}
            </li>
          </div>
        ))}
      </div>
      <div className='right'>
        <div className='newsletter'>
          <h3>Subscribe</h3>
          <p>Subscribe our newsletter and get discount 30% off</p>
        </div>
        <div className='sign__up'>
          <input
            className='sign__up-input'
            type='email'
            name='newsletter-signup'
            id='newsletter'
            placeholder='Enter your email...'
          />
          <button className='sign__up-btn'>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
