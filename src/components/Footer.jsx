import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h1> AUTOPRIME</h1>
           <Link>No2,  ikeja,Lagos,Nigeria</Link>
           <Link>Email: info@autoprime.com</Link>
           <Link>+23481000998877</Link>
           <div className='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
          </div>
          <div className='footer-link-items'>
            <h2>Company</h2>
            <Link to='/'>Cars</Link>
            <Link to='/'>Career</Link>
            <Link to='/'>Affiliate</Link>
            <Link to='/'>Abouut Us</Link>
            <Link to='/'>Privacy policy</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Services</h2>
            <Link to='/'>Swap</Link>
            <Link to='/'>Repair</Link>
            <Link to='/'>Car Parts</Link>
            <Link to='/'>Car Sales</Link>
            <Link to='/'>Customization</Link>
            <Link to='/'>Old Car Purchase</Link>
          </div>
          
          <div className='footer-link-items'>  
          <h3>Subscribe to our Newletter</h3>
          <form>
            
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            
            <button className='outline'>Subscribe</button>
          </form>
        </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          {/* <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              AUTOPRIME
            </Link>
          </div> */}
          <small className='website-rights'>© 2023 AutoPrime. All rights reserved</small>
        
        </div>
      </section>
    </div>
  );
}

export default Footer;
