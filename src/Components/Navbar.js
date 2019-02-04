import React from 'react';

const Navbar = () => {
    return (
      <header>
        <div className="navbar">
        <p id="logo">Croissant</p>
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