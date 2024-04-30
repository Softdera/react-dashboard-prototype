import React from 'react';
import SideBar from "./SideBar";
import Central from "./Central";
import '../index.css';




const Home = () => {
  return (
    
    <div className='container'>
      

          <div className='side_bar'> 
            <SideBar />

          </div>

          <div className='central'> 

                
                    <Central />
                </div>
          </div>

       
  )
}

export default Home;
