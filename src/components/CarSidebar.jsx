import React from 'react'
import './CarSidebar.css'

function CarSidebar() {
  return (
    
    <div className="wrapper">
        <div className="sidebar">
      Sticky sidebar
    </div>

    <div className="mainsidebar">
   <input type="text" className='mainsidebar-input'
   placeholder='Enter Keywords like "Suv" or "Chevolet 2022"'/>
    <button className='mainsidebar-butt'>Search</button>

    </div>
  
  </div>
  )
}

export default CarSidebar
