import React, { useState } from 'react';
import '../index.css';
import './Button.css'; 
import Mob from './Mobile';
import Number from './Number';
import Stats from './Statistics';


const Button = () => {

    const [activeButton, setActiveButton] = useState('button1'); 

  const [activeComponents, setActiveComponents] = useState({
    button1: [Number, Stats ], // Initial components for button 1
    button2: [Mob], // Initial components for button 2
  });

  const handleButtonClick = (buttonNumber) => {
    let additionalComponents = []; // Additional components to add based on button clicked
    switch (buttonNumber) {
      case 'button1':
        additionalComponents = [ Number, Stats ]; // Add components for button 1
        break;
      case 'button2':
        additionalComponents = [Mob ]; // Add components for button 2
        break;
      default:
        break;
    }

    setActiveComponents(prevState => ({
      ...prevState,
      [buttonNumber]: [
        ...additionalComponents, // Add additional components
      ]
    }));
    setActiveButton(buttonNumber); // Set active button when clicked
  };

  return (
    <div className="showcase-container">
      {/* Buttons for smaller screens */}
      <div className='buttons-container'>
        <div className='sm-screen-only'>
          <div class="row">
            <div class="col">
              <button 
                className={`mob_btn ${activeButton === 'button1' ? 'active' : ''}`}
                onClick={() => handleButtonClick('button1')}>
                <i class="fa-solid fa-chart-column"></i> 
              </button>
            </div>
            <div class="col">
              <button 
                className={`mob_btn ${activeButton === 'button2' ? 'active' : ''}`}
                onClick={() => handleButtonClick('button2')}>
                <i class="fa-solid fa-image"></i> 
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Showcased components */}
      <div className="showcased-component">
        {activeComponents[activeButton].map((Component, index) => (
          <Component key={index} />
        ))}
    { /*{activeComponents.button2.map((Component, index) => (
          <Component key={index} />
        ))} */}
      </div>
    </div>
  );
}

export default Button;
