import React from 'react';
import Navbar from './NavBar';
import Number from './Number';
import Stats from './Statistics';
import Mob from './Mobile';
import Manage from './Manage';
import Spent from './Spent';
import Button from './Button';
import '../index.css';





const Central = () => {

  // Determine if the screen size is smaller than 768px
  const isSmallerScreen = window.innerWidth <= 768;

  return (
    <div className='contain'>
      <div className='Nav_Con'>
        <Navbar />

      </div>
     
      <div className='Inner_Contain'>
        <div class="row">
          <div class="col large_view">
          <Button />

            {/* Render Number and Stats components only for larger screens */}
            {!isSmallerScreen && (
              <>
                <Number />
                <Stats />
              </>
            )}
            <div className='Inner_Central'>
              <div class="row">
                <div class="col">
                  <Spent />
                </div>
                <div class="col">
                  <Manage />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
          {!isSmallerScreen && (
              <>
              <Mob />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Central;
