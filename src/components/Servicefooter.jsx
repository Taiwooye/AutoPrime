import React from 'react'
import './Servicefooter.css'
import bmw from '../images/bmw.png';
import honda from '../images/honda.png';
import audi from '../images/Frame 142.png';
import chevrolet from '../images/chevrolet-4.png';
import hyundai from '../images/hyundai.png';
import vector from '../images/vector.png';
import benzz from '../images/benzzz.png';

export default function Servicefooter() {
    const logolist = [
        {
          'image': honda,
        },
        {
          'image': benzz,
        },
        {
          'image': vector,
        },
        {
          'image': audi,
        },
        {
          'image': bmw,
        },
        {
          'image': chevrolet,
        },
        {
          'image': audi,
        },
        {
          'image': chevrolet,
        },
        {
          'image': hyundai,
        },
    ]

  const myList = [
    {
   
      'title': " Discover an impressive inventory of meticulously selected cars for sale. Whether you're in serach of a sleek saden, a spacious SUV, or a sporty coupe, we have a wide variety of makes and models to choose from. Our team will assist you in finding the perfect vehicle choose from. Our team will you in finding the perfect vehicle thtat matches your preferences and fits your budget.",

    }
   
  ];

  return (

    <div className='about-container'>

  
    <div className="rightfooter">

{myList.map((items) => {

return (
  
  <div key={items.title} className='rightfooter'>
    
   
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

  <div className="left">

<div className="leftfooter" style={{height:'650px', }}>
   
<div className='service-cardm'>
         

 {logolist.map((items) => {
  
  return (
    
    
    <div key={items.title}>

    

     
    <div className='service-cardn'>
      
          <img src={items.image} alt="" className="service-img" />
     
     
          
          </div>

      
     </div> 

   
  );
  
  }
)} 
</div>
</div>
</div>
  </div>

  
  )
  
}
