import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faClock,faRadio, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css'


const SideBar = () => {

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
           <FontAwesomeIcon icon={faHouse} className="fa-solid fa-house my-1" 
        style={{ color: activeButton === 'house' ? 'red' : '#fff' }}/>

      </button>

      <button
      
        className={`clockBtn ${activeButton === 'clock' ? 'isActive' : ''}`}
        onClick={() => handleButtonClick('clock')}
      >
         <FontAwesomeIcon icon={faClock} className="fa-solid fa-clock my-1" 
        style={{ color: activeButton === 'clock' ? 'red' : '#fff' }}/>
        
      </button>

      <button
        className={`envelopeBtn ${activeButton === 'envelope' ? 'isActive' : ''}`}
        onClick={() => handleButtonClick('envelope')}
      >
          <FontAwesomeIcon icon={faEnvelope} className="fa-solid fa-envelope my-1" 
        style={{ color: activeButton === 'envelope' ? 'red' : '#fff' }}/>
        
      </button>

      <button
        className={`radioBtn ${activeButton === 'radio' ? 'isActive' : ''}`}
        onClick={() => handleButtonClick('radio')}
      >
          <FontAwesomeIcon icon={faRadio} className="fa-solid fa-radio my-1" 
        style={{ color: activeButton === 'radio' ? 'red' : '#fff' }}/>
       
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
