import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Services from './Services';
import Service2 from './Service2';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Service2 />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
