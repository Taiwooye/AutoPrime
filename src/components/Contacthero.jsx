import React from 'react'
import './Contacthero.css'
import Bg from '../images/contactbg.png';

function Contacthero() {
  return (

    <div className='contact-container'>

<img className='contact-container-img' src={Bg} alt="Slide" />
<div className="write">
<h2 style={{ maxWidth:270 }}>Get In Touch  </h2>
<h1 style={{ maxWidth:500 }} >Reach out and <span style={{color:'green'}}>let's drive</span></h1>
<h1 style={{ maxWidth:500 }}> the conversation forward</h1>

</div>
 </div>

  )
}

export default Contacthero
