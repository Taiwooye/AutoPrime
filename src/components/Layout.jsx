import React from 'react'
import './Layout.css'
import mechanic from '../images/mechanic.jpg';
import mech1 from '../images/mech1.jpg';
import mech2 from '../images/mech2.jpg';
import mech3 from '../images/mech3.jpg';
import mech4 from '../images/mech4.jpg';

export default function Layout() {

  const myList = [
    {
      'title': "Maximizing Fuel Efficiency: Simple Tips for saving on Gas",
      'date': "June 26, 2023",
      'image': mech1
    },
    {
      'title': "The Essential Maintenance Checklist for Every Car Owner",
      'date': "June 26, 2023",
      'image': mech2
    },
    {
      'title': "Pro Tips for Longer Tyre Life",
      'date': "June 26, 2023",
      'image': mech3
    },
    {
      'title': "Top Pratices for a Safer journey",
      'date': "June 26, 2023",
      'image': mech4
    }
  ];

  return (

      <div className='container'>


      <div className="left">
        <img src={mechanic} alt=""style={{position:'inherit', width:'600px', height:'700px' }} />
      </div>

      <div className="right">

          <h3 className='lay-out-h3'><span style={{color:'green', fontSize: '35px'}}>Expert</span> Car Care Tips</h3>

        {myList.map((items) => {
          
          return (
            
            <div key={items.title}>
              
              <ul className='left--ul'>
         
              <li  className='left--li' style={{width:'100%', height:'100%'  }}>
                
            <div style={{marginRight:'40px'}} >
            <img src={items.image} alt="slide"  style={{position:'inherit', width:'120px', height:'90%', }}/>
            </div>
             <div   style={{position:'inherit', width:'570px', height:'100%'}} >
             <p style={{ maxWidth:345,fontSize:'20px' }}>{items.title}</p>
              <h6>{items.date}</h6>
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
