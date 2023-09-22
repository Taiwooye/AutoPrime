import React from 'react'
import './AboutMidfooter.css'
import group from '../images/group.jpg';

export default function AboutSubhero() {

  const myList = [
    {
      'title': " Discover exciting opportunities at Autoprime and become part of our",
      'subheading':"passionate team"

    }
   
  ];

  return (

      <div className='about-container'>


      <div className="leftmid">
      
      <h3 className='about-h3'
       style={{color:'green', fontSize: '20px'}}> 
       Join our automotive family and drive your career forward
       </h3>

{myList.map((items) => {
  
  return (
    
    <div key={items.title}>
      
      <ul className='left--ul'>
 
      <li  className='left--li' style={{width:'100%', height:'100%'  }}>
        
    {/* <div style={{marginRight:'15px'}} >
    </div> */}
     <div   style={{position:'inherit', height:'100%'}} >
     <p className='p-tag'>{items.title}</p>
      <p className='p-tag2' style={{color:'green'}}>{items.subheading}</p>
     </div>  

      </li>
    </ul>
    
    <button className='midbutt'>View Openings</button>
    </div>        
      
   
  );
  }
)}


      </div>

    
      <div className="rightmid">
    <img src={group} alt=""style={{position:'inherit', width:'700px', height:'600px', objectFit:'cover' }} />
    </div>
  
      
    
    </div>
  
  )
}
