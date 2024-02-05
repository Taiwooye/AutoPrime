import HeroSection from '../HeroSection';
import Layout from '../Layout';
import Sublayer from '../Sublayer';
import Cards from '../Cards';
import Subfooter from '../Subfooter';


function Home() {
  return (
    <div className='home'>
      <HeroSection />
      <Cards />
      <Layout/>
      <Sublayer/>
      <Subfooter/>
  
    </div>
  )
}

export default Home;
