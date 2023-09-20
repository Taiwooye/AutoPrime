import React from 'react'
import './AboutMidhero.css'
import frame1 from '../images/Frame 49.jpg';
import frame2 from '../images/Frame 110.jpg';
import frame3 from '../images/Frame 111.jpg';
import frame4 from '../images/Frame 113.jpg';
import frame5 from '../images/Frame 114.jpg';
import frame6 from '../images/Frame 112.jpg';


export default function Layout() {

  const myList = [
    {
      'title': "Our love for automobiles is the driving force behind our work. We are passionate about cars and strive to share that passion with our customers, providing them with exceptional automotive experiences",
      'date': "Passion for Cars",
      'image': frame1
    },
    {
      'title': "We strive for excellence in everything we do, from the quality of our services to the professionalism of our team. We are committed to continuous improvement and delivering the best possible outcomes.",
      'date': "Excellence",
      'image': frame3
    },
    {
      'title': "We conduct ourselves with professionalism, maintaining a high level of expertise, and delivering reliable and knowledgeable service. We take pride in our company with represnt our company with professionlism at all times",
      'date': "Prefessionalism",
      'image': frame6
    },
   
  ];

  const coList = [
    {
        'date': "Integrity",
      'title': "We conduct business with the highest standards of honesty,ethics, and transparency. We belive  in building trust with oout=r customers, empoyees and partners  through integrity in all our actions.",
      
      'image': frame2
    },
    {
      'title': "We value long-term relationship with our customers, employees, and partners. We belive in nuturing these relationship through trust,, reliability and nutual respect.",
      'date': "Lasting Relationship",
      'image': frame5
    },
    {
      'title': "We embrace innovation and stay at the forefront of the automotive industry. We encourage crativity, adaptability, and forward thinking to provide innovative solutions that meet the evolving needs of our customers.",
      'date': "Innovation",
      'image': frame4
    },
   
  ];

  return (
<>


<h3 className='lay-out-h3'style={{fontSize:'32px', fontWeight:'800'}}> Our <span style={{color:'green'}}> Value</span> & Culture</h3>
    

 <div className='container'>
 <div className="right-there">   

{coList.map((items) => {
  
  return (
    
    <div key={items.title}>
      
      <ul className='right--ul'>
 
      <li  className='right--li' style={{width:'100%', height:'100%'  }}>
        
    <div style={{marginRight:'20px'}} >
    <img  className='img-div'  src={items.image} alt="slide"  style={{position:'inherit', width:'230px', height:'95%', }} />
    </div>
     <div   style={{position:'inherit', width:'400px', height:'100%'}} >
     <h6 className='h6'>{items.date}</h6>
     <p className='p--tag' style={{ maxWidth:545,fontSize:'20px' }}>{items.title}</p>
     
     </div>  

      </li>
    </ul>

    </div>          
   
  );
  }
)}
</div>
      

<div className="right-there">   

{myList.map((items) => {
  
  return (
    
    <div key={items.title}>
      
      <ul className='right--ul'>
 
      <li  className='right--li' style={{width:'100%', height:'100%'  }}>
        
    <div  style={{marginRight:'20px'}} >
    <img className='img-div'  src={items.image} alt="slide"  style={{position:'inherit', width:'230px', height:'95%', }} />
    </div>
     <div   style={{position:'inherit', width:'400px', height:'100%'}} >
     <h6 className='h6'>{items.date}</h6>
     <p  className='p--tag'  style={{ maxWidth:545,fontSize:'20px' }}>{items.title}</p>
     
     </div>  

      </li>
    </ul>

    </div>          
   
  );
  }
)}
</div>
      
    
    </div>
  
</>
  )
}
