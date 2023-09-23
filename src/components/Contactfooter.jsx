
import './Contactfooter.css'
import { FaBeer } from 'react-icons/fa';

function CarSidebar() {
  return (
    
    <div className="contact-wrapper">
        <div className="contact-sidebar">
            
   <div className="number1">
   <div className="contact-icon">
   <FaBeer className="icon-con"/>
   </div>
   <div className="texts">
   <h5>Phone number</h5>
    <h6>+234 810 777 6457</h6>
   </div>
   </div>
   <div className="number2">
   <div className="contact-icon">
   <FaBeer className="icon-con"/>
   </div>
   
   <div  className="texts">
   <h5>Email Address</h5>
   <h6>info@autoprime.com</h6>
   </div>
   </div>
   <div className="number3">
   <div className="contact-icon">
   <FaBeer className="icon-con"/>
   </div>
   <div  className="texts">
   <h5>Location</h5>
    <h6>No 2, ikeja, Lagos, Nigeria</h6>
</div>
  
   </div>
    </div>

    <div className="contact-mainsidebar">
        <h3 className="first-h3">Send Message</h3>
    <form >
       <div className="first">

        <input type="text"
        placeholder='Name' />
       </div>

       <div className="second">
        <input type="text"
         placeholder='Email' />
       </div>
  
    </form>
    <br />
    <div className="third">
    
        <input type="text" name="" id="" 
        placeholder='Subject'/>
      
        <input type="text" name="" id=""
         placeholder='Message'/>
        
       </div>

       <button className='third--button'>Send Message</button>
    </div>
    </div>

  )
}

export default CarSidebar
