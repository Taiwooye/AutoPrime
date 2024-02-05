import './Serviceshero.css'
import ser from '../images/Service.png';

function Serviceshero() {
  return (

    <div className='service-container'>

<img className='service-container-img' src={ser} alt="Slide" />
<div className="service-write">
<h2 style={{ maxWidth:450 }}>Schedule A Test Drive  </h2>
<h1 style={{ maxWidth:570 }} > Experience The Thrill  </h1>
<h1 style={{ maxWidth:430 }}><span style={{color:'green'}}>First-hand </span> With a  </h1>
<h1 style={{ maxWidth:290 }}>Test Drive.</h1>
  <button className='service--button'>Schedule </button>

</div>
 </div>

  )
}

export default Serviceshero
