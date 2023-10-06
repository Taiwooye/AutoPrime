import React from 'react'
import './Serviceorder.css';


function Serviceorder() {
  return (
    <>   
    <div className='serviceorder-container'>
    <div className="serviceorder">
      
    <h2><span>Pre</span><span style={{color:'green'}}>-Order</span> </h2>

    <h3 style={{maxWidth:'760px'}}> You can choose a vehicle you prefer, and we'll proceed with placing an order for it on your behalf.</h3>
    <button className='serbutton'>  Order Now</button>

          </div>
     </div>
     
     </>
  )
}

export default Serviceorder
