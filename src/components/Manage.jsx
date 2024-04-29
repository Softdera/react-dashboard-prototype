import React from 'react';
import '../index.css';
import './manage.css';



function Manage() {
  return (
    
    <div className='Manage_Container'>
        <div className='manage_top'>
        <div class="row">
                            <div class="col">
                         <img className='fUser' alt='fUser'
                         src="data:image/jpeg;base64,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"></img>

                            </div>
                            <div class="col">
                                <p className='Lily'><strong>Lily Donovan</strong> <br/> Business Trainer</p>

                            </div>

                        </div>
        </div>
        <div className='manage-mid'>
            <h5>How to properly manage your <br></br> personal budget</h5>
        </div>

        <div className='Manage_Contain'>
                        <div class="row">
                            <div class="col">
                            <p className='icns'>
                            <i class="fa-solid fa-play"></i> Video </p>
                            </div>
                            <div class="col">
                            <p className='icns'>
                            <i class="fa-solid fa-clock " style={{color: "#B197FC",}}></i> 15 mins
                            </p>
                            </div>
                            <div class="col">
                                <p className='icns'>
                                <i class="fa-solid fa-star" 
                                style={{color: "#FF0000",}} ></i>
                                12 likes
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='Manage_Contain'>
                        <div class="row">
                            <div class="col">
                                <p className='fiveDays'>
                                    5 days ago
                                </p>
                            </div>
                            <div class="col">
                           <button className='angle_button'>
                             <p>Connect</p> <i class="fa-solid fa-angle-right" style={{color: "#fff",}}></i>   
                           </button>
                            </div>

                            </div>

                    </div>
          </div>

       
  )
}

export default Manage;
