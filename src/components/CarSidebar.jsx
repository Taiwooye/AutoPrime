import './CarSidebar.css'
import Caraccordion from './Caraccordion';
import frame2 from '../images/red.jpg';
import car3 from '../images/car3.jpg';
import blue2 from '../images/blue2.jpg';
import bmw from '../images/bmw.jpg';
import car from '../images/car.jpg';
import blue from '../images/blue.jpg';
import harsh from '../images/harsh.jpg';
import white from '../images/white.jpg';
import black from '../images/black.jpg';
import car2 from '../images/car2.jpg';


function CarSidebar() {

  const carlist = [
    {
        'date': "Gran Turismo Luxury",
      'title': "BMW 3 Series 320D X Drive", 
      'image': frame2,
      'model':"2021 12500 miles",
      'price':"#31,345,000"
    },
    {
        'date': "Gran Turismo Luxury",
      'title': "BMW 3 Series 320D X Drive", 
      'image': car3,
      'model':"2021 12500 miles",
      'price':"#31,345,000"
    },
    {
        'date': "Gran Turismo Luxury",
      'title': "BMW 3 Series 320D X Drive", 
      'image': black,
      'model':"2021 12500 miles",
      'price':"#31,345,000"
    },
    {
        'date': "Gran Turismo Luxury",
      'title': "BMW 3 Series 320D X Drive", 
      'image': white,
      'model':"2021 12500 miles",
      'price':"#31,345,000"
    },
    {
        'date': "Gran Turismo Luxury",
      'title': "BMW 3 Series 320D X Drive", 
      'image': harsh,
      'model':"2021 12500 miles",
      'price':"#31,345,000"
    },
    {
        'date': "Gran Turismo Luxury",
      'title': "BMW 3 Series 320D X Drive", 
      'image': blue,
      'model':"2021 12500 miles",
      'price':"#31,345,000"
    },
    {
        'date': "Gran Turismo Luxury",
      'title': "BMW 3 Series 320D X Drive", 
      'image': car,
      'model':"2021 12500 miles",
      'price':"#31,345,000"
    },
    {
        'date': "Gran Turismo Luxury",
      'title': "BMW 3 Series 320D X Drive", 
      'image': bmw,
      'model':"2021 12500 miles",
      'price':"#31,345,000"
    },
    {
        'date': "Gran Turismo Luxury",
      'title': "BMW 3 Series 320D X Drive", 
      'image': harsh,
      'model':"2021 12500 miles",
      'price':"#31,345,000"
    },
    {
        'date': "Gran Turismo Luxury",
      'title': "BMW 3 Series 320D X Drive", 
      'image': blue2,
      'model':"2021 12500 miles",
      'price':"#31,345,000"
    },
    {
        'date': "Gran Turismo Luxury",
      'title': "BMW 3 Series 320D X Drive", 
      'image': bmw,
      'model':"2021 12500 miles",
      'price':"#31,345,000"
    },
    {
        'date': "Gran Turismo Luxury",
      'title': "BMW 3 Series 320D X Drive", 
      'image': car2,
      'model':"2021 12500 miles",
      'price':"#31,345,000"
    },
  ]

  return (
    
    <div className="wrapper">
        <div className="sidebar">
     <h3>Filters</h3>
  
      <Caraccordion />
    </div>

    <div className="mainsidebar">
   <input type="text" className='mainsidebar-input'
   placeholder='Enter Keywords like "Suv" or "Chevolet 2022"'/>
    <button className='mainsidebar-butt'>Search</button>


    <div className="mainhead">
      <p>15 cars found</p>
      <span>Sort: <button style={{border:'none', fontSize:'15px'}}>Low to High Price</button></span>
    </div>



    <div className='cardm'>
      

 {carlist.map((items) => {
  
  return (
    
    
    <div key={items.title}>

    

     
    <div className='cardn'>
          <div className="car-header">
          <img src={items.image} alt="" className="car-img" />
          </div>
          <div className="car-body">
          <h3>{items.title} </h3>
          <h4>{items.date}</h4>
            <h6>Year Mileage</h6>
            <h6>{items.model} </h6>
           <p>{items.price}</p>
         
          
          </div>
          
          </div>

      
     </div> 

   
  );
  
  }
)} 

 </div>
 
 <div className="lastcard">
            <h3 className='last3'>Cant Find Your Preferred Vehicles?</h3>
            <h6 className='last4'>You choose a vehicle you prefer, and we&apos;ll
             proceed wit </h6>
             <h6 className='last4'>placing an order for it on your behalf</h6>
             <button className='butt5'>Order Now</button>
          </div>
    </div>
  

  </div>
  
  )
}

export default CarSidebar
