import React from 'react'
import './Cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { faRetweet} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaKey } from 'react-icons/fa';
// import frame1 from '../images/Frame 49.jpg';
// import frame2 from '../images/Frame 107.jpg';
// import frame3 from '../images/Frame 108.jpg';
// import frame4 from '../images/Frame 111.jpg';


function Cards() {
  return (

<>
<div className="main">
<h5 style={{color:'green'}}>Our Exceptional Services</h5>
<h2 style={{color:'white'}}>Range of <bold style={{color:'green'}}>Automotive Solutions</bold> Tailored to <br />
 Exeecd Your Expectations</h2>
<div className="cards">
<div className="icon-card">
      <div className="icon">
      <FaKey className='key' />
      </div>
      <h2 className='car'>Car Sales</h2>
      <p>Offering car sales is a fundamental service
        for a car company,it involves showcasing and 
        selling a range of vehicles to customers.</p>
    </div>
<div className="icon-card">
      <div className="icon">
      <FaKey className='key'  />
      </div>
      <h2 className='car'>Car Swap</h2>
      <p>you can easily trade in your car for another one
        with us at a very good rate.</p>
    </div>
<div className="icon-card">
      <div className="icon">
      <FaKey className='key' />
      </div>
      <h2 className='car'>Car Customization</h2>
      <p>Customization services allows customers to personalize
        their vehicle according to their preferences.</p>
    </div>
</div>

<div className="cards2">
<div className="icon-card">
      <div className="icon">
      <FaKey className='key' />
      </div>
      <h2 className='car'>Pre-Order</h2>
      <p>You choose a vehicle you prefer,
        and we'll proceed with placing an order for it on your behalf.</p>
    </div>
<div className="icon-card">
      <div className="icon">
      <FaKey className='key' />
      </div>
      <h2 className='car'>Car Repair and Maintenance</h2>
      <p>We fix any mechanical or electical issues that may
        arise with your vehicles and return them back in better conditions.</p>
    </div>
<div className="icon-card">
      <div className="icon">
      <FaKey className='key' />

      </div>
      <h2 className='car'>Sales of New Car Parts</h2>
      <p>We relieve customers from the stress of getting genuine new car parts that are compactible with their vehicles .</p>
    </div>
</div>
<br />

<div id="myclock"> 
<marquee>

<div className="carding"><span >Ford</span>
     
  </div>
<div className="carding"><span>Toyota</span>
  </div>
<div className="carding"><span>Camry</span>
  </div>
<div className="carding"><span>Hilux</span>
  </div>
<div className="carding"><span>Lexus</span>
  </div>
<div className="carding"><span>Benz</span>
  </div>
<div className="carding"><span>Honda</span>
  </div>
<div className="carding"><span>Audi</span>
  </div>

</marquee>
    </div>

</div>
    
</>

  
  )
}

export default Cards
