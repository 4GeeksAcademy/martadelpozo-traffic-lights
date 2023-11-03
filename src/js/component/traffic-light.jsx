import React, { useState } from 'react';

function TrafficLight() {
  const colors = ['red', 'yellow', 'green'];
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    const nextColorIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextColorIndex);
  };

  return (
    <div className="container">
      <div
        className={`red light ${colors[colorIndex] === 'red' ? 'glow' : ''}`}
        onClick={() => handleClick('red')}
      ></div>
      <div
        className={`yellow light ${colors[colorIndex] === 'yellow' ? 'glow' : ''}`}
        onClick={() => handleClick('yellow')}
      ></div>
      <div
        className={`green light ${colors[colorIndex] === 'green' ? 'glow' : ''}`}
        onClick={() => handleClick('green')}
      ></div>
           <button onClick={handleClick}>Change Color</button>
    </div>

  );
}

export default TrafficLight;

