import React from 'react';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Layout from '../Layout';
import Sublayer from '../Sublayer';
import Cards from '../Cards';
import Subfooter from '../Subfooter';

function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Layout/>
      <Sublayer/>
      <Subfooter/>
      <Footer />
    </div>
  )
}

export default Home;
