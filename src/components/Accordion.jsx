import { useState } from 'react';
import PropTypes from 'prop-types'; // Add prop-types import
import './Accordion.css';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
    <div className="accordion-header" onClick={onClick}>
      {title}
    </div>
    {isOpen && <div className="accordion-content">{content}</div>}
  </div>
);

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

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

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Accordion;
