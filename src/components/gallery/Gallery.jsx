import React from 'react';
import './gallery.css';
import { galleryImages } from './gallery';

const Gallery = () => {
  return (
    <div className='gallery__container'>
      <div className='gallery__title'>
        <h4>gallery</h4>
        <h2>INSTAGRAM</h2>
      </div>
      <div className='gallery__image'>
        {galleryImages.map(item => (
          <img src={item.image} alt='' key={item.id} />
        ))}
      </div>
      <div className='linebreak'></div>
    </div>
  );
};

export default Gallery;
