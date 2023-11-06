import React, { useState } from 'react';

function TrafficLight() {
  const colors = ['red', 'yellow', 'green'];
  const [colorIndex, setColorIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleClick = (color) => {
    setSelectedColor(color);
  };

  const changeColor = () => {
    const nextColorIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextColorIndex);
    setSelectedColor(colors[nextColorIndex]);
  };

  return (
    <div className="container">
      <div
        className={`red light ${selectedColor === 'red' ? 'glow' : ''}`}
        onClick={() => handleClick('red')}
      ></div>
      <div
        className={`yellow light ${selectedColor === 'yellow' ? 'glow' : ''}`}
        onClick={() => handleClick('yellow')}
      ></div>
      <div
        className={`green light ${selectedColor === 'green' ? 'glow' : ''}`}
        onClick={() => handleClick('green')}
      ></div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default TrafficLight;