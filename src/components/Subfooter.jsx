import React from 'react';
import './Subfooter.css'
import subfooter from '../images/subfooter.jpg';

function Subfooter() {
  return (
    <>
     <h2 className="sub--h2" style={{color:'green', fontSize:'40px', fontWeight:'700'}}>Get a Quote</h2>
    <div className='container--footer'>


    <div className="left">
    <form >
       <div className="first">
       <p>Name</p>
        <input type="text" />
        <p>Location</p>
        <input type="text" />
       </div>


       <div className="second">
       <p>Email</p>
        <input type="text" />
        <p>Service</p>
        <input type="text" />
       </div>

      
    </form>
    <div className="third">
       <p>Message</p>
        <input type="text" name="" id="" />
       </div>

       <button className='third--button'>Send Message</button>
    </div>

    <div className="right">
    <img src={subfooter} alt=""style={{position:'inherit', width:'700px', height:'650px' }} />
    </div>
    
  
  </div>
  </>
  )
}

export default Subfooter
