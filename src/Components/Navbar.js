import React from 'react';
import logo from '../img/croissant-logo.png';
import hamburger from '../img/hamburger.png'

const Navbar = () => {
    return (
      <header>
        <div className="navbar">
        <div className="mobile-menu">
          <img src={logo} className="logo" alt="logo" height="33px" />
          <img src={hamburger} className="hamburger" alt="menu" height="33px" />
        </div>
          <nav className="toggle">
            <div className="navbar-links">
              <a href="">Experiments</a>
              <a href="">Resources</a>
            </div>
            <div className='navbar-cta'>
              <button className='btn'>+33 6 50 08 49 44</button>
            </div>
          </nav>
        </div>
      </header>
    )
};  

export default Navbar;