import React from 'react'
import './Sublayer.css'

function Sublayer() {

    
  const array = [
    {
      'title': "I recently used this company's car swapping service, and it was a breeze. i needed a  larger vehicle for a weekend trip, and they made the process incredibly convenient. The staff was friendly and organized, ensuing that all the necessary paperwork and documentation were taken care of.",
      'auther': "Aleander, Hilux 2013",
      'id':1
    
    },
    {
      'title': "If you're looking to customize your car, this company is the place to go! Iwanted to add some personal touches to my vehicle, and the team here did an outstanding job. They were extremely attentive and listened to my ideas, offering their own expert suggestion along the way.",
      'auther': "John, BMW series 3, 2022",
      'id':2
      
    },
    {
      'title': "I recently purchased a car from this company, and i couldn't be happier with my experience. The staff was knowledgeable, friendly, and not at all pushy. I recommend!",
      'auther': "Jessica, Chevrolet, 2021", 
      'id':3
    }
   
  ];


  return (
    <div>
       <h2 className="sub--h2">Our <span style={{color:'green'}}>Client's</span> Reviews</h2>
    <>
  
 <div className="list ">
     {
         array.map((item) =>{
     return (<article className="project  animate__animated animate__zoomIn" key={item.id} style={{marginLeft:'70px'}}>  
    <p className="sub--p" style={{fontSize:'17px', textAlign:'center'}}>{item.title}</p>
      <h6 style={{color:'white'}}>{item.auther}</h6>
    </article>);            
    
   })
     }
    
 </div>

 
 </>
 </div>
  )
}

export default Sublayer
