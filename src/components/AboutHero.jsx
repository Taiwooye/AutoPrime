import './AboutHero.css';
import About from '../images/About.jpg';

function AboutHero() {
  return (
     
    <div className='hero-container'>

    <img className='hero-container-img' src={About} alt="Slide" />
    <h2>Our Focus Customer Satisfaction</h2>
    <h1 style={{ maxWidth:700 }} >We strive to understand customers</h1>
    <h1> needs, and exceed <span style={{color:'green'}}>their expectations.</span></h1>
   
     </div>
  )
}

export default AboutHero
