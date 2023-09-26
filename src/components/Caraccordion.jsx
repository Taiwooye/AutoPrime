import React, { useState } from 'react';
import './CarSidebar.css';

const Accordion = () => {
  const [sections, setSections] = useState([
    {
      head: 'Condition',
      title: ['New', 'Used'],
    },
    {
      head: 'Body Type',
      title: ['Car', 'Suv', 'Truck'],
    },
    {
      head: 'Maker',
      title: ['Audi', 'BMW', 'Ford', 'Honda', 'Hyundai', 'Lexus'],
    },
    {
      head: 'Year ',
      title: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    },
  ]);

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    const updatedSections = { ...openSections };
    updatedSections[index] = !updatedSections[index];
    setOpenSections(updatedSections);
  };

  return (
    <div className="car-accordion">
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <div
              className={`accordion-car ${openSections[index] ? 'open' : ''}`}
              onClick={() => toggleSection(index)}
            >
              {section.head}
            </div>
            {openSections[index] && (
              <ul className="nested">
                {section.title.map((title, subIndex) => (
                 <li key={subIndex}>
                    
                      <label>
                        <input type="checkbox" /> {title}
                      </label>
                   
                    
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
