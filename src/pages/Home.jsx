import React from 'react';
import Announcement from '../components/announcement/Announcement';
import FeaturedProducts from '../components/featuredProducts/FeaturedProducts.jsx';
import Footer from '../components/footer/Footer';
import Gallery from '../components/gallery/Gallery.jsx';
import Hero from '../components/hero/Hero.jsx';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  return (
    <div className='container'>
      <Announcement />
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
