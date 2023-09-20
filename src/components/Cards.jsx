import React from 'react'
import './Cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { faRetweet} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaKey } from 'react-icons/fa';
import frame1 from '../images/ford-8.png';
import frame2 from '../images/Frame 142.png';
import frame3 from '../images/Vector.png';
import frame4 from '../images/hyundai.png';
import frame5 from '../images/bmw.png';
import frame6 from '../images/chevrolet-4.png';


// import frame8 from '../images/ford.jpg';


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
      <h2 className='car'>Car Repair and Maintenance</h2>
      <p>We fix any mechanical or electical issues that may
        arise with your vehicles and return them back in better conditions.</p>
    </div>
</div>
<br />

<div className="marquee">
  <div className="marquee-content"> 

    <div className="marquee-item">
    <img src={frame1} alt="" className='marquee-img' />
    </div>
    <div className="marquee-item">
    <img src={frame2} alt="" className='marquee-img' />
    </div>
    <div className="marquee-item">
    <img src={frame3} alt="" className='marquee-img' />
    </div>
    <div className="marquee-item">
    <img src={frame4} alt="" className='marquee-img' />
    </div>
    <div className="marquee-item">
    <img src={frame5} alt=""  className='marquee-img'/>
    </div>
    <div className="marquee-item">
    <img src={frame6} alt=""  className='marquee-img' />
    </div>
    {/* <div className="marquee-item">
    <img src={frame7} alt="" />
    </div> */}

    

    </div>
    </div>

    </div>


<div className="second--card">
<h5 style={{color:'green'}}>Available Promo</h5>
<h2 style={{color:'green'}}>Unbeatable <bold style={{color:'white'}}>deals for a limited time.</bold></h2>



<section className="cards-wrapper">
  <div className="card-grid-space1">
        {/* <img src={frame1} alt="" /> */}
      <div>
        <p className='explore-p'>Explore 10% off on all Benz purchases during
        our Summer Sale! Limited time offer.</p>
       <button className='explore-btn'>Claim Now</button>
      </div>
  </div>
  <div className="card-grid-space2">
        {/* <img src={frame2} alt="" /> */}
      <div>
        <p className='explore-p'>Purchase any BMW and receive a compimentart
        1-year Maintenance package.</p>
       <button className='explore-btn'>Claim Now</button>
      </div>
  </div>
  <div className="card-grid-space3">
  {/* <div className="date">
          <h2>Expires july 31st,2023</h2>
        </div> */}
      <div>
        <p className='explore-p'>Enjoy 0% APR financing for 36 months on all new car purchases, Subject to credit approval.</p>
       <button className='explore-btn'>Claim Now</button>
      </div>
  </div>



</section>
 
</div>

<div className="second--card">
<h5 style={{color:'green'}}>Browse Inventory</h5>
<h2 style={{color:'white'}}>Explore our Extensive inventory and Find <bold style={{color:'green'}}>Ideal Vehicle</bold></h2>

<div className="scoller">
  <div className="scroller-item">
  <article className="card card--1">
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    
    <h3 className="card__title">BMW 3 Series 320D X Drive  </h3>
    <p>Gran Turismo Luxury</p>
   <h6>Year Mileage</h6>
   <h6 className="card__by">2021 12500 miles  </h6>
    <span>#31,345,000</span>
  </div>
</article>
  </div>


  <div className="scroller-item">
  <article className="card card--2">
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    
    <h3 className="card__title">BMW 3 Series 320D X Drive  </h3>
    <p>Gran Turismo Luxury</p>
   <h6>Year Mileage</h6>
   <h6 className="card__by">2021 12500 miles  </h6>
    <span>#31,345,000</span>
  </div>
</article>
  </div>
  <div className="scroller-item">
  <article className="card card--3">
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    
    <h3 className="card__title">BMW 3 Series 320D X Drive  </h3>
    <p>Gran Turismo Luxury</p>
   <h6>Year Mileage</h6>
   <h6 className="card__by">2021 12500 miles  </h6>
    <span>#31,345,000</span>
  </div>
</article>
  </div>
  <div className="scroller-item">
  <article className="card card--4">
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    
    <h3 className="card__title">BMW 3 Series 320D X Drive  </h3>
    <p>Gran Turismo Luxury</p>
   <h6>Year Mileage</h6>
   <h6 className="card__by">2021 12500 miles  </h6>
    <span>#31,345,000</span>
  </div>
</article>
  </div>
  <div className="scroller-item">
  <article className="card card--5">
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    
    <h3 className="card__title">BMW 3 Series 320D X Drive  </h3>
    <p>Gran Turismo Luxury</p>
   <h6>Year Mileage</h6>
   <h6 className="card__by">2021 12500 miles  </h6>
    <span>#31,345,000</span>
  </div>
</article>
  </div>
  <div className="scroller-item">
  <article className="card card--6">
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    
    <h3 className="card__title">BMW 3 Series 320D X Drive  </h3>
    <p>Gran Turismo Luxury</p>
   <h6>Year Mileage</h6>
   <h6 className="card__by">2021 12500 miles  </h6>
    <span>#31,345,000</span>
  </div>
</article>
  </div>
  <div className="scroller-item">
  <article className="card card--7">
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    
    <h3 className="card__title">BMW 3 Series 320D X Drive  </h3>
    <p>Gran Turismo Luxury</p>
   <h6>Year Mileage</h6>
   <h6 className="card__by">2021 12500 miles  </h6>
    <span>#31,345,000</span>
  </div>
</article>
  </div>
  <div className="scroller-item">
  <article className="card card--8">
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    
    <h3 className="card__title">BMW 3 Series 320D X Drive  </h3>
    <p>Gran Turismo Luxury</p>
   <h6>Year Mileage</h6>
   <h6 className="card__by">2021 12500 miles  </h6>
    <span>#31,345,000</span>
  </div>
</article>
  </div>
</div>
 

</div>


    
</>

  
  )
}

export default Cards
