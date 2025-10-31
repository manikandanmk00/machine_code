import React, { useState } from "react";
import "./Accordian.css";

const Accordian = ({ items }) => {
  const[openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex == index ? null : index)
  }
  return (
    <div className="accordian">
      {items.map((items,index)=> {
        return <div key={index} className="accordian-item" > 
        <button className="accordian-title" onClick={()=> handleToggle(index)
        }>
          {items.title}
        </button>
        {openIndex === index &&
        <div className="accordian-content">
          {items.content}
        </div> }
        </div>
      })}
    </div>
  );
};

export default Accordian;
