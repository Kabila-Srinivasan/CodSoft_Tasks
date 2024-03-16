import React, { useState } from 'react';
import '../assets/Navbar.css';
import './Sidebar';
import './Footer';
import ButtonAppBar from './Sidebar';
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    setSearchActive(false);
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
    setMenuActive(false);
  };

  return (
    <div>
      <nav>
      <div className='navi'>
     <ButtonAppBar/>
     </div> 
        <div className={`menu-icon ${menuActive ? 'hide' : ''}`} onClick={toggleMenu}>
          <span className="fas fa-bars"></span>
        </div>
        <div className="logomi">
        EliteApplianceCare
        </div>
        <div className={`nav-items ${menuActive ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/log">Login/Register</a></li>
          <li><a href="/about">About Us</a></li>
          
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/feed">Feedback</a></li>
          <li><a href="/carts">Products</a></li>
        </div>
        <div className={`search-icon ${searchActive ? 'hide' : ''}`} onClick={toggleSearch}>
          <span className="fas fa-search"></span>
        </div>
        <div className={`cancel-icon ${searchActive ? 'show' : ''}`} onClick={toggleSearch}>
          <span className="fas fa-times"></span>
        </div>
        <form action="#">
  <input type="search" className={`search-data ${searchActive ? 'active' : ''}`} placeholder="Search" required />
 
</form>

      </nav>
      
    <br/>
      
    </div>
  );
};

export default Header;
