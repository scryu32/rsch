'use client';

import { useState } from "react";

export default function Cards({ items }) {
  const [flippedStates, setFlippedStates] = useState(Array(items.length).fill(false));

  const handleClick = (index) => {
    setFlippedStates(prevState => {
      const newFlippedStates = [...prevState];
      newFlippedStates[index] = !newFlippedStates[index];
      return newFlippedStates;
    });
  };

  return (
    <div className="cards-container">
      {items.map((item, index) => (
        <div
          key={index}
          className={`card ${flippedStates[index] ? 'flipped' : ''} ${item.cardclass}`}
          onClick={() => handleClick(index)}
        >
          <div className="inner-card">
            <div className="front-card">
              <h4>{item.title}</h4>
              <img src={item.imgsrc} alt="cardimg" className="CardImage" />
              <p>{item.description}</p>
            </div>
          </div>
          <div className="back-card">
            <img src="./HuTao/HuTao_emoji1.png" alt="cardimg-back" />
          </div>
        </div>
      ))}
    </div>
  );
}
