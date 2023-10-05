import React from 'react'
import './Servicemiddle.css';
import toyota from '../images/toyota.png';
import toyota2 from '../images/toyota2.png';

function Servicemiddle() {
  return (
    <>   
    <div className='servicemiddle-container'>

    <h2><span>Car</span> <span style={{color:'green'}}>Swap</span> </h2>
    <h1 style={{ maxWidth:800 }} >Looking to upgrade or switch to a diffrent model? Our car swap service allows you to trade 
    in your current vehicle and get behind the wheel of your dream car. Experiment the joy of</h1>
    <h3> drving a new vehicle without the hoosle of selling your old one.</h3>
    <button className='serbutton'>Reserve Now </button>

    <div className="servicecard">
        <img src={toyota} alt=""  className='img'/>
        <img src={toyota2} alt="" className='img' />
          </div>
     </div>
     
     </>
  )
}

export default Servicemiddle
