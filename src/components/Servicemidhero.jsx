import React from 'react'
import './Servicemidhero.css'
import car from '../images/bmwservice.png';

export default function AboutSubhero() {

  const myList = [
    {
   
      'title': " Discover an impressive inventory of meticulously selected cars for sale. Whether you're in serach of a sleek saden, a spacious SUV, or a sporty coupe, we have a wide variety of makes and models to choose from. Our team will assist you in finding the perfect vehicle choose from. Our team will you in finding the perfect vehicle thtat matches your preferences and fits your budget.",
     

    }
   
  ];

  return (

      <div className='about-container'>

      <div className="leftser">

      <img src={car} alt=""style={{position:'inherit', width:'450px', height:'450px', objectFit:'cover' }} />
    
      </div>

    
      <div className="rightser">

{myList.map((items) => {
  
  return (
    
    <div key={items.title}>
      
     
     <div   style={{position:'inherit', height:'100%'}} >
        <p style={{ fontSize:'30px', fontWeight:'700'}}>Car <span style={{color:'green',}}>Sales</span></p>
     <p className='ser-tag'>{items.title}</p>
     <button className='serbutt'>Shop Now</button>
     </div>  

    

    </div>        
      
   
  );
  }
)} 

    </div>     
    
    
    </div>
    
  
  )
}
