import React from 'react'
import './AboutSubhero.css'
import hot1 from '../images/Frame 108.jpg';
import hot2 from '../images/Frame 107.jpg';
import hot3 from '../images/Frame 110.jpg';


export default function AboutSubhero() {

  const myList = [
    {
      'title': "Autoprime is a leading automotive company dedicated to providing exceptional car sales, services, and customization solutions to our valued customers. Since our establishment in 2017, we have been committed to delivering unparalleled quality, reliability, and customer saisfaction.",
      'subheading':"At Autoprime, we understand that buying a car is more than just a transcation, it's an emotioal experience. That's why we strive to create a wecoming and transparent environt, fostering long term relations with our customers built on trust and intergrity. Our commitment to excellence drives us to continuously improve and adapt to the ever-evolving automotive landscape."
    
    }
   
  ];

  return (

      <div className='about-container'>


      <div className="Subleft">
        <img src={hot1} alt=""  className='hh' />
        <img src={hot2} alt=""  className='he' />
        <img src={hot3} alt="" className='hr'/>

      </div>

      <div className="Subright">

          <h3 className='out-h3'>About <span style={{color:'green', fontSize: '35px'}}>AutoPrime</span> </h3>

        {myList.map((items) => {
          
          return (
            
            <div key={items.title}>
              
              <ul className='Subleft--ul'>
         
              <li  className='Subleft--li' style={{width:'100%', height:'100%'  }}>
                
            <div style={{marginRight:'15px'}} >
            </div>
             <div   style={{position:'inherit', height:'100%'}} >
             <h6 style={{ maxWidth:565,fontSize:'20px' }}>{items.title}</h6>
              <h6 style={{ maxWidth:615,fontSize:'20px' }}>{items.subheading}</h6>
             </div>  
       
              </li>
            </ul>

            </div>          
           
          );
          }
        )}
      </div>
      
    
    </div>
  
  )
}
