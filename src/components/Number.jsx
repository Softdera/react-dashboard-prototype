import React,{ useState } from 'react';
import '../index.css';
import './Num.css'



function Number() {
    const [activeDiv, setActiveDiv] = useState('Orders');
 
    const handleButtonClick = (divName) => {
        setActiveDiv(divName);
      };
  
  return (
    <div class="num_container text-center">
  <div class="row">
    <div class="col">
    <div className=''>
                        <div class="row "
                        className={`num_col ${activeDiv === 'Visitors' ? 'divActive' : ''}`}
                        onClick={() => handleButtonClick('Visitors')}
                      >
                            <div class="col ">
                            <img className='number_img'
                          src="data:image/png;base64,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" />
                            </div>
                            <div class="col">
                            <p className='Customers'>Visitors
                            <br/> 
                           <strong>10,320</strong>
                            </p>
                            </div>
                            </div>
                </div>
    </div>
    <div class="col">
    <div className=''>
                        <div class="row "
                        className={`num_col ${activeDiv === 'Customer' ? 'divActive' : ''}`}
                        onClick={() => handleButtonClick('Customer')}
                      >
                            <div class="col ">
                            <img className='number_img'
                          src="data:image/png;base64,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" />
                            </div>
                            <div class="col">
                            <p className='Customers'>Customers
                            <br/> 
                           <strong>4.628</strong> 
                            </p>
                            </div>
                            </div>
                </div>
                </div>

    <div class="col">
    <div className=''>
                        <div class="row "
                        className={`num_col ${activeDiv === 'Orders' ? 'divActive' : ''}`}
                        onClick={() => handleButtonClick('Orders')}
                      >
                            <div class="col ">
                            <img className='number_img'
                          src="data:image/png;base64,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" />
                            </div>
                            <div class="col">
                            <p className='Customers'>Orders
                                 <br/> 
                           <strong>2.980</strong> 
                            </p>
                            </div>
                            </div>
                            </div>
    </div>
  </div>
    </div>

       
  )
}

export default Number;
