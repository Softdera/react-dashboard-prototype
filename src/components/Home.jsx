import React from 'react';
//3import Navbar from './NavBar'
import SideBar from "./SideBar";
import Central from "./Central";
import '../index.css';




function App() {
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

export default App;
