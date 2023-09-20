import React from 'react';
import Accordion from './Accordion';

function Listaccordion() {
  const accordionItems = [
    {
      title: 'How can i browse the inventory of cars availabe for sale?',
      content: 'You can easily browse our inventory by visiting "Our" page on our website or click "Browse All" under broswe inventory on the homepage. it provides a comprehensive list of the cars we currently have available, along with detailed infirmation, specifications, and pricing.',
    },
    {
      title: 'Do you offer financing options ofr car purchase?',
      content: 'Yes we offer financing options to make your car purchase more accessible. Our team can assist you in exporing financing solutions tailored to your needs, including  loan option and lease agreements.',
    },
    {
      title: 'Can i trade in my current car for a diffrent model?',
      content: 'Absolutely! We offer car swap services,allowing you to trade in your current vehicle for a diffrent model or upgrade. Our team will evaluate your vehicle"s value and provide you with a fair trade-in offer.',
    },
    {
      title: 'Do you provide customization services for cars?',
      content: 'Yes, we offer a range of customization services to personalize your car according to your preferences. Whether its interior upgrades, exterior modification, or performance enchancement, our skilled technicians can help bring your vision to life.',
    },
    {
      title: 'What kind of warranty do you offer an the cars you sell?',
      content: 'We provide on our vehicles to ensure pecea of mind for our customers. The specific warranty details my vary depending on the cars maker,model, and age. Our team will provide you with all the relevant warranty information during purchasing process.',
    },
    {
      title: 'Can i get my car current or repaired at your facility?',
      content: 'Absolutely! We have a dedicated servie center with highly skilled teachnicians who can handle a wide range of repairs and maintenance tasks.From routine servicing to complex repairs, we are equipped to keep yur vehcile in top condition.',
    },
  ];

  return (
    <div className="accordion">
      <h1  className="accord"><span style={{color:'green'}}>Questions</span> We're Often Asked</h1>
      <Accordion items={accordionItems} className="accorditem"/>
    </div>
  );
}

export default Listaccordion;
