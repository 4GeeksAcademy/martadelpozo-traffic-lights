import React, {useState} from 'react'


function TrafficLight() {
    const [color, setColor] = useState('red');
  
    const handleClick = (newColor) => {
      setColor(newColor);
    };
  
    return (
      <div className="container">
        <div className={`red light ${color === 'red' ? 'glow' : ''}`} onClick={() => handleClick('red')}></div>
        <div className={`yellow light ${color === 'yellow' ? 'glow' : ''}`} onClick={() => handleClick('yellow')}></div>
        <div className={`green light ${color === 'green' ? 'glow' : ''}`} onClick={() => handleClick('green')}></div>
      </div>
    );
  }

export default TrafficLight;
