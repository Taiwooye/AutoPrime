import React from 'react';

function Subfooter() {
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

export default Subfooter
