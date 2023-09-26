import React, { useState } from 'react';
import './Accordion.css';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
    <div className="accordion-header" onClick={onClick}>
      {title}
    </div>
    {isOpen && <div className="accordion-content">{content}</div>}
  </div>
);

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1); 
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
