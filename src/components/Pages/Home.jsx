import React from 'react';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Layout from '../Layout';
import Sublayer from '../Sublayer';
  import Cards from '../Cards';

function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Layout/>
      <Sublayer/>

      <Footer />
    </div>
  )
}

export default Home;
