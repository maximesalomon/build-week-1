import React from 'react';
import logo from '../img/croissant-logo.png'

const Navbar = () => {
    return (
      <header>
        <div className="navbar">
        <img src={logo} classsName="logo" alt="logo" height="33px" />
          <nav>
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