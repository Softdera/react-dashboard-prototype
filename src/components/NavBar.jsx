import React from 'react';
import Bell from '../assets/bell.svg'
//import SearchIcon from '../assets/search.svg'
import '../index.css';
import './Navbar.css'; // Import your CSS file for styling



const Navbar = () => {

  return (
      

    <div className='NavBar_Container'>
            <nav class="navbar 
            navbar-expand-lg 
            bg-light">
                <div class="container-fluid">
                
                    <sup className='sub'>2</sup> 
                    <img className='bell_svg'
                    src={Bell} alt="bell-svg">

                    </img>
                    <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                        alt='user_image'
                        className='user'></img>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex Search"
                        role="search">
                        <i class="fa-solid 
                        fa-magnifying-glass"></i>
                        <input class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search" />
                    </form>
                    
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Feedback</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Contacts</a>
                        </li> 
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Help</a>
                        </li>
                       
                    </ul>
                    
                    </div>
                </div>
                </nav>
    </div>




  );
}

export default Navbar;
