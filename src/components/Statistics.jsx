import React from 'react';
import '../index.css';
import './Stats.css'

const Stats = () => {

  return (
    
    <div className='Stats_Container'>
        <div className='Stats_top'>
                        <div class="row">
                            <div class="col">
                                <h6>Statistics</h6>
                           </div>
                           <div class="col">
                           <div class="dropdown">
                                <button 
                    class="btn btn-white dropdown-toggle"
                     type="button" data-bs-toggle="dropdown" 
                     aria-expanded="false">
                                    Year
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                                </div>
                           </div>
                           </div>  
        </div>
          <img alt='stats_img' className='stats_img'
          src="https://i.stack.imgur.com/N7yh5.png"></img>
          </div>



       
  )
}

export default Stats;

