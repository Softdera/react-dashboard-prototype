import React, { useState } from 'react';
import './SideBar.css'


function SideBar() {
    const [activeButton, setActiveButton] = useState('house');

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };

  return (
    <div className='flex_SvG'>
         <div className='reactLogo'>
        <i class="fa-brands fa-react" style={{color: "#fff",}}></i>
       </div>
       
       <div className='middlePart'>
      <button
        className={`houseBtn ${activeButton === 'house' ? 'isActive' : ''}`}
        onClick={() => handleButtonClick('house')}
      >
        <i className="fa-solid fa-house my-1" 
        style={{ color: activeButton === 'house' ? 'red' : '#fff' }}  />
      </button>

      <button
        className={`clockBtn ${activeButton === 'clock' ? 'isActive' : ''}`}
        onClick={() => handleButtonClick('clock')}
      >
        <i className="fa-solid fa-clock mx-1" 
        style={{ color: activeButton === 'clock' ? 'red' : '#fff' }}  />
      </button>

      <button
        className={`envelopeBtn ${activeButton === 'envelope' ? 'isActive' : ''}`}
        onClick={() => handleButtonClick('envelope')}
      >
        <i className="fa-solid fa-envelope mx-1"
         style={{ color: activeButton === 'envelope' ? 'red' : '#fff' }} />
      </button>

      <button
        className={`radioBtn ${activeButton === 'radio' ? 'isActive' : ''}`}
        onClick={() => handleButtonClick('radio')}
      >
        <i className="fa-solid fa-radio mx-1" 
        style={{ color: activeButton === 'radio' ? 'red' : '#fff' }} />
      </button>
    </div>
     
       <div className='bottom'> 
       <button className='bottomButton'> 
       <i class="fa-solid fa-right-from-bracket" style={{color: "#fff",}}></i>
       </button>
       </div>
     </div>
       
  )
}

export default SideBar;
