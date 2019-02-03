import React from 'react';

const Navbar = () => {
    return (
      <header>
        <div className="navbar">
          <a id="logo">Croissant</a>
          <nav>
            <div className="nav-links">
              <a href="">Experiments</a>
              <a href="">Resources</a>
            </div>
            <div>
            <button>+33 6 50 08 49 44</button>
            </div>
          </nav>
        </div>
      </header>
    )
};  

export default Navbar;